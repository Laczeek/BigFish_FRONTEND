import Image from 'next/image';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { IoLocationOutline } from 'react-icons/io5';
import { CiRuler } from 'react-icons/ci';
import { TbWeight } from 'react-icons/tb';

import Modal from '../Modal';

interface IFishDetailsModalProps {
	modalProps: {
		image: {
			url: string;
			public_id: string;
		};
		name: string;
		measurement: {
			type: 'weight' | 'length';
			unit: 'kg' | 'cm' | 'lb' | 'inch';
			value: number;
		};
		description: string;
		whenCaught: string;
		location: {
			type: 'Point';
			address: string;
			countryCode: string;
			coordinates: [number, number];
		};
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
			<div className='px-4 py-8 shadow  shadow-light-border dark:shadow-dark-border bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-lg overflow-y-auto max-h-[75vh]'>
				<Image
					src={modalProps.image.url}
					alt='Image of fish'
					width={800}
					height={500}
					className='max-h-[450px] w-full object-contain'
				/>

				<div className='text-center mt-2 '>
					<strong className='block text-2xl font-bold mb-1'>
						{modalProps.name}
					</strong>
					<p>
						{modalProps.measurement.type === 'weight' ? (
							<TbWeight className='text-light-accentPrimary dark:text-dark-accentPrimary text-xl inline-block mr-1' />
						) : (
							<CiRuler className='text-light-accentPrimary dark:text-dark-accentPrimary text-xl inline-block mr-1' />
						)}
						<span className='text-light-textSecondary dark:text-dark-textSecondary'>
							{modalProps.measurement.value.toFixed(2)}{' '}
						</span>
						<span className='text-light-textSecondary dark:text-dark-textSecondary'>
							{modalProps.measurement.unit}
						</span>
					</p>

					<p className='my-1'>
						<FaRegCalendarAlt className='text-light-accentPrimary dark:text-dark-accentPrimary  text-md inline-block mr-1' />
						<time
							className='text-light-textSecondary dark:text-dark-textSecondary'
							dateTime={new Date(
								modalProps.whenCaught
							).toLocaleDateString('en-gb')}
						>
							{new Date(modalProps.whenCaught).toLocaleDateString(
								'en-gb'
							)}
						</time>
					</p>

					<div className='flex justify-center items-center'>
						<IoLocationOutline className='text-light-accentPrimary dark:text-dark-accentPrimary text-xl inline-block mr-1' />
						<address className='not-italic text-light-textSecondary dark:text-dark-textSecondary text-wrap'>
							{modalProps.location.address}
						</address>
					</div>

					{modalProps.description && (
						<p className='my-2'>{modalProps.description}</p>
					)}
				</div>
			</div>
		</Modal>
	);
}
