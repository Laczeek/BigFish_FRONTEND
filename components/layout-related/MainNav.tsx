'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { FiUser, FiLogIn, FiLogOut } from 'react-icons/fi';
import { TbUserSearch } from 'react-icons/tb';

import logoImage from '@/public/images/logo.png';
import ThemeSwitch from '../theme/ThemeSwitch';
import SearchModal from '../modals/SearchModal';
import Modal from '../modals/Modal';
import { RootState } from '@/store/store';


export default function MainNav() {
	const { user } = useSelector((state: RootState) => state.auth);
	const modalRef = useRef<{ showModal: () => void; closeModal: () => void }>(
		null
	);

	return (
		<aside
			aria-label='Sidebar'
			className='sticky top-0 h-screen py-2 bg-light-bgSidenav dark:bg-dark-bgSidenav text-md sm:text-lg flex flex-col  gap-y-4 '
		>
			<Modal ref={modalRef}>
				<SearchModal/>
			</Modal>
			<nav aria-label='Main Navigation' className='w-full'>
				<ul className=' flex flex-col  gap-y-4'>
					<li>
						<Link href='/'>
							<Image
								src={logoImage}
								width={35}
								height={35}
								alt='Logo image.'
								className='rounded-lg w-full px-1'
							/>
						</Link>
					</li>
					{!user && (
						<li>
							<Link
								href='/login?action=login'
								className='block p-4 rounded-2xl hover:bg-blue-400 transition-colors duration-200'
							>
								<FiLogIn className='mx-auto' />
							</Link>
						</li>
					)}
					{user && (
						<li>
							<Link
								href='/me'
								className='block p-4 rounded-2xl hover:bg-blue-400 transition-colors duration-200'
							>
								<FiUser className='mx-auto' />
							</Link>
						</li>
					)}
				</ul>
			</nav>
			{user && (
				<button className='block p-4 rounded-2xl hover:bg-blue-400 transition-colors duration-200' onClick={modalRef.current?.showModal}>
					<TbUserSearch className='mx-auto' />
				</button>
			)}

			<div className='grow'></div>

			<ThemeSwitch />

			{user && (
				<button className='block p-4 rounded-2xl hover:bg-blue-400 transition-colors duration-200'>
					<FiLogOut className='mx-auto' />
				</button>
			)}
		</aside>
	);
}
