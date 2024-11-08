import ShimmerCardList from '@/components/skeletons/ShimmerCardList';

export default function HomeLoadingSkeleton() {
	return (
		<>
			<header className='mb-2'>
				<h1 className='text-3xl font-bold'>Home</h1>
			</header>
			<p className='text-xs bg-warningYellow w-fit p-2 text-black rounded-md mb-4'>
				The result will be different every day
			</p>
			<section>
				<h2 className='text-2xl font-bold text-center tracking-wider'>
					From your country
				</h2>

				<section className='p-2'>
					<h3 className='text-xl mb-6 text-center'>
						The most hooked up anglers
					</h3>
					<ShimmerCardList length={5} />
				</section>

				<section className='p-2 mt-6 '>
					<h3 className='text-xl mb-6 text-center'>
						Interesting fish captured
					</h3>

					<ShimmerCardList length={5} />
				</section>
			</section>

			<section className='mt-20'>
				<h2 className='text-2xl font-bold text-center tracking-wider z-10'>
					From around the world
				</h2>

				<section className='p-2'>
					<h3 className='text-xl mb-6 text-center'>
						The most hooked up anglers
					</h3>
					<ShimmerCardList length={5} />
				</section>

				<section className='p-2 mt-6 '>
					<h3 className='text-xl mb-6 text-center'>
						Interesting fish captured
					</h3>

					<ShimmerCardList length={5} />
				</section>
			</section>
		</>
	);
}
