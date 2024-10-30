import { MdPersonSearch } from 'react-icons/md';
import { TbSwords } from 'react-icons/tb';
import CustomLink from '../layout-related/CustomLink';
import CustomButton from '../layout-related/CustomButton';

import { setAlertWithTimeout } from '@/store/alert-slice';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/store/store';

// import Image from 'next/image';
// TODO - change img to Image component in future
interface SearchItemProps {
	nickname: string;
	slug: string;
	imageURL: string;
}

export default function SearchItem({
	nickname,
	slug,
	imageURL,
}: SearchItemProps) {
	const dispatch: AppDispatch = useDispatch();

	return (
		<div className='p-2 flex items-center gap-x-6 bg-light-accent dark:bg-dark-accent rounded-lg'>
			<img
				src={imageURL}
				width={60}
				height={60}
				alt={`${nickname} avatar image.`}
				className='border-4 rounded-full border-light-primary dark:border-dark-primary w-[60px] h-[60px] object-cover'
			/>
			<p className='text-2xl grow'>{nickname}</p>
			<div className='flex flex-col gap-y-2'>
				<CustomLink href={`/user/${slug}`} styleType='secondary'>
					<MdPersonSearch />
				</CustomLink>
				<CustomButton
					styleType='secondary'
					onClick={() =>
						dispatch(
							setAlertWithTimeout({
								type: 'error',
								message: 'Wtf is going on bro! What a error sheeeeees!',
							})
						)
					}
				>
					<TbSwords />
				</CustomButton>
			</div>
		</div>
	);
}
