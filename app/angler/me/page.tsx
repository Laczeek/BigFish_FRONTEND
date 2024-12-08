'use client';

import { useSelector } from 'react-redux';

import UpdateProfileForm from '@/components/me-page/UpdateProfileForm';
import ProfileDetails from '@/components/me-page/ProfileDetails';
import UserFishes from '@/components/angler/UserFishes';
import GoBackButton from '@/components/layout-related/GoBackButton';
import { RootState } from '@/store/store';
import LoadingSpinner from '@/components/skeletons/LoadingSpinner';

export default function MePage() {
	const { credentials } = useSelector((state: RootState) => state.auth);

	if (!credentials.user) return <LoadingSpinner />;

	return (
		<>
			<header className='mb-6 flex items-center gap-x-4'>
				<GoBackButton />
				<h1 className='text-3xl font-bold'>My Profile</h1>
			</header>

			<section className='py-4 px-6 max-w-[500px] mx-auto mt-4 bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-lg shadow shadow-light-border dark:shadow-dark-border'>
				<h2 className='hidden'>Update your profile</h2>

				<UpdateProfileForm angler={credentials.user} />
			</section>

			<ProfileDetails angler={credentials.user} />

			<section className='mt-10'>
				<h2 className='text-xl mb-2 text-center font-bold'>Fishes</h2>

				<UserFishes angler={credentials.user} />
			</section>
		</>
	);
}
