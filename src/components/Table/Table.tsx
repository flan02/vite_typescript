

import { Person } from '@/models';
import { Pagination } from '../Pagination';
import './Table.scss';

import { useState } from 'react';

export interface TableProps {
	TableProps: Person[]
	pageSize: number

}

const Table: React.FC<TableProps> = ({ pageSize, TableProps }) => {


	return (
		<div className='home__table'>
			<table className='table col-span-12'>
				<tbody className=''>
					<Row TableProps={TableProps} ></Row>
				</tbody>
				<Pagination pageSize={pageSize} />
			</table>
		</div>
	)
};


export interface RowProps {
	TableProps: Person[]


}

const Row: React.FC<RowProps> = ({ TableProps }) => {
	const [selectedPeople, setSelectedPeople] = useState<Person[]>([])
	const findPerson = (person: Person) => !!selectedPeople.find(p => p.id === person.id)
	const filterPerson = (person: Person) => selectedPeople.filter(p => p.id === person.id)

	const handleChange = (person: Person) => {
		setSelectedPeople(findPerson(person)
			? (filterPerson(person))
			: [...selectedPeople, person])
		console.log(selectedPeople);
	}

	return (
		TableProps.map((row, index) => (
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


