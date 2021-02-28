import React, { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountDownContext } from '../../contexts/CountDownContext';

import styles from './ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
	const {
		activeChallenge,
		resetChallege,
		completeChallenge
	} = useContext(ChallengesContext);

	const { resetCountDown } = useContext(CountDownContext);


	const handleChallengeSuccess = () => {
		completeChallenge();
		resetCountDown();
	}

	const handleChallengeFailed = () => {
		resetCountDown();
		resetChallege();
	}

	return (
		<div className={ styles.container }>
			{ activeChallenge ? (
				<div className={ styles.challengeActive }>
					<header> Ganhe { activeChallenge.amount } xp </header>

					<main>
						<img
							src={ `/icons/${activeChallenge.type}.svg` }
							alt="Símbolo de uma mão segurando um peso"
						/>
						<strong> Novo desafio! </strong>
						<p>
							{ activeChallenge.description }
						</p>
					</main>

					<footer>
						<button
							onClick={ handleChallengeFailed }
							className={ styles.challengeFailedButton }
							type="button"
						>
							Falhei
						</button>

						<button
							onClick={ handleChallengeSuccess }
							className={ styles.challengeCompletedButton }
							type="button"
						>
							Completei
						</button>
					</footer>
				</div>
			) : (
				<div className={ styles.challengeNotActive }>
					<strong> Finalize um ciclo para receber um desafio </strong>
					<p>
						<img
							src="/icons/level-up.svg"
							alt="símbolo de avanço de nível"
						/>
						Avance de level completando desafios!
					</p>
				</div>
			) }
		</div>
	);
}

export default ChallengeBox;
