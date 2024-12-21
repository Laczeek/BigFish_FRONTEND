import { useState } from 'react';

import InviteItem from './InviteItem';
import { IInvite } from './Invites';

interface IInvitesListProps {
	invites: IInvite[];
}

export default function InvitesList({ invites }: IInvitesListProps) {
	const [currentIndex, setCurrentIndex] = useState<null | number>(null);

	const toggleParticipantsVisibility = (index: number) => {
		if (currentIndex === index) {
			setCurrentIndex(null);
		} else {
			setCurrentIndex(index);
		}
	};

	return (
		<ul className='p-2 max-h-[300px] max-w-[600px] mx-auto overflow-y-scroll bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-lg'>
			{invites.map((invite, index) => (
				<li
					key={invite._id}
					onClick={() => toggleParticipantsVisibility(index)}
					className='cursor-pointer'
				>
					<InviteItem
						invite={invite}
						participantsVisibility={currentIndex === index}
					/>
				</li>
			))}
		</ul>
	);
}
