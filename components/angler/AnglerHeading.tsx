import { TbFishHook } from 'react-icons/tb';

import CustomButton from '../layout-related/CustomButton';

interface IAnglerHeadingProps {
	nickname: string;
	anglerId: string;
}

export default function AnglerHeading({
	nickname,
	anglerId,
}: IAnglerHeadingProps) {
	return (
		<div className='flex justify-between items-center mt-6'>
			<h1 className='text-3xl font-bold'>{nickname} Profile</h1>
			<CustomButton styleType='primary'>
				<TbFishHook className='text-lg' />
			</CustomButton>
		</div>
	);
}
