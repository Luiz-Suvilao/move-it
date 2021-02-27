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
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider:React.FC<ChallengesProviderProps> = ({
	children
}) => {
	const [level, setLevel] = useState(1);
	const [experience, setExperience] = useState(0);
	const [challengesCompleted, setChallengesCompleted] = useState(0);
	const [activeChallenge, setActiveChallenge] = useState(null);

	const levelUp = () => setLevel(level + 1);

	const startNewChallenge = () => {
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
		const challenge = challenges[randomChallengeIndex];

		setActiveChallenge(challenge);
	}

	return (
		<ChallengesContext.Provider
			value={ {
				level,
				levelUp,
				experience,
				challengesCompleted,
				startNewChallenge,
				activeChallenge
			} }
		>
			{ children }
		</ChallengesContext.Provider>
	);
}
