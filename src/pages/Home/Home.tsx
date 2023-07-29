
import { Table } from '@/components/Table';
import { People } from '@/data';

import React, { useState } from 'react';

export interface HomeProps {
	pageSize: number
}

const Home: React.FC<HomeProps> = () => {
	const [selectedPeople, setSelectedPeople] = useState([])
	const page = 6;

	return (
		<div className='home'>
			<Table TableProps={People} pageSize={page} />
		</div>

	)
}

export default Home;
