import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';

export default function HookedAnglerItem() {
	return (
		<Link href='#'>
			<article className='flex gap-x-4 border-light-border border-2 py-2 px-8 rounded-lg hover:scale-105 transition-transform duration-200'>
				<div className='min-w-[60px]'>
					<img
						src='https://www.wikihow.com/images/thumb/9/90/What_type_of_person_are_you_quiz_pic.png/1200px-What_type_of_person_are_you_quiz_pic.png'
						alt='There should be good alt'
						width={60}
						height={60}
						className='w-[60px] h-[60px] rounded-full object-cover'
					/>
				</div>

				<div>
					<h3 className='font-bold tracking-wider'>Nicky</h3>
					<p className='text-light-textSecondary dark:text-dark-textSecondary'>
						Poland
					</p>
					<p className='text-light-textSecondary dark:text-dark-textSecondary text-nowrap'>
						<FaHeart
							className='inline-block mr-2 text-lg text-red '
							aria-label='Favorite fishing method'
						/>
						Spinning
					</p>
				</div>
			</article>
		</Link>
	);
}
