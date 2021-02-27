import React from 'react';

import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';

import styles from '../styles/index.module.css';

const Home:React.FC = () => (
	<div className={ styles.container }>
		<ExperienceBar />

		<section>
			<div className=''>
				<Profile />
			</div>

			<div>

			</div>
		</section>
	</div>
);

export default Home;
