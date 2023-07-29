import { Person } from '@/models';
import { Pagination } from '../Pagination';
import './Table.scss';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFavourite } from '@/redux/states/favourites';
import { addPeople } from '@/redux/states';
import { People } from '@/data';
import store from '@/redux/store';
export interface TableProps {

	pageSize: number

}

const Table: React.FC<TableProps> = ({ pageSize }) => {
	return (
		<div className='home__table'>
			<table className='table col-span-12'>
				<tbody className=''>
					<Row></Row>
				</tbody>
				<Pagination pageSize={pageSize} />
			</table>
		</div>
	)
};

export interface RowProps {

}

const Row: React.FC<RowProps> = () => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
	const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id)
	const filterPerson = (person: Person) => selectedPeople.filter(p => p.id === person.id)
	const dispatch = useDispatch()

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


	return (
		store.getState().people.map((row, index) => (
			<tr key={index} className='table__tr'>
				{(index !== 0
					? <td className='table__checkbox'>
						<input
							type='checkbox'
							checked={findPerson(row)}
							onChange={() => handleChange(row)}
						/>
					</td>
					: <td>{""}</td>
				)}
				<td>{row.name}</td>
				<td>{row.category}</td>
				<td>{row.company}</td>
				<td>{row.levelOfHappiness}</td>
			</tr>

		))
	)

}

export default Table;


