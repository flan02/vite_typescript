

import { Pagination } from '../Pagination';
import './Table.scss';
import { People } from '@/data';

export interface TableProps {
	TableProps: typeof People
	pageSize: number
}

const Table: React.FC<TableProps> = ({ pageSize }) => {


	return (
		<div className='home__table'>
			<table className='table col-span-12'>
				<tbody className=''>
					<Row TableProps={People} ></Row>
				</tbody>
				<Pagination pageSize={pageSize} />
			</table>
		</div>
	)
};


export interface RowProps {
	TableProps: typeof People

}

const Row: React.FC<RowProps> = ({ TableProps }) => {
	return (
		TableProps.map((row, index) => (
			<tr key={index} className='table__tr'>
				<td>{row.id}</td>
				{(index !== 0 ? <td className='col-span-2'><input type='checkbox' /></td> : <td>actions</td>)}
				<td>{row.name}</td>
				<td>{row.category}</td>
				<td>{row.company}</td>
				<td>{row.levelOfHappiness}</td>
			</tr>

		))
	)

}

export default Table;
