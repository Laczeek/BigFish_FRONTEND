'use client';
import { IUser } from '@/interfaces/user';
import AnglerItem from './AnglerItem';

interface IAnglersDataProps {
	anglers: IUser[] | [];
}

export default function AnglersList({ anglers }: IAnglersDataProps) {
	if (anglers.length === 0)
		return (
			<p className='bg-warningYellow p-2 mt-4 rounded-lg w-fit mx-auto text-black'>
				No results found.
			</p>
		);

	return (
		<ul className=' mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 bg-light-bgSecondary dark:bg-dark-bgSecondary p-4 h-[510px] overflow-y-scroll rounded-lg'>
			{anglers.map((angler) => (
				<li key={angler._id}>
					<AnglerItem angler={angler} />
				</li>
			))}
		</ul>
	);
}
