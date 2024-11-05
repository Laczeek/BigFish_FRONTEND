import { ReactNode } from 'react';

interface IFishGalleryProps {
	children: ReactNode;
}

export default function FishGallery({ children }: IFishGalleryProps) {
	return (
		<section className='mt-4'>
			<h2 className='text-xl mb-4 text-center font-bold'>Fishes</h2>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6'>
				{children}
			</div>
		</section>
	);
}
