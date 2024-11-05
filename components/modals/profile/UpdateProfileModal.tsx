'use client';

import CustomButton from '@/components/layout-related/CustomButton';
import Modal from '../Modal';

interface IUpdateProfileModalProps {
	modalProps: any;
}

export default function UpdateProfileModal({modalProps}: IUpdateProfileModalProps) {
	return (
		<Modal
			label='Update your profile data'
			header={
				<h2 className='mt-6 text-2xl font-bold mb-6 text-center'>
					Are you sure you want to update your data?
				</h2>
			}
		>
			<div>
				<CustomButton
					styleType='primary'
					additionalClasses='bg-red dark:bg-red dark:text-white block mx-auto'
					type='button'
				>
					Update my profile
				</CustomButton>
			</div>
		</Modal>
	);
}
