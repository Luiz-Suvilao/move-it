import React from 'react';

import styles from './Competitor.module.css';

const Competitor = () => {
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

					<h1> Luiz Filipe </h1>
				</div>

				<div className={ styles.level }>
					<img src="icons/level.svg" alt="Imagem de nível" />
					<p> Level <span className={ styles.number }> 2 </span> </p>
				</div>
				<p> <span className={ styles.number }> 127 </span> Desafios Completos </p>
				<p> <span className={ styles.number }> 199999 </span> XP </p>
			</div>
		</div>
	);
};

export default Competitor;
