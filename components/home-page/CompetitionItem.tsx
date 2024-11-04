import Link from 'next/link';

export default function CompetitionItem() {
	return (
		<tr className='border-b border-black dark:border-white '>
			<td className='hidden sm:table-cell'>
				<img
					src='https://cdn.create.vista.com/api/media/small/20030237/stock-photo-cheerful-young-man-over-white'
					alt='User image'
					width={50}
					height={50}
					className='object-cover w-[50px] h-[50px] rounded-full my-2'
				/>
			</td>
			<td className='whitespace-nowrap px-6 py-4'>
				<Link href={'#'}>Mark</Link>
			</td>
			<td className='whitespace-nowrap px-6 py-4 hidden sm:table-cell'>
				USA
			</td>
			<td className='whitespace-nowrap px-6 py-4'>5</td>
			<td className='whitespace-nowrap px-6 py-4'>2.3</td>
		</tr>
	);
}
