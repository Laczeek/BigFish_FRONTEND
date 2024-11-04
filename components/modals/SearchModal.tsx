'use client';

import { ChangeEvent, useEffect, useState } from 'react';

import Modal from './Modal';
import SearchItem from './SearchItem';

const DUMMY_USERS = [
	{
		_id: 'id-1',
		nickname: 'Patryk',
		slug: 'patryk',
		imageURL:
			'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH87TKQrWcl19xly2VNs0CjBzy8eaKNM-ZpA&s',
	},
	{
		_id: 'id-2',
		nickname: 'Jolien',
		slug: 'jolien',
		imageURL:
			'https://thestory.is/pl/media/kryteria_akceptacji_user_story.jpg',
	},
];

interface ISearchModalProps {
	onClose: () => void;
}

export default function SearchModal({ onClose }: ISearchModalProps) {
	const [searchValue, setSearchValue] = useState('');
	const [users, setUsers] = useState<typeof DUMMY_USERS | []>([]);

	const onInputChangeHandler = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setSearchValue(event.target.value);
	};

	useEffect(() => {
		if (searchValue === '') return;

		const findedUsers = DUMMY_USERS.filter((user) =>
			user.nickname.toLowerCase().includes(searchValue.toLowerCase())
		);

		setUsers(findedUsers);
	}, [searchValue]);

	return (
		<Modal
			onClose={onClose}
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
			{searchValue && (
				<ul className='mx-auto max-w-[400px] mt-10'>
					{users.map((user) => (
						<li key={user._id}>
							<SearchItem {...user} />
						</li>
					))}
				</ul>
			)}
		</Modal>
	);
}
