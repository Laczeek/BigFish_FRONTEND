import Modal from '../Modal';

interface IFishDetailsModalProps {
	modalProps: {
		image: string;
		name: string;
		measurement: number;
		measurementType: string;
		description: string;
		date: string;
	};
}

export default function FishDetailsModal({
	modalProps,
}: IFishDetailsModalProps) {
	return (
		<Modal
			label='Fish details'
			header={<h2 className='text-2xl font-bold mb-6'>Fish details</h2>}
		>
			<div className='max-w-[600px] max-h-[400px] mx-auto'>
				<img
					src={modalProps.image}
					alt='Image of fish'
					width={600}
					height={400}
					className='w-full h-full rounded-lg'
				/>
			</div>
			<div className='text-center mt-4 bg-light-bgSecondary dark:bg-dark-bgSecondary p-2 rounded-lg shadow shadow-light-border dark:shadow-dark-border'>
				<p className='text-xl font-bold'>{modalProps.name}</p>
				<p>
					{modalProps.measurement}
					{modalProps.measurementType}
				</p>
				<p className='my-2 '>{modalProps.description}</p>
				<time dateTime={modalProps.date} className='block mb-2'>
					{modalProps.date}
				</time>
			</div>
		</Modal>
	);
}
