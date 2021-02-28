import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from './Profile.module.css';

const Profile: React.FC = () => {
	const { level } = useContext(ChallengesContext);
	return (
		<div className={ styles.profileContainer}>
			<img src="https://github.com/Luiz-Suvilao.png" alt="Luiz Filipe" />
			<div>
				<strong> Luiz Filipe </strong>
				<p>
					<img src="icons/level.svg" alt="Imagem de nível" />
					level { level }
				</p>
			</div>
		</div>
	);
}

export default Profile;
