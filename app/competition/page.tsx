'use client';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Competition from '@/components/competition-page/Competition';

import GoBackButton from '@/components/layout-related/GoBackButton';
import LoadingSpinner from '@/components/loading/LoadingSpinner';
import { RootState } from '@/store/store';
import CompetitionForm from '@/components/competition-page/CompetitionForm';
import Invites from '@/components/competition-page/Invites';
import CustomButton from '@/components/layout-related/CustomButton';

export default function CompetitionPage() {
	const { credentials } = useSelector((state: RootState) => state.auth);
	const [isFormVisible, setIsFormVisible] = useState(false);

	const toggleFormVisibility = () => {
		setIsFormVisible((prevState) => !prevState);
	};

	if (!credentials.user) return <LoadingSpinner />;

	return (
		<>
			<header className='mb-2 flex items-center gap-x-4'>
				<GoBackButton />
				<h1 className='text-3xl font-bold'>Competition</h1>
			</header>

			{!credentials.user.competition && (
				<>
					<section className='mt-6 p-6 bg-light-background dark:bg-dark-background rounded-lg shadow-md'>
						<h2 className='text-xl mb-4 text-center font-bold'>
							How Competition Works?
						</h2>
						<div className='space-y-4 text-light-textSecondary dark:text-dark-textSecondary'>
							<div className='flex items-start gap-2'>
								<span className='text-primary font-bold'>
									1.
								</span>
								<p>
									The competition consists of calculating the
									average sum of fish caught within a certain
									time period.
								</p>
							</div>
							<div className='flex items-start gap-2'>
								<span className='text-primary font-bold'>
									2.
								</span>
								<p>
									All you have to do is add the fish to your
									profile.
								</p>
							</div>
							<div className='flex items-start gap-2'>
								<span className='text-primary font-bold'>
									3.
								</span>
								<p>
									The fish counts towards the score only if
									the unit of measurement agrees with the unit
									of competition.
								</p>
							</div>
							<div className='flex items-start gap-2'>
								<span className='text-primary font-bold'>
									4.
								</span>
								<p>
									Create a rivalry, invite your friends, and
									start the competition once everyone accepts
									the invitation.
								</p>
							</div>
						</div>
					</section>

					<section className='mt-8'>
						<h2 className='text-xl mb-2 text-center font-bold'>
							Invites
						</h2>
						<Invites />
					</section>

					<section className='mt-8'>
						<h2 className='hidden'>Create competition</h2>
						<CustomButton
							type='button'
							styleType='secondary'
							onClick={toggleFormVisibility}
							additionalClasses='block mx-auto'
						>
							{isFormVisible
								? 'Hide form'
								: 'Create your competition'}
						</CustomButton>

						{isFormVisible && <CompetitionForm />}
					</section>
				</>
			)}
			{credentials.user.competition && (
				<section className='mt-6'>
					<h2 className='hidden'>Competition details</h2>
					<Competition />
				</section>
			)}
		</>
	);
}
