import LoadingSpinner from '@/components/loading/LoadingSpinner';
import GoBackButton from '@/components/layout-related/GoBackButton';

export default function CompetitionLoading() {
	return (
		<div>
			<GoBackButton />

			<LoadingSpinner />
		</div>
	);
}
