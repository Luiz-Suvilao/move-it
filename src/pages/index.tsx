import React, { useContext, useState } from 'react';

import Router from 'next/router'

import Cookies from 'js-cookie';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/index.module.css';
import Modal from '../components/Modal';

const Login = () => {
	const { openModal, closeModal } = useContext(ChallengesContext);

	const [userName, setUserName] = useState('');
	const [hasError, setHasError] = useState(false);

	const goToHome = () => {
		if (userName === '') {
			openModal();
			setHasError(true);
			return
		}

		Cookies.set('userName', userName, { path: '/' });
		Router.push('/home');
	}

	const close = () => {
		closeModal();
		setHasError(false);
	}

	return (
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
				close={ close }
				title='Atenção!'
				description='O campo "Username" não pode ser vazio.'
			/>}
		</div>
	);
}

export default Login;
