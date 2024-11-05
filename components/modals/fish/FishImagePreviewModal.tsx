import Modal from '../Modal';

interface IFishImagePreviewModalProps {
	modalProps: {
		image: string;
	};
}

export default function FishImagePreviewModal({
	modalProps,
}: IFishImagePreviewModalProps) {
	return (
		<Modal
			label='Fish image preview'
			header={
				<p className='text-2xl font-bold mb-6'>Preview of fish image</p>
			}
		>
			<div>
				<img
					src={modalProps.image}
					alt='Some alt'
					width={150}
					height={150}
					className='w-full h-[80%] object-contain rounded-lg'
				/>
			</div>
		</Modal>
	);
}
