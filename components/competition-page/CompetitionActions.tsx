import { useDispatch, useSelector } from 'react-redux';

import CustomButton from '../layout-related/CustomButton';
import { AppDispatch, RootState } from '@/store/store';
import { modalActions } from '@/store/modal-slice';
import useAuthRequest from '@/hooks/useAuthRequest';
import { setAlertWithTimeout } from '@/store/alert-slice';
import { authActions } from '@/store/auth-slice';
import { ICompetition } from '@/interfaces/competition';
import { competitionActions } from '@/store/competition-slice';

interface ICompetitionActionsProps {
	competition: ICompetition;
}

export default function CompetitionActions({
	competition,
}: ICompetitionActionsProps) {
	const { credentials } = useSelector((state: RootState) => state.auth);
	const { isLoading, sendAuthRequest } = useAuthRequest();

	const dispatch: AppDispatch = useDispatch();

	const nowLocal = new Date();
	const compEndLocal = new Date(competition.endDate);
	nowLocal.setHours(0, 0, 0, 0);
	compEndLocal.setHours(0, 0, 0, 0);

	const isCompetitionDone = nowLocal.getTime() >= compEndLocal.getTime();

	const showQuitCompetitionModal = () => {
		dispatch(
			modalActions.showModal({
				modalType: 'QUIT_COMPETITION',
				modalProps: {},
			})
		);
	};

	const showDeleteCompetitionModal = () => {
		dispatch(
			modalActions.showModal({
				modalType: 'DELETE_COMPETITION',
				modalProps: {},
			})
		);
	};

	const saveCompetitionResult = async () => {
		try {
			const data = await sendAuthRequest('/competitions/save', {
				method: 'DELETE',
			});
			dispatch(
				setAlertWithTimeout({ type: 'success', message: data.msg })
			);
			dispatch(authActions.updateCompetitionWins(data.competitionWins));
			dispatch(authActions.updateCompetitionId(undefined));
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message);
			}
		}
	};

	const startCompetition = async () => {
		try {
			const updateData = await sendAuthRequest('/competitions/start', {
				method: 'PATCH',
			});

			const data = await sendAuthRequest('/competitions', {
				method: 'GET',
			});

			dispatch(competitionActions.setCompetition(data.competition));
			dispatch(
				setAlertWithTimeout({
					type: 'success',
					message: updateData.msg,
				})
			);
		} catch (err) {
			if (err instanceof Error) {
				console.error(err.message);
			}
		}
	};

	if (isCompetitionDone && competition.status === 'started')
		return (
			<div className='text-center mt-8'>
				<CustomButton
					type='button'
					styleType='primary'
					additionalClasses='bg-successGreen dark:bg-successGreen  dark:text-white'
					isLoading={isLoading}
					onClick={saveCompetitionResult}
				>
					<span className='mr-2'>Save Competition Result</span>
				</CustomButton>
			</div>
		);

	return (
		<div className='text-center mt-8'>
			{credentials.user!._id === competition.creator && (
				<div className='mt-4 flex items-center justify-center gap-x-6'>
					{competition.status === 'awaiting' && (
						<CustomButton
							styleType='primary'
							type='button'
							additionalClasses=' bg-successGreen'
							isLoading={isLoading}
							onClick={startCompetition}
						>
							<span className='mr-2'>Start Competition</span>
						</CustomButton>
					)}

					<CustomButton
						styleType='primary'
						type='button'
						additionalClasses='bg-red dark:bg-red dark:text-white'
						onClick={showDeleteCompetitionModal}
					>
						Delete Competition
					</CustomButton>
				</div>
			)}

			{credentials.user!._id !== competition.creator && (
				<CustomButton
					styleType='primary'
					type='button'
					additionalClasses='bg-red dark:bg-red dark:text-white'
					onClick={showQuitCompetitionModal}
				>
					Quit Competition
				</CustomButton>
			)}
		</div>
	);
}
