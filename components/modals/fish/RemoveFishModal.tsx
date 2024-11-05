'use client';

import CustomButton from '@/components/layout-related/CustomButton';
import Modal from '../Modal';

interface IRemoveFishModalProps {
	modalProps: {
        fishId: string;
    }
}

export default function RemoveFishModal({ modalProps }: IRemoveFishModalProps) {
    console.log(modalProps.fishId);
	return (
		<Modal
			label='Remove the chosen fish'
			header={
				<h2 className='mt-6 text-2xl font-bold mb-6 text-center'>
					Are you sure you want to remove this fish?
				</h2>
			}
		>
			<div>
				<CustomButton
					styleType='primary'
					additionalClasses='bg-red dark:bg-red dark:text-white block mx-auto'
					type='button'
				>
					Remove the fish from my profile
				</CustomButton>
			</div>
		</Modal>
	);
}
