import React from 'react';

import Link from 'next/link'

import styles from './SideBar.module.css';

const SideBar:React.FC = () => (
	<aside className={ styles.container }>
		<div className={ styles.linkContainer }>
			<nav>
				<Link href='/'>
					<a className={ styles.logo }>
						<img
							src="/icons/sideBarLogo.svg"
							alt="Imagem de uma casa com link para voltar ao home"
						/>
					</a>
				</Link>

				<Link href='/home'>
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

export default SideBar;
