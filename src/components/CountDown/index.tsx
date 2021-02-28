import React, { useContext } from 'react';

import { CountDownContext } from '../../contexts/CountDownContext';

import styles from './CountDown.module.css';

const CountDown: React.FC = () => {
	const {
		minutes,
		seconds,
		hasFinished,
		isActive,
		startCountDown,
		resetCountDown
	} = useContext(CountDownContext);

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	return (
		<div>
			<div className={ styles.container }>
				<div>
					<span> { minuteLeft } </span>
					<span> { minuteRight } </span>
				</div>

				<span>:</span>

				<div>
					<span> { secondLeft } </span>
					<span> { secondRight } </span>
				</div>
			</div>

			{ hasFinished ? (<button
					disabled
					className={ styles.startButton }
				>
					Contagem encerrada!
					<img
						src="/icons/check.svg"
						alt="Imagem de sucesso! Contagem encerrada"
					/>
				</button>) : (
					<>
						{
							isActive ?
							(<button
								type="button"
								className={ `${styles.startButton} ${styles.startButtonActive}` }
								onClick={ resetCountDown }
							>
								Abandonar!
								<img
									src="/icons/close.svg"
									alt="Símbolo de fechar. Encerrar contagem"
								/>
							</button>
							) : (<button
									type="button"
									className={ styles.startButton }
									onClick={ startCountDown }
								>
									Iniciar!
									<img
										src="/icons/play.svg"
										alt="Símbolo de play. Iniciar contangem"
									/>
								</button>)
						}
					</>
				)
			}
		</div>
	);
}

export default CountDown;
