import React from 'react';
/*
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
*/
import './Navbar.scss';

export interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {


	return (

		<header className='header'>
			<nav className='header__nav col-span-12'>
				<h2 className='title'>@flan02 website</h2>
			</nav>
		</header>

	)
}

export default Navbar;