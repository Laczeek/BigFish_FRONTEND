import AnglerHeading from '@/components/angler/AnglerHeading';
import AnglerDetails from '@/components/angler/AnglerDetails';
import FishGallery from '@/components/angler/FishGallery';
import GalleryItem from '@/components/angler/GalleryItem';

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

			<section className='mt-8'>
				<h2 className='text-xl mb-4 text-center font-bold'>Fishes</h2>
				<FishGallery>
					<GalleryItem />
					<GalleryItem />
					<GalleryItem />
					<GalleryItem />
				</FishGallery>
			</section>

			<section className='mt-4'>
				<h2>THERE SHOULD BE A GOOGLE MAP </h2>
			</section>
		</>
	);
}
