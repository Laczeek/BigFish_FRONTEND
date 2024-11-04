import Image from 'next/image';

import { MdPeople } from 'react-icons/md';
import { FaFishFins } from 'react-icons/fa6';
import { FaUserEdit } from 'react-icons/fa';
import { SlMagnifier } from 'react-icons/sl';
import { GiSwordsEmblem } from 'react-icons/gi';

import artImage from '@/public/images/bigfishart.jpg';
import CustomLink from '@/components/layout-related/CustomLink';

export default function LandingPage() {
	return (
		<>
			<header className='flex flex-col md:flex-row justify-center items-center'>
				<div className='w-full h-[400px] lg:h-[600px]  md:w-2/3 lg:w-1/2'>
					<Image
						src={artImage}
						alt='An angler on a beautiful lake illuminated by a huge moon.'
						width={500}
						height={800}
						className='w-full h-full object-cover rounded-lg '
					/>
				</div>

				<div className='p-10 rounded-lg relative bottom-14 md:bottom-0 md:-left-40  text-center bg-light-background dark:bg-dark-background  bg-opacity-70 border-b-4 border-r-4 border-light-primary dark:border-dark-primary'>
					<h1 className='text-4xl lg:text-6xl font-bold tracking-wider'>
						Big Fish
					</h1>
					<p className='text-xl lg:text-2xl mt-2 mb-4'>
						Perfect web portal for anglers!
					</p>
					<CustomLink href='/login?action=signup' styleType='primary'>
						Create Account
					</CustomLink>
				</div>
			</header>

			<section className='p-6 mt-2 md:mt-10 bg-light-bgSidenav dark:bg-dark-accent text-center rounded-lg'>
				<h2 className='text-3xl dark:text-white'>
					Explore the Features
				</h2>
				<p className='text-light-textSecondary dark:text-dark-textPrimary'>
					Discover everything we offer to enhance your fishing
					experience.
				</p>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
					<div className='mt-4 flex flex-col items-center bg-white dark:bg-dark-primary p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'>
						<MdPeople className=' mb-4 text-4xl ' />
						<h3 className='text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary'>
							Find Users
						</h3>
						<p className='text-center text-light-textSecondary dark:text-dark-textSecondary'>
							Connect with fellow anglers and expand your fishing
							network.
						</p>
					</div>
					<div className='mt-4 flex flex-col items-center bg-white dark:bg-dark-primary p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'>
						<FaFishFins className=' mb-4 text-4xl ' />
						<h3 className='text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary'>
							Add Fish
						</h3>
						<p className='text-center text-light-textSecondary dark:text-dark-textSecondary'>
							Quickly log your catches and track your fishing
							history with ease.
						</p>
					</div>
					<div className='mt-4 flex flex-col items-center bg-white dark:bg-dark-primary p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'>
						<FaUserEdit className=' mb-4 text-4xl ' />
						<h3 className='text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary'>
							Profile Customization
						</h3>
						<p className='text-center text-light-textSecondary dark:text-dark-textSecondary'>
							Tailor your profile to showcase your fishing style
							and preferences.
						</p>
					</div>
					<div className='mt-4 flex flex-col items-center bg-white dark:bg-dark-primary p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105'>
						<SlMagnifier className=' mb-4 text-4xl ' />
						<h3 className='text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary'>
							Friend Finder
						</h3>
						<p className='text-center text-light-textSecondary dark:text-dark-textSecondary'>
							Find your friends and add them to your favorites.
						</p>
					</div>
					<div className='mt-4 col-span-full flex flex-col items-center bg-white dark:bg-dark-primary p-6 rounded-lg shadow-lg transition-transform duration-300 hover:scale-[1.02]'>
						<GiSwordsEmblem className=' mb-4 text-4xl ' />
						<h3 className='text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary'>
							Competition
						</h3>
						<p className='text-center text-light-textSecondary dark:text-dark-textSecondary'>
							Invite your friends to compete.{' '}
						</p>
					</div>
				</div>
			</section>

			<section className='p-6 my-10 bg-light-bgSidenav dark:bg-dark-accent text-center rounded-lg'>
				<h2 className='text-3xl text-light-textPrimary dark:text-white'>
					Join Our Community Today!
				</h2>
				<p className='text-light-textSecondary dark:text-dark-textSecondary mb-4'>
					Sign up now and start your fishing adventure with us!
				</p>
				<CustomLink href='/login?action=signup' styleType='secondary'>
					Create Account
				</CustomLink>
			</section>

			<section className='p-6 my-10 bg-light-bgSidenav dark:bg-dark-accent text-center rounded-lg'>
				<h2 className='text-3xl text-light-textPrimary dark:text-white'>
					Do you already have an account?
				</h2>
				<p className='text-light-textSecondary dark:text-dark-textSecondary mb-4'>
					Log in and have fun!
				</p>
				<CustomLink href='/login?action=login' styleType='secondary'>
					Login
				</CustomLink>
			</section>
		</>
	);
}
