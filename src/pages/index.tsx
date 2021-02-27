import React from 'react';

import Head from 'next/head';

import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';

import styles from '../styles/index.module.css';

const Home:React.FC = () => (
	<div className={ styles.container }>
		<Head>
			<title> Início | move.it </title>
		</Head>
		<ExperienceBar />

		<section>
			<div>
				<Profile />
				<CompletedChallenges />
				<CountDown />
			</div>

			<div>
				<ChallengeBox />
			</div>
		</section>
	</div>
);

export default Home;
