import React from 'react';

import Head from 'next/head';

import Layout from '../components/Layout/layout';

import { ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/ranking.module.css';

const Ranking = () => {
	return (
		<ChallengesProvider>
			<Head>
				<title> Ranking | move.it </title>
			</Head>

			<Layout>
				<div className={ styles.container }>
					<h1> Leaderboard </h1>
				</div>
			</Layout>
		</ChallengesProvider>
	);
}

export default Ranking;
