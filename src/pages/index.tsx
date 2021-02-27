import React from 'react';
import CompletedChallenges from '../components/CompletedChallenges';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import styles from '../styles/index.module.css';

const Home:React.FC = () => (
	<div className={ styles.container }>
		<ExperienceBar />

		<section>
			<div>
				<Profile />
				<CompletedChallenges />
			</div>

			<div>

			</div>
		</section>
	</div>
);

export default Home;
