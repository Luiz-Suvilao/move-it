import { createContext, useState, ReactNode } from 'react';

import challenges from '../../challenges.json';

interface ChallengesProviderProps {
	children: ReactNode;
};

interface Challenge {
	type: 'body' | 'eye';
	description: string;
	amount: number;
}

interface ChallengesContextData {
	level: number;
	levelUp: () => void;
	experience: number;
	challengesCompleted: number;
	startNewChallenge: () => void;
	activeChallenge: Challenge;
	resetChallege: () => void;
	experienceToNextLevel: number;
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider:React.FC<ChallengesProviderProps> = ({
	children
}) => {
	const [level, setLevel] = useState(1);
	const [experience, setExperience] = useState(0);
	const [challengesCompleted, setChallengesCompleted] = useState(0);
	const [activeChallenge, setActiveChallenge] = useState(null);

	const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

	const levelUp = () => setLevel(level + 1);

	const startNewChallenge = () => {
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
		const challenge = challenges[randomChallengeIndex];

		setActiveChallenge(challenge);
	}

	const resetChallege = () => setActiveChallenge(null);

	return (
		<ChallengesContext.Provider
			value={ {
				level,
				levelUp,
				experience,
				challengesCompleted,
				startNewChallenge,
				activeChallenge,
				resetChallege,
				experienceToNextLevel
			} }
		>
			{ children }
		</ChallengesContext.Provider>
	);
}
