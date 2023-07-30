import { Table } from '@/components/Table';
import React from 'react';

export interface HomeProps { }

const Home: React.FC<HomeProps> = () => {

	return (
		<div className='home'>
			<Table />
		</div>

	)
}

export default Home;
