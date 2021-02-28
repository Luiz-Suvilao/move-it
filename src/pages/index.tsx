import React, { useContext, useState } from 'react';

import Router from 'next/router'

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContext';

import styles from '../styles/index.module.css';
import Modal from '../components/Modal';

const Login = () => {
	const { closeModal } = useContext(ChallengesContext);

	const [userName, setUserName] = useState('');
	const [hasError, setHaserro] = useState(false);

	const goToHome = () => {
		if (userName === '') {
			setHaserro(true);
			return
		}

		Router.push('/home');
	}

	return (
		<ChallengesProvider >
			<div className={ styles.container }>
				<div className={ styles.logoContainer }>
					<img
						src="/icons/simbolo.svg"
						alt="Símbolo da move.it. Logo lateral esquerda"
					/>
				</div>

				<div className={ styles.loginContainer }>
					<img
						src="/icons/logo.svg"
						alt="Símbolo da move.it. Logo lateral direita"
					/>

					<h1>Bem-vindo</h1>

					<div className={ styles.info }>
						<img
							src="/icons/github.svg"
							alt="Ícone do Github. Simbolizando um login com o mesmo"
						/>

						<p>
							Faça login com o seu Github para começar
						</p>
					</div>

					<div className={ styles.wrapperInput }>
						<input
							onChange={e => setUserName(e.target.value)}
							value={ userName }
							type='text'
							placeholder='Username'
						/>

						<button
							onClick={ goToHome }
							type='button'
						>
							<img
								src="icons/vector.svg"
								alt="Ícone de umsa seta para direita. Simbolizando o avançar"
							/>
						</button>
					</div>

				</div>

				{hasError && <Modal
					close={ closeModal }
					title='Error!'
					description='O campo nome não pode ser vazio'
				/>}
			</div>
		</ChallengesProvider>
	);
}

export default Login;
