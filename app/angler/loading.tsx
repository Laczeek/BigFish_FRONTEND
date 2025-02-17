import LoadingSpinner from '@/components/loading/LoadingSpinner';
import GoBackButton from '@/components/layout-related/GoBackButton';

export default function AnglerLoading() {
	return (
		<div>
			<GoBackButton />

			<LoadingSpinner />
		</div>
	);
}
