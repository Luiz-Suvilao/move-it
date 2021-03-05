import React from 'react';

import styles from './Competitor.module.css';

interface CompetitorProps {
	experience: number;
	level: number;
	name: string;
	complete_challenges: string;
}

const Competitor: React.FC<CompetitorProps> = ({
	complete_challenges,
	experience,
	level,
	name
}) => {
	return (
		<div className={ styles.container }>
			<div className={ styles.position }>1</div>

			<div className={ styles.competitor }>

				<div className={ styles.competitorProfile }>
					<img
						className={ styles.img }
						src="https://github.com/Luiz-Suvilao.png"
						alt="Foto do usuário"
					/>

					<h1> { name } </h1>
				</div>

				<div className={ styles.level }>
					<img src="icons/level.svg" alt="Imagem de nível" />
					<p> Level <span className={ styles.number }> { level } </span> </p>
				</div>
				<p> <span className={ styles.number }> { complete_challenges } </span> Desafios Completos </p>
				<p> <span className={ styles.number }> { experience } </span> XP </p>
			</div>
		</div>
	);
};

export default Competitor;
