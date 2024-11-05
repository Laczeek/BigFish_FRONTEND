import AnglersList from '@/components/home-page/AnglersList';
import FishList from '@/components/home-page/FishList';

import artImage from '@/public/images/art.jpg';

export default function HomePage() {
	return (
		<>
			<header>
				<h1 className='text-3xl mb-6 font-bold'>Home</h1>
			</header>
			<p className='text-xs bg-warningYellow w-fit p-2 text-black rounded-md'>
				The result will be different every day
			</p>
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
				<div
					className='flex justify-center items-center z-0 relative h-[250px] after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:bg-black after:-z-10 after:bg-opacity-80 rounded-lg overflow-hidden bg-fixed bg-cover bg-bottom mb-4 text-white'
					style={{ backgroundImage: `url(${artImage.src})` }}
				>
					<h2 className='text-2xl font-bold text-center tracking-wider z-10'>
						From around the world
					</h2>
				</div>

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
