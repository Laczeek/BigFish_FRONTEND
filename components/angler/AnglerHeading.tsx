'use client';

import { useDispatch, useSelector } from 'react-redux';
import { TbFishHook, TbFishHookOff } from 'react-icons/tb';

import CustomButton from '../layout-related/CustomButton';
import GoBackButton from '../layout-related/GoBackButton';
import { AppDispatch, RootState } from '@/store/store';
import useAuthRequest from '@/hooks/useAuthRequest';
import { authActions } from '@/store/auth-slice';

interface IAnglerHeadingProps {
	nickname: string;
	anglerId: string;
}

export default function AnglerHeading({
	nickname,
	anglerId,
}: IAnglerHeadingProps) {
	const { credentials } = useSelector((state: RootState) => state.auth);
	const { sendAuthRequest, isLoading } = useAuthRequest();
	const dispatch: AppDispatch = useDispatch();

	const isHooked = credentials.user?.myHooks.find((uid) => uid === anglerId);

	const observeUserHandler = async () => {
		try {
			const data = await sendAuthRequest(`/users/observe/${anglerId}`, {
				method: 'GET',
			});

			dispatch(authActions.updateMyHooks(data.myHooks));
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.error(err.message);
			}
		}
	};

	return (
		<header className='flex justify-between gap-x-4 items-center'>
			<GoBackButton />
			<h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>
				{nickname} Profile
			</h1>
			{credentials.user?._id !== anglerId ? (
				<CustomButton
					styleType='primary'
					onClick={observeUserHandler}
					isLoading={isLoading}
				>
					{isHooked && !isLoading && (
						<TbFishHookOff className='text-lg' />
					)}
					{!isHooked && !isLoading && (
						<TbFishHook className='text-lg' />
					)}
				</CustomButton>
			) : (
				<span></span>
			)}
		</header>
	);
}
