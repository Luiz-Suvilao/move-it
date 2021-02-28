import React from 'react';

import styles from './Modal.module.css';

interface ModalProps {
	title: string;
	description: string;
	level?:number
	close: () => void;
}

const Modal:React.FC<ModalProps> = ({
	description,
	title,
	level,
	close
}) => {
	return (
		<div className={ styles.overlay }>
			<div className={ styles.container }>
				<header> { level } </header>
				<strong> { title } </strong>
				<p>
					{ description }
				</p>
				<button type="button">
					<img
						onClick={ close }
						src="/icons/close.svg"
						alt="Símbolo de fechar para fechar o modal de level up"
					/>
				</button>
			</div>
		</div>
	);
}

export default Modal;
