import React, { useState, useEffect } from 'react';

import styles from './CountDown.module.css';

let countDownTimeout: NodeJS.Timeout;

const CountDown: React.FC = () => {
	const [time, setTime] = useState(0.1 * 60);
	const [isActive, setIsActive] = useState(false);
	const [hasFinished, setHasFinished] = useState(false);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
	const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

	useEffect(() => {
		if (isActive && time > 0) {
			countDownTimeout = setTimeout(() => {
				setTime(time - 1);
			}, 1000);
		} else if (isActive && time === 0) {
			setHasFinished(true);
			setIsActive(false);
		}

	}, [isActive, time]);

	const resetCountDown = () => {
		clearTimeout(countDownTimeout);
		setIsActive(false);
		setTime(0.1 * 60);
	}

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
					Ciclo encerrado
				</button>) : (
					<>
						{
							isActive ?
							(<button
								type="button"
								className={ `${styles.startButton} ${styles.startButtonActive}` }
								onClick={ resetCountDown }
							>
								Abandonar contagem!
							</button>
							) : (<button
									type="button"
									className={ styles.startButton }
									onClick={ () => setIsActive(true) }
								>
									Iniciar!
								</button>)
						}
					</>
				)
			}
		</div>
	);
}

export default CountDown;
