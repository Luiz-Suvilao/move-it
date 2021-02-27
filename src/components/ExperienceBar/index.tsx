import React from 'react';

const ExperienceBar: React.FC = () => (
	<header className='experience-bar'>
		<span> 0 XP </span>

		<div>
			<div style={ { width: '50%' } } />
			<span
				style={ { left: '50%' } }
				className='current-experience'
				>
					300 XP
			</span>
		</div>

		<span> 600 XP </span>
	</header>
);

export default ExperienceBar;