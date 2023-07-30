import { Person } from '@/models';
import { Pagination } from '../Pagination';
import './Table.scss';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite } from '@/redux/states/favourites';
import { addPeople } from '@/redux/states';
import { People } from '@/data';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import store, { AppStore } from '@/redux/store';


export interface TableProps { }

const Table: React.FC<TableProps> = () => {
	return (
		<div className='home__table'>
			<table className='table col-span-12'>
				<tbody className=''>
					<Row></Row>
				</tbody>
				<Pagination />
			</table>
		</div>
	)
};

export interface RowProps {

}

const Row: React.FC<RowProps> = () => {

	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])

	const dispatch = useDispatch()
	const statePeople = useSelector((store: AppStore) => store.people) // Esta data viene desde Redux
	const favouritePeople = useSelector((store: AppStore) => store.favourites) // Esta data viene desde Redux

	const findPerson = (person: Person) => !!favouritePeople.find(p => p.id === person.id)
	const filterPerson = (person: Person) => favouritePeople.filter(p => p.id === person.id)

	const handleChange = (person: Person) => {
		const filteredPeople = findPerson(person)
			? (filterPerson(person))
			: [...selectedPeople, person]
		dispatch(addFavourite(filteredPeople))
		setSelectedPeople(filteredPeople)
	}

	useEffect(() => {
		dispatch(addPeople(People))
	}, [dispatch])

	useEffect(() => {
		setSelectedPeople(favouritePeople)
	}, [favouritePeople])


	return (
		statePeople.map((row, index) => (
			<tr key={index} className='table__tr'>
				<td className='table__checkbox'>
					<input
						type='checkbox'
						checked={findPerson(row)}
						onChange={() => handleChange(row)}
					/>
				</td>
				<td>{row.name}</td>
				<td>{row.category}</td>
				<td>{row.company}</td>
				<td>{row.levelOfHappiness}</td>
			</tr>

		))
	)

}

export default Table;


