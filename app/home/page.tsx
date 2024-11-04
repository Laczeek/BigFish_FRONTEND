import AnglersList from '@/components/home-page/AnglersList';
import FishList from '@/components/home-page/FishList';

export default function HomePage() {
	return (
		<>
			<h1 className='text-3xl mb-6 font-bold'>Home</h1>
			<section>
				<h2 className='text-2xl font-bold text-center tracking-wider m-0'>
					From your country
				</h2>

				<section className='p-2'>
					<h3 className='text-xl mb-4 text-center'>
						The most hooked up anglers
					</h3>
					<AnglersList />
				</section>

				<section className='p-2 mt-2 '>
					<h3 className='text-xl mb-4 text-center'>
						Interesting fish captured
					</h3>

					<FishList />
				</section>
			</section>

			<section className='mt-20'>
				<h2 className='text-2xl font-bold text-center tracking-wider'>
					From around the world
				</h2>

				<section className='p-2'>
					<h3 className='text-xl mb-4 text-center'>
						The most hooked up anglers
					</h3>
					<AnglersList />
				</section>

				<section className='p-2 mt-2 '>
					<h3 className='text-xl mb-4 text-center'>
						Interesting fish captured
					</h3>

					<FishList />
				</section>
			</section>
		</>
	);
}
