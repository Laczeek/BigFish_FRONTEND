import { useEffect, useState } from 'react';

import useAuthRequest from '@/hooks/useAuthRequest';
import SmLoadingSpinner from '../loading/SmLoadingSpinner';
import InvitesList from './InvitesList';

export interface IInvite {
	_id: string;
	measurementType: 'weight' | 'length';
	name: string;
	users: { _id: string; nickname: string }[];
}

export default function Invites() {
	const [invites, setInvites] = useState<IInvite[] | []>([]);
	const { sendAuthRequest, isLoading } = useAuthRequest();

	useEffect(() => {
		const fetchInvites = async () => {
			try {
				const data = await sendAuthRequest('/competitions/invites', {
					method: 'GET',
				});

				setInvites(data.invites);
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message);
				}
			}
		};
		fetchInvites();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (isLoading)
		return (
			<div className='text-center'>
				<SmLoadingSpinner />
			</div>
		);

	if (invites.length > 0) return <InvitesList invites={invites} />;
	return (
		<p className='text-center text-light-textSecondary dark:text-dark-textSecondary'>
			You have not received any invitation yet.
		</p>
	);
}
