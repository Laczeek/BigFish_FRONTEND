import UpdateProfileForm from '@/components/me-page/UpdateProfileForm';
import ProfileDetails from '@/components/me-page/ProfileDetails';
import CompetitionTable from '@/components/competition/CompetitionTable';
import FishGallery from '@/components/angler/FishGallery';
import GalleryItem from '@/components/angler/GalleryItem';

export default function MePage() {
	return (
		<>
			<h1 className='text-3xl font-bold'>My Profile</h1>
			<CompetitionTable />
			<UpdateProfileForm />
			<ProfileDetails />
			<FishGallery>
				<GalleryItem showRemoveButton />
				<GalleryItem showRemoveButton />
				<GalleryItem showRemoveButton />
				<GalleryItem showRemoveButton />
				<GalleryItem showRemoveButton />
				<GalleryItem showRemoveButton />
			</FishGallery>
		</>
	);
}
