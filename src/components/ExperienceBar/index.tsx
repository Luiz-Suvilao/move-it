import React, { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './ExperienceBar.module.css';

const ExperienceBar: React.FC = () => {
	const { experience, experienceToNextLevel } = useContext(ChallengesContext);

	const percentToNextLevel = Math.round(experience * 100) / experienceToNextLevel;

	return (
		<header className={ styles.experienceBar }>
			<span> 0 XP </span>

			<div>
				<div style={ { width: `${percentToNextLevel}%` } } />
				<span
					style={ { left: `${percentToNextLevel}%` } }
					className={ styles.currentExperience }
					>
						{ experience } XP
				</span>
			</div>

			<span> { experienceToNextLevel } XP </span>
		</header>
	);
}

export default ExperienceBar;
