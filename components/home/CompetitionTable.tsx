import { IoTime } from 'react-icons/io5';
import { GiWeight } from 'react-icons/gi';
import { TbRulerMeasure } from 'react-icons/tb';

import CompetitionItem from './CompetitionItem';

export default function CompetitionTable() {
	return (
		<>
			<div className='mx-auto mb-4  text-center bg-light-secondaryAccent dark:bg-dark-primary p-4 rounded-lg flex items-center justify-evenly text-lg'>
				<div>
					<IoTime className='inline text-2xl' />
					<p>
						<time dateTime='2023-11-13'>2024-11-13</time> -{' '}
						<time dateTime='2024-11-13'>2024-11-13</time>
					</p>
				</div>
				<div>
					<GiWeight className='inline text-4xl' />
				</div>
			</div>
			<table className='w-full text-left text-sm font-medium max-w-[800px] mx-auto'>
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
					<CompetitionItem />
					<CompetitionItem />
					<CompetitionItem />
					<CompetitionItem />
				</tbody>
			</table>
		</>
	);
}

/*
	IF COMPETITION IS NOT PRESENT
<p>
					So far, you do not belong to any competition. Create one and
					invite your friends to play.
				</p>

				<CustomButton
					styleType='primary'
					additionalClasses='mt-4 mx-auto block'
				>
					Create Competition
				</CustomButton>
*/
