import HookedAnglersList from '@/components/hooks-page/HookedAnglersList';
import LiveChat from '@/components/hooks-page/LiveChat';

export default function MyHooks() {
	return (
		<>
			<header className='mb-6'>
				<h1 className='text-3xl font-bold'>My Hooks</h1>
			</header>

			<div className='md:flex h-full md:gap-x-4'>
				<div className='md:grow mb-6 md:mb-0'>
					<section className='max-w-[600px] mx-auto rounded-lg overflow-hidden shadow shadow-light-border dark:shadow-dark-border'>
						<LiveChat />
					</section>
				</div>
				<aside aria-label='Sidebar with hooked anglers'>
					<h2 className='text-2xl font-bold mb-2 text-center'>
						Hooked Anglers
					</h2>
					<HookedAnglersList />
				</aside>
			</div>
		</>
	);
}
