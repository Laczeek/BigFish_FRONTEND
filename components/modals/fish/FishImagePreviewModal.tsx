import Modal from '../Modal';

interface IFishImagePreviewModalProps {
	modalProps: {
		image: string;
	};
}

export default function FishImagePreviewModal({
	modalProps,
}: IFishImagePreviewModalProps) {
	const imageURL =
		process.env.NODE_ENV === 'production'
			? modalProps.image
			: modalProps.image.replace('https', 'http');

	return (
		<Modal
			label='Fish image preview'
			header={
				<p className='text-2xl font-bold mb-6'>Preview of fish image</p>
			}
		>
			<div>
				<img
					src={imageURL}
					alt='Some alt'
					width={150}
					height={150}
					className='w-full h-[80%] object-contain rounded-lg'
				/>
			</div>
		</Modal>
	);
}
