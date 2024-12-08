import { IFish } from '@/interfaces/fish';
import GalleryItem from './GalleryItem';

interface IFishGalleryProps {
	fishes: IFish[];
}

export default function FishGallery({fishes}: IFishGalleryProps) {
	return (
		<div className='grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
			{fishes.map(fish => <GalleryItem key={fish._id} fish={fish}/>)}
		</div>
	);
}
