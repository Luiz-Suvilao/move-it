import React from 'react';

import Link from 'next/link'

import styles from './SideBar.module.css';

const SideBar:React.FC = () => {
	return (
		<aside className={ styles.container }>
			<nav className={ styles.linkContainer }>
				<div>
				<img className={ styles.img } src="/icons/sideBarLogo.svg" alt="Logo na sidebar. Move.it" />
				<Link href='/'>
					<a>
						<img src="/icons/house.svg" alt=""/>
					</a>
				</Link>
				</div>
			</nav>
		</aside>
	);
}

export default SideBar;
