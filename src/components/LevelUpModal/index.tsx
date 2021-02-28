import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './LevelUpModal.module.css';

const LevelUpModal = () => {
	const { level, experienceToNextLevel ,closeLevelUpModal } = useContext(ChallengesContext);
	return (
		<div className={ styles.overlay }>
			<div className={ styles.container }>
				<header> { level } </header>
				<strong> Parabéns! </strong>
				<p>
					Você alcançou um novo level.
					consiga mais {experienceToNextLevel}
					de XP para avançar novamente.
				</p>
				<button type="button">
					<img
						onClick={ closeLevelUpModal }
						src="/icons/close.svg"
						alt="Símbolo de fechar para fechar o modal de level up"
					/>
				</button>
			</div>
		</div>
	);
}

export default LevelUpModal;
