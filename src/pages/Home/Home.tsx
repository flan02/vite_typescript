
import { Table } from '@/components/Table';
import { People } from '@/data';



import React from 'react';

export interface HomeProps {

}

const Home: React.FC<HomeProps> = () => {

	const page = 6;

	return (
		<div className='home'>
			<Table TableProps={People} pageSize={page} />
		</div>

	)
}

export default Home;
