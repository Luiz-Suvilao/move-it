import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

import { ChallengesContext } from './ChallengesContext';

interface CountDownProviderProps {
	children: ReactNode;
};

interface CountDownContextData {
	minutes: number
	seconds: number
	hasFinished: boolean,
	isActive: boolean,
	resetCountDown: () => void;
	startCountDown: () => void;
};

export const CountDownContext = createContext({} as CountDownContextData);

export const CountDownProvider:React.FC<CountDownProviderProps> = ({
	children
}) => {
	let countDownTimeout: NodeJS.Timeout;

	const [time, setTime] = useState(0.1 * 60);
	const [isActive, setIsActive] = useState(false);
	const [hasFinished, setHasFinished] = useState(false);

	const minutes = Math.floor(time / 60);
	const seconds = time % 60;

	const { startNewChallenge } = useContext(ChallengesContext);

	useEffect(() => {
		if (isActive && time > 0) {
			countDownTimeout = setTimeout(() => {
				setTime(time - 1);
			}, 1000);
		} else if (isActive && time === 0) {
			setHasFinished(true);
			setIsActive(false);
			startNewChallenge();
		}

	}, [isActive, time]);

	const startCountDown = () => setIsActive(true);

	const resetCountDown = () => {
		clearTimeout(countDownTimeout);
		setIsActive(false);
		setHasFinished(false);
		setTime(0.1 * 60);
	}

	return (
		<CountDownContext.Provider
			value={ {
				minutes,
				seconds,
				hasFinished,
				isActive,
				resetCountDown,
				startCountDown,
			} }
		>
			{ children }
		</CountDownContext.Provider>
	);
}
