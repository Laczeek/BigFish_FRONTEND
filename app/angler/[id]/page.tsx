import AnglerHeading from '@/components/angler/AnglerHeading';
import AnglerDetails from '@/components/angler/AnglerDetails';
import FishGallery from '@/components/angler/FishGallery';
import GalleryItem from '@/components/angler/GalleryItem';

const fetchAnglerData = async (anglerId: string) => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_BACKEND_PREFIX}/users/${anglerId}`
	);
	const data = await response.json();
	if (!response.ok) {
		if (data.error) {
			throw new Error(data.error);
		}
		throw new Error(
			"Something went wrong when finding this angler's data."
		);
	}

	const localDate = new Date(data.user.createdAt).toLocaleDateString('en-GB');

	data.user.createdAt = localDate;

	return data.user;
};

export default async function AnglerPage({
	params,
}: {
	params: Promise<{ id: string }>;
}) {
	const { id } = await params;
	const angler = await fetchAnglerData(id);

	return (
		<>
			<AnglerHeading anglerId={angler._id} nickname={angler.nickname} />
			<AnglerDetails {...angler} />

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
