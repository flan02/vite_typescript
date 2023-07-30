import store from '@/redux/store';
import './Pagination.scss';

export interface PaginationProps { }

const Pagination: React.FC<PaginationProps> = () => {
	//const cantPage = pageSize.pageSize;
	return (
		<tfoot className='Pagination' >
			<tr>

				<td colSpan={store.getState().people.length} className='Pagination__td'>
					<span>1 - 5 of</span><span>20</span>
					<button onClick={() => console.log("prev")}>◀</button>
					<button onClick={() => console.log("next")}>▶</button>
				</td>
			</tr>
		</tfoot >)
};

export default Pagination;
