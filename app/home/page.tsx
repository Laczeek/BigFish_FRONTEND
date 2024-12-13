import Anglers from '@/components/home-page/Anglers';
import Activity from '@/components/home-page/Activity';

export default async function HomePage() {
	return (
		<>
			<header className='mb-2'>
				<h1 className='text-3xl font-bold'>Home</h1>
			</header>
			<section className='p-2'>
				<h2 className='text-xl mb-2 text-center font-bold'>
					Browse anglers
				</h2>
				<Anglers />
			</section>

			<section className='mt-4'>
				<h2 className='text-xl mb-2 text-center font-bold'>
					Today&apos;s activity
				</h2>
				<Activity />
			</section>
		</>
	);
}
