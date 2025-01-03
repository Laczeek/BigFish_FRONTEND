'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import Image from 'next/image';
import { FiUser, FiLogIn, FiLogOut } from 'react-icons/fi';
import { LuSwords } from 'react-icons/lu';
import { TbUserSearch } from 'react-icons/tb';
import { GiLuckyFisherman } from 'react-icons/gi';

import { modalActions } from '@/store/modal-slice';
import { AppDispatch } from '@/store/store';
import logoImage from '@/public/images/logo.jpeg';
import ThemeSwitch from '../theme/ThemeSwitch';
import { RootState } from '@/store/store';
import { authActions, restoreSession } from '@/store/auth-slice';
import useRequest from '@/hooks/useRequest';

export default function MainNav() {
	const { credentials } = useSelector((state: RootState) => state.auth);
	const { sendRequest } = useRequest();
	const router = useRouter();
	const pathname = usePathname();
	const dispatch: AppDispatch = useDispatch();

	const showSearchModal = () => {
		dispatch(
			modalActions.showModal({
				modalType: 'SEARCH_ANGLERS',
				modalProps: {},
			})
		);
	};

	const showAddFishModal = () => {
		dispatch(
			modalActions.showModal({
				modalType: 'ADD_FISH',
				modalProps: {},
			})
		);
	};

	const logoutUser = async () => {
		try {
			await sendRequest('/auth/logout', {
				method: 'GET',
				credentials: 'include',
			});
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message);
			}
		}
		dispatch(authActions.logout());
		router.push('/auth?action=login');
	};

	useEffect(() => {
		if (!credentials.accessToken && !['/auth', '/'].includes(pathname)) {
			dispatch(restoreSession());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
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
					{!credentials.accessToken &&
						pathname.startsWith('/auth') && (
							<li>
								<Link href='/'>
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
					{!credentials.accessToken && pathname === '/' && (
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
								href='/competition'
								className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
							>
								<LuSwords />
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

			{credentials.accessToken && pathname === '/angler/me' && (
				<button
					className='block p-4 rounded-2xl hover:bg-light-bgSecondary hover:text-black dark:hover:bg-dark-accentPrimary transition-colors duration-200'
					aria-label='Show add fish modal'
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
