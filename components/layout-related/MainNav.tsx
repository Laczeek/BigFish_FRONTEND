'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { FiUser, FiLogIn, FiLogOut } from 'react-icons/fi';
import { TbUserSearch } from 'react-icons/tb';
import { GiLuckyFisherman } from 'react-icons/gi';
import { TbFishHook } from 'react-icons/tb';

import { modalActions } from '@/store/modal-slice';
import { AppDispatch } from '@/store/store';
import logoImage from '@/public/images/logo.jpeg';
import ThemeSwitch from '../theme/ThemeSwitch';
import { RootState } from '@/store/store';
import { authActions, restoreSession } from '@/store/auth-slice';

export default function MainNav() {
	const { credentials } = useSelector((state: RootState) => state.auth);
	const router = useRouter();
	const pathname = usePathname();
	const dispatch: AppDispatch = useDispatch();

	const showAddFishModal = () => {
		dispatch(
			modalActions.showModal({ modalType: 'ADD_FISH', modalProps: {} })
		);
	};

	const showSearchModal = () => {
		dispatch(
			modalActions.showModal({
				modalType: 'SEARCH_ANGLERS',
				modalProps: {},
			})
		);
	};

	const logoutUser = async () => {
		await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PREFIX}/auth/logout`, {
			credentials: 'include',
		});
		dispatch(authActions.logout());
		router.push('/auth?action=login');
	};

	useEffect(() => {
		const restoreSessionHandler = async () => {
			const result = await dispatch(restoreSession());
			if (result.meta.requestStatus === 'rejected') {
				return router.push('/auth?action=login');
			}
		};

		if (!credentials.accessToken && !['/auth', '/'].includes(pathname)) {
			restoreSessionHandler();
		}
	}, []);

	return (
		<aside
			aria-label='Sidebar Navigation'
			className='sticky top-0 h-screen py-2 bg-light-accentPrimary dark:bg-dark-bgSecondary text-white text-md sm:text-lg flex flex-col  gap-y-4 '
		>
			<nav aria-label='Main Navigation' className='w-full'>
				<ul className=' flex flex-col  gap-y-4'>
					{credentials.accessToken && (
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
					{!credentials.accessToken && pathname !== '/auth' && (
						<li>
							<Link
								href='/auth?action=login'
								className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
							>
								<FiLogIn className='mx-auto' />
							</Link>
						</li>
					)}
					{credentials.accessToken && (
						<li>
							<Link
								href='/angler/me'
								className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
							>
								<FiUser />
							</Link>
						</li>
					)}
					{credentials.accessToken && (
						<li>
							<Link
								href='/hooks'
								className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
							>
								<TbFishHook />
							</Link>
						</li>
					)}
				</ul>
			</nav>
			{credentials.accessToken && (
				<button
					className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
					onClick={showSearchModal}
					aria-label='Find other anglers'
				>
					<TbUserSearch />
				</button>
			)}

			{credentials.accessToken && (
				<button
					className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
					aria-label='Add fish'
					onClick={showAddFishModal}
				>
					<GiLuckyFisherman />
				</button>
			)}

			<div className='grow min-w-[50px]'></div>
			<ThemeSwitch />

			{credentials.accessToken && (
				<button
					className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
					aria-label='Logout'
					onClick={logoutUser}
				>
					<FiLogOut />
				</button>
			)}
		</aside>
	);
}
