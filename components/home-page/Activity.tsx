'use client';

import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import SmLoadingSpinner from '../skeletons/SmLoadingSpinner';
import useAuthRequest from '@/hooks/useAuthRequest';
import { IFish } from '@/interfaces/fish';
import ActivityList from './ActivityList';

export interface IActivityFish extends Omit<IFish, 'user'> {
	user: {
		_id: string;
		nickname: string;
		avatar: {
			url: string;
		};
	};
}

export default function Activity() {
	const [fish, setFish] = useState<IActivityFish[] | []>([]);
	const { credentials } = useSelector((state: RootState) => state.auth);
	const { sendAuthRequest, isLoading } = useAuthRequest();

	useEffect(() => {
		const fetchFish = async () => {
			try {
				const data = await sendAuthRequest('/fish/observed', {
					method: 'GET',
				});
				console.log(data);
				if (data.length === 0) {
					setFish([]);
				} else {
					setFish(data.fish);
				}
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message);
				}
			}
		};
		fetchFish();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (!credentials.user || isLoading) {
		return (
			<div className='text-center my-4'>
				<SmLoadingSpinner />
			</div>
		);
	}
	if (!isLoading && fish.length === 0) {
		return (
			<p className='w-fit mx-auto bg-warningYellow text-black p-2 rounded-lg'>
				Unfortunately, none of the people you are watching showed any
				activity today.
			</p>
		);
	}

	return <ActivityList fishes={fish} />;
}
