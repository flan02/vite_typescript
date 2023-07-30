import { SubjectManager } from "@/models";
import { useEffect, useState } from "react";
import { Subscription } from 'rxjs';
import './FavouriteTable.scss'


export interface FavouriteTableProps { }



const Dialog: React.FC<FavouriteTableProps> = () => {
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


	return (
		<div>
			<h2 className="favourite">FavouriteTable</h2>
		</div>
	);
};

export default Dialog;
