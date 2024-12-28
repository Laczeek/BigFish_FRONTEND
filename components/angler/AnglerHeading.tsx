'use client';

import { useDispatch, useSelector } from 'react-redux';
import { TbFishHook, TbFishHookOff } from 'react-icons/tb';
import { MdOutlineReport } from 'react-icons/md';

import CustomButton from '../layout-related/CustomButton';
import GoBackButton from '../layout-related/GoBackButton';
import { AppDispatch, RootState } from '@/store/store';
import useAuthRequest from '@/hooks/useAuthRequest';
import { authActions } from '@/store/auth-slice';
import { modalActions } from '@/store/modal-slice';

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

	const showReportModal = () => {
		dispatch(
			modalActions.showModal({
				modalType: 'REPORT_USER',
				modalProps: { nickname: nickname, userId: anglerId },
			})
		);
	};

	return (
		<header className='flex justify-between gap-x-4 items-center'>
			<GoBackButton />
			<h1 className='grow md:text-xl lg:text-2xl xl:text-3xl font-bold'>
				{nickname}
			</h1>
			{credentials.user?._id !== anglerId ? (
				<div className='flex items-center gap-x-4'>
					<CustomButton
						styleType='primary'
						onClick={observeUserHandler}
						isLoading={isLoading}
					>
						{isHooked && !isLoading && (
							<TbFishHookOff className='md:text-lg' />
						)}
						{!isHooked && !isLoading && (
							<TbFishHook className='md:text-lg' />
						)}
					</CustomButton>

					<CustomButton
						type='button'
						styleType='primary'
						additionalClasses='bg-red dark:bg-red text-white dark:text-white'
						onClick={showReportModal}
					>
						<MdOutlineReport className='md:text-lg' />
					</CustomButton>
				</div>
			) : (
				<span></span>
			)}
		</header>
	);
}
