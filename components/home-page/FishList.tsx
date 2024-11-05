import FishItem from './FishItem';

export default function FishList() {
	return (
		<ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
			<FishItem />
			<FishItem />
			<FishItem />
			<FishItem />
			<FishItem />
			<FishItem />
			<FishItem />
			<FishItem />
			<FishItem />
			<FishItem />
		</ul>
	);
}