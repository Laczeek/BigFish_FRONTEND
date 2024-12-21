import Link from 'next/link';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { CiRuler } from 'react-icons/ci';
import { TbWeight } from 'react-icons/tb';
import { BsArrowRightSquareFill } from 'react-icons/bs';

import { IInvite } from './Invites';
import CustomButton from '../layout-related/CustomButton';
import useAuthRequest from '@/hooks/useAuthRequest';
import { AppDispatch } from '@/store/store';
import { authActions } from '@/store/auth-slice';
import { setAlertWithTimeout } from '@/store/alert-slice';

interface IInviteItemProps {
	invite: IInvite;
	participantsVisibility: boolean;
}

export default function InviteItem({
	invite,
	participantsVisibility,
}: IInviteItemProps) {
	const { sendAuthRequest, isLoading } = useAuthRequest();
	const dispatch: AppDispatch = useDispatch();

	const joinToCompetition = async (event: MouseEvent<HTMLButtonElement>) => {
		event.stopPropagation();
		try {
			const data = await sendAuthRequest(
				`/competitions/${invite._id}/accept`,
				{ method: 'PATCH' }
			);

			dispatch(authActions.updateCompetitionId(data.competition._id));
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
		<div className='flex items-center gap-x-2 justify-between border-b border-light-border dark:border-dark-border p-2'>
			<div className='grow'>
				<div className='flex items-center justify-between gap-x-4'>
					<strong>{invite.name}</strong>
					<p className='flex items-center'>
						Type of measurement:
						<span className='ml-1 text-xl text-light-accentPrimary dark:text-dark-accentPrimary'>
							{invite.measurementType === 'length' ? (
								<CiRuler />
							) : (
								<TbWeight />
							)}
						</span>
					</p>
				</div>
				{participantsVisibility && (
					<ul className='flex flex-col gap-y-2 mt-1 bg-light-bgPrimary dark:bg-dark-bgPrimary p-2 rounded-lg text-xs'>
						{invite.users.map((user) => (
							<li key={user._id}>
								<Link
									href={`/angler/${user._id}`}
									className='hover:text-light-accentSecondary dark:hover:text-dark-accentSecondary'
								>
									{user.nickname}{' '}
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
			<CustomButton
				type='button'
				styleType='primary'
				isLoading={isLoading}
				onClick={joinToCompetition}
			>
				{!isLoading && <BsArrowRightSquareFill />}
			</CustomButton>
		</div>
	);
}
