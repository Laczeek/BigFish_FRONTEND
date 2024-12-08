import { IUser } from '@/interfaces/user';
import AnglerItem from './AnglerItem';

interface IAnglersListProps {
	anglers: IUser[];
}

export default function AnglersList({ anglers }: IAnglersListProps) {
	if (anglers.length === 0) {
		return <p>No anglers were found.</p>;
	}

	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
			{anglers.map((angler) => (
				<li key={angler._id}>
					<AnglerItem angler={angler} />
				</li>
			))}
		</ul>
	);
}
