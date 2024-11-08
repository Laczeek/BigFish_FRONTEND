import LoadingSpinner from '@/components/skeletons/LoadingSpinner';
import GoBackButton from '@/components/layout-related/GoBackButton';

export default function AnglerLoading() {
	return (
		<div>
			<GoBackButton />

			<LoadingSpinner />
		</div>
	);
}
