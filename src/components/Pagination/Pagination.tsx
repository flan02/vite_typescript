import './Pagination.scss';

export interface PaginationProps {
	pageSize: number
}

const Pagination: React.FC<PaginationProps> = (pageSize) => {
	const cantPage = pageSize.pageSize;
	return (
		<tfoot className='Pagination' >
			<tr>

				<td colSpan={cantPage} className='Pagination__td'>
					<span>1 - 5 of</span><span>20</span>
					<button onClick={() => console.log("prev")}>◀</button>
					<button onClick={() => console.log("next")}>▶</button>
				</td>
			</tr>
		</tfoot >)
};

export default Pagination;
