'use client';

import GoBackButton from '@/components/layout-related/GoBackButton';

export default function ErrorPage({ error }: { error: Error }) {
	return (
		<div className='h-full flex items-start'>
			<GoBackButton />

			<div className='self-center text-center grow'>
				<p className='text-8xl mb-4 tracking-wider text-light-accentPrimary dark:text-dark-accentPrimary'>
					Oops!
				</p>
				<h2 className='text-2xl trackng-widest'>
					{error.message || 'Something went wrong.'}
				</h2>
			</div>
		</div>
	);
}
