import { useSelector } from 'react-redux';
import { CiRuler } from 'react-icons/ci';
import { TbWeight } from 'react-icons/tb';

import { ICompetition } from '@/interfaces/competition';
import CompetitionUserItem from './CompetitionUserItem';
import { RootState } from '@/store/store';


interface ICompetitionAwaitingProps {
	competition: ICompetition;
}

export default function CompetitionAwaiting({
	competition,
}: ICompetitionAwaitingProps) {
	const { credentials } = useSelector((state: RootState) => state.auth);

	return (
		<>
			<div className='max-w-[600px] mx-auto rounded-lg overflow-hidden border border-light-border dark:border-dark-border'>
				<div className=' p-4 flex items-center justify-between bg-light-accentPrimary dark:bg-dark-accentPrimary text-white dark:text-black'>
					<p className='font-bold text-lg'>{competition.name}</p>
					<p>
						Type of measurement:
						<span className='ml-1 text-xl'>
							{competition.measurementType === 'length' ? (
								<CiRuler className='inline-block' />
							) : (
								<TbWeight className='inline-block' />
							)}
						</span>
					</p>
				</div>

				<p className='text-center mt-6 text-light'>
					mm/dd/yyyy -{' '}
					<time
						dateTime={new Date(
							competition.endDate
						).toLocaleDateString('en-GB')}
					>
						{new Date(competition.endDate).toLocaleDateString(
							'en-GB'
						)}
					</time>
				</p>

				<div className='mt-1'>
					<p className='font-bold pl-2 mb-2'>Participants</p>
					<ul className='p-2 flex flex-col gap-y-2 max-h-[144px] overflow-y-auto bg-light-bgSecondary dark:bg-dark-bgSecondary'>
						{competition.users.map((user) => (
							<li key={user._id}>
								<CompetitionUserItem
									user={user}
									showRemoveButton={
										credentials.user!._id ===
											competition.creator &&
										user._id !== credentials.user!._id
									}
								/>
							</li>
						))}
					</ul>
				</div>

				<div className='mt-4'>
					<p className='font-bold pl-2 mb-2'>Invites</p>
					<ul className='p-2 flex flex-col gap-y-2 max-h-[144px] overflow-y-auto bg-light-bgSecondary dark:bg-dark-bgSecondary'>
						{competition.invites.map((user) => (
							<li key={user._id}>
								<CompetitionUserItem
									user={user}
									showRemoveButton={false}
								/>
							</li>
						))}
					</ul>
				</div>
				<p className='bg-warningYellow text-black p-2 text-center'>
					The competition has not yet begun. The creator needs to
					launch it.
				</p>
			</div>
		</>
	);
}
