import UpdateProfileForm from '@/components/me-page/UpdateProfileForm';
import ProfileDetails from '@/components/me-page/ProfileDetails';
import CompetitionTable from '@/components/competition/CompetitionTable';
import FishGallery from '@/components/angler/FishGallery';
import GalleryItem from '@/components/angler/GalleryItem';

export default function MePage() {
	return (
		<>
			<header className='mb-6'>
				<h1 className='text-3xl font-bold'>My Profile</h1>
			</header>

			<section className='mt-4 mb-10'>
				<h2 className='text-2xl font-bold  mb-4 text-center'>
					Your Competition
				</h2>
				<CompetitionTable />
			</section>

			<section
				aria-label='There you can change your profile data'
				className='py-4 px-6 max-w-[500px] mx-auto mt-4 bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-lg shadow shadow-light-border dark:shadow-dark-border'
			>
				<h2 className='hidden'>Update your profile</h2>
				<UpdateProfileForm />
			</section>

			<ProfileDetails />

			<section className='mt-8'>
				<h2 className='text-xl mb-4 text-center font-bold'>Fishes</h2>
				<FishGallery>
					<GalleryItem showRemoveButton />
					<GalleryItem showRemoveButton />
					<GalleryItem showRemoveButton />
					<GalleryItem showRemoveButton />
					<GalleryItem showRemoveButton />
					<GalleryItem showRemoveButton />
				</FishGallery>
			</section>

			<section>
				<h2>ADD GOOGLE MAP THERE</h2>
			</section>
		</>
	);
}
