import React from 'react';

import styles from './CompletedChallenges.module.css';

const CompletedChallenges: React.FC = () => {
	return (
		<div className={styles.container}>
			<span> Desafios completos </span>
			<span> 3 </span>
		</div>
	);
}

export default CompletedChallenges;
