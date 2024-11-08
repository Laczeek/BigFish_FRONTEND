export default function ShimmerCard() {
	return (
		<div className='rounded-lg shadow overflow-hidden shadow-light-border dark:shadow-dark-border'>
			<div className='h-[230px] bg-light-shimmer dark:bg-dark-shimmer animate-pulse'></div>
			<div className='bg-light-bgSecondary dark:bg-dark-bgSecondary px-5 py-2 '>
				<div className='h-5  mt-2 bg-light-shimmer dark:bg-dark-shimmer animate-pulse rounded-lg'></div>
				<div className='h-5 mt-2 bg-light-shimmer dark:bg-dark-shimmer animate-pulse rounded-lg'></div>
				<div className='h-5 mt-2 bg-light-shimmer dark:bg-dark-shimmer animate-pulse rounded-lg'></div>
				<div className='h-5 mt-2 bg-light-shimmer dark:bg-dark-shimmer animate-pulse rounded-lg'></div>
			</div>
		</div>
	);
}
