import React from 'react';

import styles from './ChallengeBox.module.css';

const ChallengeBox: React.FC = () => {
	const hasActiveChallenge = true;

	return (
		<div className={ styles.container }>
			{ hasActiveChallenge ? (
				<div className={ styles.challengeActive }>
					<header> Ganhe 400 xp </header>

					<main>
						<img
							src="/icons/body.svg"
							alt="Símbolo de uma mão segurando um peso"
						/>
						<strong> Novo desafio! </strong>
						<p>
							Levante e corra!
						</p>
					</main>

					<footer>
						<button
							className={ styles.challengeFailedButton }
							type="button"
						>
							Falhei
						</button>

						<button
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
