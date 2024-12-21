import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { FaTrashAlt } from 'react-icons/fa';

import { ICompetitionUser } from '@/interfaces/competition';
import countryCodeToFlag from '@/helpers/countryCodeToFlag';
import CustomButton from '../layout-related/CustomButton';
import useAuthRequest from '@/hooks/useAuthRequest';
import { AppDispatch } from '@/store/store';
import { setAlertWithTimeout } from '@/store/alert-slice';
import { competitionActions } from '@/store/competition-slice';

interface ICompetitionItemProps {
	user: ICompetitionUser;
	showRemoveButton: boolean;
}

export default function CompetitionItem({
	user,
	showRemoveButton,
}: ICompetitionItemProps) {
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
		<tr className='border-b border-black dark:border-white '>
			<td className='hidden sm:table-cell pl-2'>
				<Image
					src={user.avatar.url}
					alt={`${user.nickname} avatar image.`}
					width={50}
					height={50}
					className='object-cover w-[50px] h-[50px] rounded-full my-2'
				/>
			</td>
			<td className='whitespace-nowrap px-6 py-4'>
				<Link
					href={`/angler/${user._id}`}
					className='hover:text-light-accentSecondary dark:hover:text-light-accentSecondary'
				>
					{user.nickname}
				</Link>
			</td>
			<td className='whitespace-nowrap px-6 py-4 hidden sm:table-cell'>
				{flag}
			</td>
			<td className='whitespace-nowrap px-6 py-4'>
				{user.fishQuantity || 0}
			</td>
			<td className='whitespace-nowrap px-6 py-4'>
				{user.measurementTotal || 0}
			</td>
			<td>
				{showRemoveButton && (
					<CustomButton
						type='button'
						styleType='primary'
						onClick={removeUserFromCompetition}
						isLoading={isLoading}
					>
						{!isLoading && <FaTrashAlt />}
					</CustomButton>
				)}
			</td>
		</tr>
	);
}
