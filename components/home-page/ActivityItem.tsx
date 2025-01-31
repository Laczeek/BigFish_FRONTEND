import Image from 'next/image';
import Link from 'next/link';

import { IActivityFish } from './Activity';

interface IActivityItemProps {
	fish: IActivityFish;
}

export default function ActivityItem({ fish }: IActivityItemProps) {
	const imageURL =
		process.env.NODE_ENV === 'production'
			? fish.image.url
			: fish.image.url.replace('https', 'http');
	return (
		<article className='border border-black dark:border-white rounded-lg overflow-hidden'>
			<header className='p-2 flex items-center gap-x-4 '>
				<Image
					src={imageURL}
					width={50}
					height={50}
					alt={`${fish.user.nickname} avatar image.`}
					className='w-[45px] h-[45px] rounded-full object-cover'
				/>
				<Link
					href={`/angler/${fish.user._id}`}
					className='hover:text-light-accentSecondary dark:hover:text-dark-accentSecondary'
				>
					<h3 className='font-bold'>{fish.user.nickname}</h3>
				</Link>
			</header>

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
