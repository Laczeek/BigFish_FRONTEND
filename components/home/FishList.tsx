import FishItem from './FishItem';

export default function FishList() {
	return (
		<ul className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
			<FishItem />

			<FishItem />
		</ul>
	);
}
