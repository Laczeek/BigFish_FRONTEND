'use client';

import { useDispatch, useSelector } from 'react-redux';

import UpdateProfileForm from '@/components/me-page/UpdateProfileForm';
import ProfileDetails from '@/components/me-page/ProfileDetails';
import UserFishes from '@/components/angler/UserFishes';
import GoBackButton from '@/components/layout-related/GoBackButton';
import { AppDispatch, RootState } from '@/store/store';
import LoadingSpinner from '@/components/loading/LoadingSpinner';
import CustomButton from '@/components/layout-related/CustomButton';
import { modalActions } from '@/store/modal-slice';

export default function MePage() {
	const { credentials } = useSelector((state: RootState) => state.auth);
	const dispatch: AppDispatch = useDispatch();

	if (!credentials.user) return <LoadingSpinner />;

	const showDeleteAccountModal = () => {
		if (!credentials.user) return;
		dispatch(
			modalActions.showModal({
				modalType: 'DELETE_ACCOUNT',
				modalProps: { nickname: credentials.user.nickname },
			})
		);
	};

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

			<section className='mt-10'>
				<h2 className='text-xl mb-2 font-bold text-center'>
					Danger Zone
				</h2>

				<CustomButton
					type='button'
					styleType='primary'
					additionalClasses='block mx-auto text-sm bg-red dark:bg-red text-white dark:text-white'
					onClick={showDeleteAccountModal}
				>
					Delete Account
				</CustomButton>
			</section>
		</>
	);
}
