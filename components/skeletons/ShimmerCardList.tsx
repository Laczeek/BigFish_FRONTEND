import ShimmerCard from './ShimmerCard';

interface IShimmerCardListProps {
	length: number;
}

export default function ShimmerCardList({ length }: IShimmerCardListProps) {
	const arr = Array.from({ length });

	return (
		<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4'>
			{arr.map((el, index) => (
				<ShimmerCard key={index} />
			))}
		</div>
	);
}
