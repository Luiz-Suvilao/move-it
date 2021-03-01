import React from 'react';

import Link from 'next/link'

import styles from './SideBar.module.css';

const SideBar:React.FC = () => {
	return (
		<aside className={ styles.container }>
			<div className={ styles.linkContainer }>
				<nav>
					<img
						className={ styles.img } src="/icons/sideBarLogo.svg"
						alt="Logo na sidebar. Move.it"
					/>

					<Link href='/'>
						<a className={ styles.link }>
							<img
								src="/icons/house.svg"
								alt="Imagem de uma casa com link para voltar ao home"
							/>
						</a>
					</Link>

					<Link href='/ranking'>
						<a className={ styles.link }>
							<img
								src="/icons/ranking.svg"
								alt="Imagem de uma bandeira com link para o ranking"
							/>
						</a>
					</Link>
				</nav>
			</div>
		</aside>
	);
}

export default SideBar;
