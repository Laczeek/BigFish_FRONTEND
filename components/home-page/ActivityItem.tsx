import Image from 'next/image';
import Link from 'next/link';

import { IActivityFish } from './Activity';

interface IActivityItemProps {
	fish: IActivityFish;
}

export default function ActivityItem({ fish }: IActivityItemProps) {
	return (
		<article className='border-2 border-light-border dark:border-dark-border rounded-lg overflow-hidden'>
			<Link href={`/angler/${fish.user._id}`}>
				<header className='p-2 flex items-center gap-x-4 bg-light-bgSecondary dark:bg-dark-bgSecondary'>
					<Image
						src={fish.user.avatar.url}
						width={50}
						height={50}
						alt={`${fish.user.nickname} avatar image.`}
						className='w-[50px] h-[50px] rounded-full'
					/>
					<h3 className='text-lg font-bold'>{fish.user.nickname}</h3>
				</header>
			</Link>

			<Image
				src={fish.image.url}
				width={500}
				height={500}
				alt='Fish image.'
				className='w-full h-full object-contain max-h-[500px]'
			/>
		</article>
	);
}
