import React, { useEffect, useState } from 'react';

import Head from 'next/head';

import Layout from '../components/Layout/layout';
import Competitor from '../components/Competitor/Competitor';

import CompetitorController from '../controller/CompetitorController';

import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/ranking.module.css';

const Ranking = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const controller = new CompetitorController();
		controller.getAllCompetitores().then(resp => {
			setData(resp);
		});
	}, []);

	return (
		<ChallengesProvider>
			<Head>
				<title> Ranking | move.it </title>
			</Head>

			<Layout>
				<div className={ styles.container }>
					<h1> Leaderboard </h1>
					<div className={ styles.competitorGroup }>
						{
							data && data.map(item => <Competitor
									key={ item.id }
									complete_challenges={ item.complete_challenges }
									experience={ item.experience }
									level={ item.level }
									name={ item.name }
								/>
							)
						}
					</div>
				</div>
			</Layout>
		</ChallengesProvider>
	);
}

export default Ranking;
