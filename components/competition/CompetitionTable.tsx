import { GiWeight } from 'react-icons/gi';
import { TbRulerMeasure } from 'react-icons/tb';

import CompetitionItem from './CompetitionItem';

export default function CompetitionTable() {
	return (
		<section className='mt-4 mb-10'>
			<h2 className='text-2xl font-bold  mb-4 text-center'>
				Your Competition
			</h2>
			<div className='mx-auto max-w-[800px] p-4 mb-4 text-center bg-light-accentPrimary dark:bg-dark-accentPrimary text-white dark:text-black rounded-lg flex items-center justify-evenly'>
				<p className='font-bold text-lg'>
					<time dateTime='2023-11-13'>2024-11-13</time> -{' '}
					<time dateTime='2024-11-13'>2024-11-13</time>
				</p>
				<div>
					<GiWeight
						className='inline text-3xl'
						aria-label='Type of measure'
					/>
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
		</section>
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
