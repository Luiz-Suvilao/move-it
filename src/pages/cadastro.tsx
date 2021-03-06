import React, { useEffect, useState } from 'react';

import Head from 'next/head';
import Router from 'next/router'

import CompetitorController from '../controller/CompetitorController';

import styles from '../styles/cadastro.module.css';

const Cadastro = () => {
	const [data, setData] = useState([]);
	const [newUserName, setNewUserName] = useState('')
	const [hasError, setHasError] = useState(false);

	useEffect(() => {
		const controller = new CompetitorController();

		controller.getAllCompetitores().then(resp => setData(resp));
	}, []);

	const validNewUserName = () => {
		const userExist = data.some(user => user.name === newUserName);
		const constroller = new CompetitorController();

		if (userExist || !newUserName) {
			setHasError(true);
			return;
		}

		const valueToDatabase = {
			"name": newUserName,
			"level": 0,
			"complete_challenges": 0,
			"experience": 0
		}

		constroller.saveNewCompetitor(valueToDatabase);
		Router.push('/');
	}

	return (
		<div className={ styles.container }>
			<Head>
				<title> Cadastro | move.it </title>
			</Head>

			<div className={ styles.logoContainer }>
				<img
					src="/icons/simbolo.svg"
					alt="Símbolo da move.it. Logo lateral esquerda"
				/>
			</div>

			<div className={ styles.loginContainer }>
				<h1> Cadastre-se aqui! </h1>

				<div className={ styles.wrapperInput }>
					<input
						onChange={e => setNewUserName(e.target.value)}
						value={ newUserName }
						type='text'
						placeholder='Digite um novo usuário'
					/>

					<button
						onClick={ validNewUserName }
						type='button'
					>
						<img
							src="icons/vector.svg"
							alt="Ícone de umsa seta para direita. Simbolizando o avançar"
						/>
					</button>
				</div>

				{hasError && <p className={ styles.messageError }> O nome escolhido já está em uso. Tente outro! </p>}
			</div>
		</div>
	);
}

export default Cadastro;
