import Link from 'next/link';
import Image from 'next/image';
import { FiUser, FiLogIn, FiLogOut } from 'react-icons/fi';
import { TbUserSearch } from 'react-icons/tb';

import logoImage from '@/public/images/logo.png';
import ThemeSwitch from '../theme/ThemeSwitch';

export default function MainNav() {
	return (
		<aside
			aria-label='Sidebar'
			className='py-2 bg-white dark:bg-black text-black dark:text-white bg-opacity-60  text-md sm:text-lg flex flex-col  gap-y-4'
		>
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
					<li>
						<Link
							href='/auth?=login'
							className='block p-4 rounded-2xl hover:bg-blue-400 transition-colors duration-200'
						>
							<FiLogIn className='mx-auto' />
						</Link>
					</li>
					<li>
						<Link
							href='/me'
							className='block p-4 rounded-2xl hover:bg-blue-400 transition-colors duration-200'
						>
							<FiUser className='mx-auto' />
						</Link>
					</li>
				</ul>
			</nav>
			<button className='block p-4 rounded-2xl hover:bg-blue-400 transition-colors duration-200'>
				<TbUserSearch className='mx-auto' />
			</button>

			<div className='grow'></div>

			<ThemeSwitch />

			<button className='block p-4 rounded-2xl hover:bg-blue-400 transition-colors duration-200'>
				<FiLogOut className='mx-auto' />
			</button>
		</aside>
	);
}
