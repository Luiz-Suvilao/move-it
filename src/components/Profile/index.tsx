import React from 'react';

import styles from './Profile.module.css';

const Profile: React.FC = () => {
	return (
		<div className={ styles.profileContainer}>
			<img src="https://github.com/Luiz-Suvilao.png" alt="Luiz Filipe" />
			<div>
				<strong> Luiz Filipe </strong>
				<p>
					<img src="icons/level.svg" alt="Imagem de nível" />
					level 1
				</p>
			</div>
		</div>
	);
}

export default Profile;
