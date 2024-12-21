'use client';

import { ChangeEvent, useCallback, useState } from 'react';

import Modal from '../Modal';
import SearchItem from './SearchItem';
import useRequest from '@/hooks/useRequest';
import debounce from '@/helpers/debounce';
import SmLoadingSpinner from '@/components/loading/SmLoadingSpinner';

export interface ISearchUser {
	nickname: string;
	avatar: {
		url: string;
	};
	country: {
		name: string;
	};
	_id: string;
	competition: string;
}

export default function SearchModal() {
	const [searchValue, setSearchValue] = useState('');
	const [users, setUsers] = useState<ISearchUser[] | []>([]);
	const { sendRequest, isLoading } = useRequest();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debouncedFetchUsers = useCallback(
		debounce(async (nickname: string) => {
			if (!nickname.trim()) {
				setUsers([]);
				return;
			}
			try {
				const data = await sendRequest(
					`/users/search?nickname=${nickname}`,
					{
						method: 'GET',
					}
				);

				setUsers(data.users);
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message);
				}
			}
		}, 300),
		[]
	);

	const onInputChangeHandler = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { value } = event.target;
		setSearchValue(value);
		debouncedFetchUsers(value);
	};

	return (
		<Modal
			label='Search Modal'
			header={
				<input
					type='text'
					value={searchValue}
					placeholder='Search your friend...'
					className='w-full p-5 border-2 text-xl border-light-border dark:border-dark-bgSecondary rounded-md focus:outline-none focus:ring focus:ring-light-accentSecondary	 dark:focus:ring-dark-accentSecondary'
					onChange={onInputChangeHandler}
					autoFocus
				/>
			}
		>
			{!isLoading && users.length > 0 && (
				<ul className='flex flex-col gap-y-2 mx-auto max-w-[300px] mt-6'>
					{users.map((user) => (
						<li key={user._id}>
							<SearchItem user={user} />
						</li>
					))}
				</ul>
			)}
			{isLoading && (
				<div className='mt-16 text-center'>
					<SmLoadingSpinner />
				</div>
			)}
		</Modal>
	);
}
