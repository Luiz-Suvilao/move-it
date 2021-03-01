import React from 'react';

import SideBar from '../SideBar';

import styles from './Layout.module.css';

const Layout:React.FC = ({
	children
}) => (
	<div className={ styles.container }>
		<SideBar />
		{ children }
	</div>
);

export default Layout
