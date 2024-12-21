'use client';
import { IUser } from '@/interfaces/user';
import AnglerItem from './AnglerItem';

interface IAnglersDataProps {
	anglers: IUser[] | [];
}

export default function AnglersList({ anglers }: IAnglersDataProps) {
	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4  p-4 h-full overflow-y-scroll '>
			{anglers.map((angler) => (
				<li key={angler._id}>
					<AnglerItem angler={angler} />
				</li>
			))}
		</ul>
	);
}
