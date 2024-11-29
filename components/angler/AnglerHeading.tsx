'use client';

import { useDispatch } from 'react-redux';
import { TbFishHook } from 'react-icons/tb';

import CustomButton from '../layout-related/CustomButton';
import GoBackButton from '../layout-related/GoBackButton';
import { AppDispatch } from '@/store/store';
import { observeUser } from '@/store/auth-slice';

interface IAnglerHeadingProps {
	nickname: string;
	anglerId: string;
}

export default function AnglerHeading({
	nickname,
	anglerId,
}: IAnglerHeadingProps) {
	const dispatch: AppDispatch = useDispatch();

	const observeUserHandler = () => {
		dispatch(observeUser(anglerId));
	};

	return (
		<header className='flex justify-between gap-x-4 items-center'>
			<GoBackButton />
			<h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>
				{nickname} Profile
			</h1>
			<CustomButton styleType='primary' onClick={observeUserHandler}>
				<TbFishHook className='text-lg' />
			</CustomButton>
		</header>
	);
}
