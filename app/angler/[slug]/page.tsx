import AnglerHeading from '@/components/angler/AnglerHeading';
import AnglerDetails from '@/components/angler/AnglerDetails';

import FishGallery from '@/components/angler/FishGallery';

export default async function AnglerPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	console.log(slug);

	return (
		<>
			<AnglerHeading anglerId='123' nickname='John Smith' />
			<AnglerDetails />
			<FishGallery />

			<section className='mt-4'>
				<h2>THERE SHOULD BE A GOOGLE MAP </h2>
			</section>
		</>
	);
}
