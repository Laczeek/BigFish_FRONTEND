'use client';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { FiUser, FiLogIn, FiLogOut } from 'react-icons/fi';
import { TbUserSearch } from 'react-icons/tb';
import { GiLuckyFisherman } from 'react-icons/gi';

import SearchModal from '../modals/SearchModal';
import AddFishModal from '../modals/AddFishModal';
import useModal from '@/hooks/useModal';
import logoImage from '@/public/images/logo.jpeg';
import ThemeSwitch from '../theme/ThemeSwitch';

import { RootState } from '@/store/store';

export default function MainNav() {
	const { user } = useSelector((state: RootState) => state.auth);

	const { isModalOpened, showModal, hideModal } = useModal();
	const {
		isModalOpened: isFishModalOpened,
		showModal: showFishModal,
		hideModal: hideFishModal,
	} = useModal();

	return (
		<aside
			aria-label='Sidebar'
			className='sticky top-0 h-screen py-2 bg-light-accentPrimary dark:bg-dark-bgSecondary text-white text-md sm:text-lg flex flex-col  gap-y-4 '
		>
			{isModalOpened && <SearchModal onClose={hideModal} />}
			{isFishModalOpened && <AddFishModal onClose={hideFishModal} />}

			<nav aria-label='Main Navigation' className='w-full'>
				<ul className=' flex flex-col  gap-y-4'>
					{user && (
						<li>
							<Link href='/home'>
								<Image
									src={logoImage}
									width={45}
									height={45}
									alt='Big fish logo.'
									className='rounded-full w-[40px] h-[40px] mx-auto'
								/>
							</Link>
						</li>
					)}
					{!user && (
						<li>
							<Link
								href='/auth?action=login'
								className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
							>
								<FiLogIn className='mx-auto' />
							</Link>
						</li>
					)}
					{user && (
						<li>
							<Link
								href='/angler/me'
								className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
							>
								<FiUser />
							</Link>
						</li>
					)}
				</ul>
			</nav>
			{user && (
				<button
					className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
					onClick={showModal}
					aria-label='Find other anglers'
				>
					<TbUserSearch />
				</button>
			)}

			{user && (
				<button
					className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
					aria-label='Add fish'
					onClick={showFishModal}
				>
					<GiLuckyFisherman />
				</button>
			)}

			<div className='grow'></div>

			<ThemeSwitch />

			{user && (
				<button
					className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
					aria-label='Logout'
				>
					<FiLogOut />
				</button>
			)}
		</aside>
	);
}
