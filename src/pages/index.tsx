import React, { useContext, useEffect, useState } from 'react';

import Head from 'next/head';
import Router from 'next/router'
import Link from 'next/link';

import Cookies from 'js-cookie';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/index.module.css';
import Modal from '../components/Modal';

import CompetitorController from '../controller/CompetitorController';

const Login = () => {
	const { closeModal } = useContext(ChallengesContext);

	const [userName, setUserName] = useState('');
	const [hasError, setHasError] = useState(false);
	const [data, setData] = useState([]);

	useEffect(() => {
		const controller = new CompetitorController();

		controller.getAllCompetitores().then(resp => setData(resp));
	}, []);

	const goToHome = () => {
		const userExist = data.some(user => user.name === userName);

		if (!userExist) {
			setHasError(true);
			return;
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
			<Head>
				<title> Login | move.it </title>
			</Head>

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
						placeholder='Seu usuário'
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

				<Link href='/cadastro'>
					<a className={ styles.link }>
						Cadastre-se agora!
					</a>
				</Link>
			</div>

			{hasError && <Modal
				close={ close }
				title='Atenção!'
				description='O valor inserido não existe. Verifique o campo e tente novamente!'
			/>}
		</div>
	);
}

export default Login;
