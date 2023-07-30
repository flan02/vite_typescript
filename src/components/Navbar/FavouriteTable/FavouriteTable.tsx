//import { SubjectManager } from "@/models";
//import { useEffect, useState } from "react";
//import { Subscription } from 'rxjs';
//import { useDispatch } from 'react-redux';
import './FavouriteTable.scss'


export interface FavouriteTableProps { }

const Dialog: React.FC<FavouriteTableProps> = () => {
	/*	
		const [open, setOpen] = useState(false)
		const openSubject = new Subscription()
		const closeSubject = new Subscription()
		useEffect(() => {
			const dialogOpenSubject = new SubjectManager<boolean>();
			const dialogCloseSubject = new SubjectManager<boolean>();
			return () => {
				openSubject.unsubscribe()
				closeSubject.unsubscribe()
			}
		}, [])
	*/

	//const dispatch = useDispatch()

	/* 

	TODO : Aca se tiene que crear una table con los favoritos que elija el usuario
	TODO : Asi que hay que crear un boton qe abra y cierre este modal
	TODO : Recodar crear una fc p/ capturar los favoritos de la tabla original
	? const handleClick = (person: Person) => {
	? dispatch(removeFavourite(person))
}
	*/

	return (
		<div>
			<h2 className="favourite">FavouriteTable</h2>
		</div>
	);
};

export default Dialog;
