import Image from 'next/image';
import { MdPersonSearch } from 'react-icons/md';
import { TbSwords } from 'react-icons/tb';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';

import CustomButton from '@/components/layout-related/CustomButton';
import { ISearchUser } from './SearchModal';
import { AppDispatch } from '@/store/store';
import useAuthRequest from '@/hooks/useAuthRequest';
import { modalActions } from '@/store/modal-slice';
import { setAlertWithTimeout } from '@/store/alert-slice';
import { competitionActions } from '@/store/competition-slice';

interface SearchItemProps {
	user: ISearchUser;
}

export default function SearchItem({ user }: SearchItemProps) {
	const { sendAuthRequest, isLoading } = useAuthRequest();
	const dispatch: AppDispatch = useDispatch();
	const router = useRouter();

	const navigateToUser = () => {
		dispatch(modalActions.hideModal());
		router.push(`/angler/${user._id}`);
	};

	const inviteUserToCompetition = async () => {
		try {
			const data = await sendAuthRequest(
				`/competitions/invite/${user._id}`,
				{
					method: 'POST',
				}
			);
			dispatch(competitionActions.addInvitedUser(user))
			dispatch(
				setAlertWithTimeout({ type: 'success', message: data.msg })
			);
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message);
			}
		}
	};

	return (
		<div className='p-2 flex items-center gap-x-2 bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-lg shadow-md shadow-light-border dark:shadow-dark-border'>
			<div className='grow text-center'>
				<Image
					src={user.avatar.url}
					width={50}
					height={50}
					alt={`${user.nickname} avatar image.`}
					className='w-[50px] h-[50px] rounded-full object-cover mx-auto'
				/>
				<p className='text-lg'>{user.nickname}</p>
			</div>
			<div className='flex flex-col gap-y-2'>
				<CustomButton
					styleType='secondary'
					onClick={navigateToUser}
					type='button'
				>
					<MdPersonSearch />
				</CustomButton>
				{!user.competition && (
					<CustomButton
						styleType='secondary'
						onClick={inviteUserToCompetition}
						type='button'
						isLoading={isLoading}
					>
						{!isLoading && <TbSwords />}
					</CustomButton>
				)}
			</div>
		</div>
	);
}
