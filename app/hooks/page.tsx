import HookedAnglersList from '@/components/hooks-page/HookedAnglersList';
import LiveChat from '@/components/hooks-page/LiveChat';
import GoBackButton from '@/components/layout-related/GoBackButton';

export default function MyHooks() {
	return (
		<>
			<header className='flex items-center gap-x-4 mb-10'>
				<GoBackButton />
				<h1 className='text-3xl font-bold'>My Hooks</h1>
			</header>

			<div className='md:flex md:gap-x-12'>
				<div className='w-full md:w-[70%] mb-6 md:mb-0'>
					<section className='mx-auto rounded-lg overflow-hidden shadow shadow-light-border dark:shadow-dark-border'>
						<LiveChat />
					</section>
				</div>
				<aside
					aria-label='Sidebar with hooked anglers'
					className='w-full min-w-[300px] md:w-[30%]'
				>
					<h2 className='text-2xl font-bold mb-2 text-center'>
						Hooked Anglers
					</h2>
					<HookedAnglersList />
				</aside>
			</div>
		</>
	);
}
