import { IActivityFish } from './Activity';
import ActivityItem from './ActivityItem';

interface IActivityListProps {
	fishes: IActivityFish[];
}

export default function ActivityList({ fishes }: IActivityListProps) {
	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2'>
			{fishes.map((fish) => (
				<li key={fish._id}>
					<ActivityItem fish={fish} />
				</li>
			))}
		</ul>
	);
}
