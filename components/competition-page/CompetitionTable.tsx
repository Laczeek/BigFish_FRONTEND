import { useSelector } from 'react-redux';
import { GiWeight } from 'react-icons/gi';
import { TbRulerMeasure } from 'react-icons/tb';

import CompetitionItem from './CompetitionTableItem';
import { ICompetition } from '@/interfaces/competition';
import { RootState } from '@/store/store';

interface ICompetitionTableProps {
	competition: ICompetition;
}

export default function CompetitionTable({
	competition,
}: ICompetitionTableProps) {
	const { credentials } = useSelector((state: RootState) => state.auth);

	const sortedUsers = [...competition.users].sort(
		(a, b) => (b.measurementTotal || 0) - (a.measurementTotal || 0)
	);

	return (
		<div className='mx-auto max-w-[800px] border-2 border-light-border dark:border-dark-border rounded-lg overflow-hidden'>
			<div className='p-4 mb-4 text-center bg-light-accentPrimary dark:bg-dark-accentPrimary text-white dark:text-black  flex items-center justify-evenly'>
				<p className='font-bold text-lg'>
					<time
						dateTime={new Date(
							competition.startDate!
						).toLocaleDateString('en-GB')}
					>
						{new Date(competition.startDate!).toLocaleDateString(
							'en-GB'
						)}
					</time>{' '}
					-{' '}
					<time
						dateTime={new Date(
							competition.endDate
						).toLocaleDateString('en-GB')}
					>
						{new Date(competition.endDate).toLocaleDateString(
							'en-GB'
						)}{' '}
						00:00
					</time>
				</p>
				<p>
					<span className='text-xl'>
						{competition.measurementType === 'length' ? (
							<TbRulerMeasure />
						) : (
							<GiWeight />
						)}
					</span>
				</p>
			</div>
			<table className='mb-1 w-full text-left text-sm font-medium'>
				<thead className='border-b border-black dark:border-white font-bold'>
					<tr>
						<th
							scope='col'
							className='px-6 py-4 hidden sm:block'
						></th>
						<th scope='col' className='px-6 py-4'>
							Nickname
						</th>
						<th scope='col' className='px-6 py-4 hidden sm:block'>
							Country
						</th>
						<th scope='col' className='px-6 py-4'>
							No. of fish
						</th>
						<th scope='col' className='px-6 py-4'>
							Score
						</th>
					</tr>
				</thead>
				<tbody>
					{sortedUsers.map((user) => (
						<CompetitionItem
							key={user._id}
							user={user}
							showRemoveButton={
								credentials.user!._id === competition.creator &&
								user._id !== credentials.user!._id
							}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}
