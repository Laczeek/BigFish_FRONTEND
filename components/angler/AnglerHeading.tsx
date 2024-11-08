'use client';

import { TbFishHook } from 'react-icons/tb';
import CustomButton from '../layout-related/CustomButton';
import GoBackButton from '../layout-related/GoBackButton';

interface IAnglerHeadingProps {
	nickname: string;
	anglerId: string;
}

export default function AnglerHeading({
	nickname,
	anglerId,
}: IAnglerHeadingProps) {
	return (
		<header className='flex justify-between gap-x-4 items-center'>
			<GoBackButton />
			<h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>
				{nickname} Profile
			</h1>
			<CustomButton styleType='primary'>
				<TbFishHook className='text-lg' />
			</CustomButton>
		</header>
	);
}
