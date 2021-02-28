import React from 'react';

import Head from 'next/head';
import { GetServerSideProps } from 'next';

import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import ChallengeBox from '../components/ChallengeBox';

import styles from '../styles/home.module.css';

import { CountDownProvider } from '../contexts/CountDownContext';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { isAuthenticated } from '../helpers/isAuthenticated';

interface HomeProps {
	challengesCompleted: number;
	experience: number;
	level: number;
}

const Home:React.FC<HomeProps> = ({
	level,
	challengesCompleted,
	experience
}) => (
	<ChallengesProvider
		level={ level }
		experience={ experience }
		challengesCompleted={ challengesCompleted }
	>
		<div className={ styles.container }>
			<Head>
				<title> Início | move.it </title>
			</Head>
			<ExperienceBar />

			<CountDownProvider>
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
			</CountDownProvider>
		</div>
	</ChallengesProvider>
);

export const getServerSideProps:GetServerSideProps = async (ctx) => {
	const {
		level,
		experience,
		challengesCompleted
	} = ctx.req.cookies;

	if (!isAuthenticated(ctx.req)) {
		ctx.res.writeHead(303, { location: '/' });
		ctx.res.end();
	}

	return {
		props: {
			level: Number(level),
			experience: Number(experience),
			challengesCompleted: Number(challengesCompleted)
		}
	}
}

export default Home;
