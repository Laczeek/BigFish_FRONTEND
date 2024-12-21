import Image from 'next/image';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';

import { IInvitedUser, ICompetitionUser } from '@/interfaces/competition';
import CustomButton from '../layout-related/CustomButton';
import countryCodeToFlag from '@/helpers/countryCodeToFlag';
import useAuthRequest from '@/hooks/useAuthRequest';
import { AppDispatch } from '@/store/store';
import { setAlertWithTimeout } from '@/store/alert-slice';
import { competitionActions } from '@/store/competition-slice';

interface ICompetitionUserItemProps {
	user: IInvitedUser | ICompetitionUser;
	showRemoveButton: boolean;
}

export default function CompetitionUserItem({
	user,
	showRemoveButton,
}: ICompetitionUserItemProps) {
	const { isLoading, sendAuthRequest } = useAuthRequest();
	const flag = countryCodeToFlag(user.country.name);
	const dispatch: AppDispatch = useDispatch();

	const removeUserFromCompetition = async () => {
		try {
			const data = await sendAuthRequest(
				`/competitions/remove/${user._id}`,
				{ method: 'DELETE' }
			);

			dispatch(competitionActions.removeUser(user._id));
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
		<div className='flex items-center justify-between'>
			<div className='flex items-center gap-x-2'>
				<Image
					src={user.avatar.url}
					width={40}
					height={40}
					alt={`${user.nickname} avatar image.`}
					className='w-[40px] h-[40px] rounded-full object-cover'
				/>
				<p>{user.nickname}</p>
				<p>{flag}</p>
			</div>
			{showRemoveButton && (
				<CustomButton
					type='button'
					styleType='primary'
					additionalClasses='mr-2'
					onClick={removeUserFromCompetition}
					isLoading={isLoading}
				>
					{!isLoading && <FaTrashAlt />}
				</CustomButton>
			)}
		</div>
	);
}
