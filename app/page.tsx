import Image from 'next/image';

import backgroundImage from '@/public/images/background_image.jpg';
import artImage from '@/public/images/art_image.jpg';
import CustomLink from '@/components/layout-related/CustomLink';
import FeaturesList from '@/components/landing-page/FeaturesList';

export default function LandingPage() {
	return (
		<>
			<header className='relative rounded-lg overflow-hidden  h-[35vh] md:h-[500px] flex justify-center items-center bg-black bg-opacity-50'>
				<Image
					src={backgroundImage}
					alt='An angler on a beautiful lake illuminated by a huge moon.'
					className='absolute w-full h-full object-cover object-bottom -z-10'
					priority
					fill
				/>
				<div className='text-center p-2'>
					<h1 className='text-white text-5xl xl:text-6xl font-extrabold mb-4 tracking-wider'>
						Big Fishes
					</h1>
					<p className='max-w-[600px] text-white italic text-lg'>
						The best fishing portal in the world.
					</p>
				</div>
			</header>

			<section className='mt-8 text-center'>
				<h2 className='text-3xl  mb-1'>Explore the Features</h2>
				<p className='text-light-textSecondary dark:text-dark-textSecondary'>
					Discover everything we offer to enhance your fishing
					experience
				</p>

				<FeaturesList />
			</section>

			<div className='mt-8 h-[280px] overflow-hidden rounded-lg'>
				<Image
					src={artImage}
					alt='Two anglers having a good time.'
					height={500}
					width={1200}
					priority
					className='object-cover h-full w-full'
				/>
			</div>

			<div className='flex flex-col items-center gap-y-10  md:flex-row md:justify-between md:items-start text-center max-w-[1000px] mx-auto mt-8 mb-6 p-6'>
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
