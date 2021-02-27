import React from 'react';

import styles from './ExperienceBar.module.css';

const ExperienceBar: React.FC = () => (
	<header className={ styles.experienceBar }>
		<span> 0 XP </span>

		<div>
			<div style={ { width: '50%' } } />
			<span
				style={ { left: '50%' } }
				className={ styles.currentExperience }
				>
					300 XP
			</span>
		</div>

		<span> 600 XP </span>
	</header>
);

export default ExperienceBar;
