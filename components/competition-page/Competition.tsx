import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CompetitionAwaiting from './CompetitionAwaiting';
import CompetitionTable from './CompetitionTable';
import CompetitionActions from './CompetitionActions';
import useAuthRequest from '@/hooks/useAuthRequest';
import SmLoadingSpinner from '../loading/SmLoadingSpinner';
import { AppDispatch, RootState } from '@/store/store';
import { competitionActions } from '@/store/competition-slice';

export default function Competition() {
	const competition = useSelector((state: RootState) => state.competition);
	const { sendAuthRequest, isLoading } = useAuthRequest();
	const dispatch: AppDispatch = useDispatch();

	useEffect(() => {
		const fetchCompetition = async () => {
			try {
				const data = await sendAuthRequest('/competitions', {
					method: 'GET',
				});
				dispatch(competitionActions.setCompetition(data.competition));
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message);
				}
			}
		};
		fetchCompetition();
		return () => {
			dispatch(competitionActions.resetCompetition());
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!competition || isLoading)
		return (
			<div className='text-center'>
				<SmLoadingSpinner />
			</div>
		);

	return (
		<>
			{competition.status === 'awaiting' ? (
				<CompetitionAwaiting competition={competition} />
			) : (
				<CompetitionTable competition={competition} />
			)}

			<CompetitionActions competition={competition} />
		</>
	);
}
