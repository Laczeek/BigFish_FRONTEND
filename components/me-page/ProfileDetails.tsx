import { FaTrophy } from 'react-icons/fa';
import { FaFishFins } from 'react-icons/fa6';
import { TbFishHook } from 'react-icons/tb';

import { IUser } from '@/interfaces/user';
import countryCodeToFlag from '@/helpers/countryCodeToFlag';

interface IProfileDetailsProps {
	angler: IUser;
}

export default function ProfileDetails({ angler }: IProfileDetailsProps) {
	const localDate = new Date(angler.createdAt).toLocaleDateString('en-GB');

	const flag = countryCodeToFlag(angler.country.name);

	return (
		<section>
			<h2 className='hidden'>Your details</h2>
			<div className='text-center mt-6'>
				<p className='text-4xl mb-2 font-bold'>{flag}</p>
				<p className='text-light-textSecondary dark:text-dark-textSecondary'>
					Account created:{' '}
					<time dateTime={localDate}>{localDate}</time>
				</p>
				<div className='flex justify-evenly items-center my-4 text-light-textSecondary dark:text-dark-textSecondary'>
					<p>
						<FaFishFins
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of fish caught'
						/>
						{angler.fishAmount}
					</p>
					<p>
						<FaTrophy
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of competition wins'
						/>
						{angler.competitionWins}
					</p>
					<p>
						<TbFishHook
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of observations'
						/>
						{angler.hooksAmount}
					</p>
				</div>
			</div>
		</section>
	);
}
