import React from 'react';
//import { AppStore } from '@/redux/store';
/*
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { MenuItem } from 'primereact/menuitem';
*/
import './Navbar.scss';
import { FavouriteTable } from './FavouriteTable';
//import { useSelector } from 'react-redux';

export interface NavbarProps { }

const Navbar: React.FC<NavbarProps> = () => {
	//useSelector((store: AppStore) =const stateFavourites = > store.favourites)

	return (

		<header className='header'>
			<nav className='header__nav col-span-12'>
				<h2 className='title'>@flan02 website</h2>
				<FavouriteTable />
			</nav>

		</header>

	)
}

export default Navbar;
