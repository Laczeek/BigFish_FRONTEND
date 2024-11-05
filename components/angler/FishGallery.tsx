import { ReactNode } from 'react';

interface IFishGalleryProps {
	children: ReactNode;
}

export default function FishGallery({ children }: IFishGalleryProps) {
	return (
	
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
				{children}
			</div>
	
	);
}
