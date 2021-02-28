import { createContext, useState, ReactNode, useEffect } from 'react';

import Cookies from 'js-cookie';

import challenges from '../../challenges.json';
import LevelUpModal from '../components/Modal';

interface ChallengesProviderProps {
	children: ReactNode;
	challengesCompleted?: number;
	experience?: number;
	level?: number;
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
	completeChallenge: () => void;
	closeModal: () => void;
	openModal: () => void;
};

export const ChallengesContext = createContext({} as ChallengesContextData);

export const ChallengesProvider:React.FC<ChallengesProviderProps> = ({
	children,
	...rest
}) => {
	const [level, setLevel] = useState(rest.level ?? 1);
	const [experience, setExperience] = useState(rest.experience ?? 0);
	const [challengesCompleted, setChallengesCompleted] = useState(rest.challengesCompleted ?? 0);
	const [activeChallenge, setActiveChallenge] = useState(null);
	const [difficulty, setDifficulty] = useState(4);
	const [isLevelUpModalOpen, setIsLevelUpModalOpen] = useState(false);
	const [isUpgrade, setIsUpgrade] = useState(false);

	const experienceToNextLevel = Math.pow((level + 1) * difficulty, 2);

	const levelUp = () => {
		setLevel(level + 1);
		setIsLevelUpModalOpen(true);
		setIsUpgrade(true);
	};

	const openModal = () => setIsLevelUpModalOpen(true);

	const closeModal = () => setIsLevelUpModalOpen(false);

	const closeModalLevelUp = () => {
		setIsLevelUpModalOpen(false);
		setIsUpgrade(false);
	}

	useEffect(() => {
		Notification.requestPermission();
	}, []);

	useEffect(() => {
		Cookies.set('level', level.toString());
		Cookies.set('experience', experience.toString());
		Cookies.set('challengesCompleted', challengesCompleted.toString());

	}, [level, experience, challengesCompleted]);

	const startNewChallenge = () => {
		const randomChallengeIndex = Math.floor(Math.random() * challenges.length);
		const challenge = challenges[randomChallengeIndex];

		setActiveChallenge(challenge);

		new Audio('/notification.mp3').play();

		if (Notification.permission === 'granted') {
			new Notification('Novo Desafio!', {
				body: `Valendo ${challenge.amount} XP!`
			});
		}
	}

	const resetChallege = () => setActiveChallenge(null);

	const completeChallenge = () => {
		if (!activeChallenge) return;

		const { amount } = activeChallenge;

		let finalExperience = experience + amount;

		if (finalExperience >= experienceToNextLevel) {
			finalExperience = finalExperience - experienceToNextLevel;
			setDifficulty(difficulty + 2);
			levelUp();
		}

		setExperience(finalExperience);
		setActiveChallenge(null);
		setChallengesCompleted(challengesCompleted + 1);
	}

	const hasLevelUp = isUpgrade && isLevelUpModalOpen;

	return (
		<ChallengesContext.Provider
			value={ {
				level,
				experience,
				challengesCompleted,
				activeChallenge,
				experienceToNextLevel,
				startNewChallenge,
				resetChallege,
				levelUp,
				completeChallenge,
				closeModal,
				openModal,
			} }
		>
			{ children }
			{ hasLevelUp && <LevelUpModal
					title="Parabéns!"
					description={`Você alcançou um novo level.
						consiga mais ${experienceToNextLevel}
						de XP para avançar novamente.`
					}
					level={level}
					close={closeModalLevelUp}
				/>
			}
		</ChallengesContext.Provider>
	);
}
