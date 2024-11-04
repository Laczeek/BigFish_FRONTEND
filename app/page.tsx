import Image from 'next/image';

import Features from '@/components/landing-page/Features';

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

				<div className='p-10 rounded-lg relative bottom-14 md:bottom-0 md:-left-40  text-center bg-light-bgSecondary dark:bg-dark-bgSecondary   border-b-4 border-r-4 border-light-border dark:border-dark-border'>
					<h1 className='text-4xl lg:text-6xl font-bold tracking-wider'>
						Big Fish
					</h1>
					<p className='text-lg lg:text-xl my-4 text-light-textSecondary dark:text-dark-textSecondary'>
						Perfect web portal for anglers!
					</p>
					<CustomLink href='/auth?action=signup' styleType='primary'>
						Create Account
					</CustomLink>
				</div>
			</header>

			<Features />

			<div className='flex flex-col md:flex-row justify-between items-center text-center max-w-[1000px] mx-auto my-14 p-6'>
				<section>
					<h2 className='text-3xl '>Join Our Community Today!</h2>
					<p className='text-light-textSecondary dark:text-dark-textSecondary my-4'>
						Sign up now and start your fishing adventure with us!
					</p>
					<CustomLink
						href='/auth?action=signup'
						styleType='secondary'
					>
						Create Account
					</CustomLink>
				</section>

				<section>
					<h2 className='text-3xl'>
						Do you already have an account?
					</h2>
					<p className='text-light-textSecondary dark:text-dark-textSecondary my-4'>
						Log in and have fun!
					</p>
					<CustomLink href='/auth?action=login' styleType='secondary'>
						Login
					</CustomLink>
				</section>
			</div>
		</>
	);
}
