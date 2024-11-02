import CompetitionTable from '@/components/home/CompetitionTable';
import AnglersList from '@/components/home/AnglersList';
import FishList from '@/components/home/FishList';

export default function HomePage() {
	return (
		<>
			<h1 className='text-2xl lg:text-4xl mb-6 font-bold'>Home</h1>

			<section className='bg-white dark:bg-dark-accent rounded-lg  py-8 px-4'>
				<h2 className='text-xl mb-4 font-bold tracking-wider'>
					Competition
				</h2>

				<CompetitionTable />
			</section>

			<section className='bg-white dark:bg-dark-accent rounded-lg  py-8 px-4 mt-6 '>
				<h2 className='text-xl mb-4 font-bold tracking-wider'>
					The most observed anglers
				</h2>
				<AnglersList />
			</section>

			<section className='bg-white dark:bg-dark-accent rounded-lg  py-8 px-4 mt-6 '>
				<h2 className='text-xl mb-4 font-bold tracking-wider'>
					Interesting fish captured
				</h2>

				<FishList />
			</section>
		</>
	);
}
