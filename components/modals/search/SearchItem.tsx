import { MdPersonSearch } from 'react-icons/md';
import { TbSwords } from 'react-icons/tb';
import { useDispatch } from 'react-redux';

import CustomButton from '@/components/layout-related/CustomButton';
import { ISearchUser } from './SearchModal';
import Image from 'next/image';
import { AppDispatch } from '@/store/store';
import { modalActions } from '@/store/modal-slice';
import { useRouter } from 'next/navigation';

interface SearchItemProps {
	user: ISearchUser;
}

export default function SearchItem({ user }: SearchItemProps) {
	const dispatch: AppDispatch = useDispatch();
	const router = useRouter();

	const navigateToUser = () => {
		router.push(`/angler/${user._id}`);
		dispatch(modalActions.hideModal());
	};

	return (
		<div className='p-2 flex items-center gap-x-2 bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-lg shadow-md shadow-light-border dark:shadow-dark-border'>
			<div className='grow text-center'>
				<Image
					src={user.avatar.url}
					width={50}
					height={50}
					alt={`${user.nickname} avatar image.`}
					className='rounded-full object-cover mx-auto'
				/>
				<p className='text-lg'>{user.nickname}</p>
			</div>
			<div className='flex flex-col gap-y-2'>
				<CustomButton styleType='secondary' onClick={navigateToUser}>
					<MdPersonSearch />
				</CustomButton>
				<CustomButton styleType='secondary'>
					<TbSwords />
				</CustomButton>
			</div>
		</div>
	);
}
