import React, { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './CompletedChallenges.module.css';

const CompletedChallenges: React.FC = () => {
	const { challengesCompleted } = useContext(ChallengesContext);

	return (
		<div className={styles.container}>
			<span> Desafios completos </span>
			<span> { challengesCompleted } </span>
		</div>
	);
}

export default CompletedChallenges;
