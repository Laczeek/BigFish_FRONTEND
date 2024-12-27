import { IconType } from 'react-icons';
import { FaPeopleRobbery } from 'react-icons/fa6';
import { FaUserEdit, FaMapMarkedAlt } from 'react-icons/fa';
import { GiLuckyFisherman } from 'react-icons/gi';
import { LuSwords } from 'react-icons/lu';

import FeatureCard from './FeatureCard';

export interface IFeature {
	id: string;
	title: string;
	text: string;
	Icon: IconType;
}

const FEATURES: IFeature[] = [
	{
		id: 'f1',
		title: 'Meet new people',
		text: 'Find new friends from around the world. Watch their profiles so you can learn about their latest catches and locations.',
		Icon: FaPeopleRobbery,
	},
	{
		id: 'f2',
		title: 'Customize your profile',
		text: 'You can update your profile with a new avatar, description and your favorite fishing method.',
		Icon: FaUserEdit,
	},
	{
		id: 'f3',
		title: 'Add the caught fish',
		text: 'Add the caught fish to your profile by entering information such as name, measurement, location of catch and a nice photo.',
		Icon: GiLuckyFisherman,
	},
	{
		id: 'f4',
		title: 'Map',
		text: 'The map allows you to see where you caught your fish or you can check where another angler caught his specimens.',
		Icon: FaMapMarkedAlt,
	},
	{
		id: 'f5',
		title: 'Competition',
		text: 'Compete with your friends by creating a rivalry or joining one. Rivalries have a time limit and are great for adding excitement to our hobby.',
		Icon: LuSwords,
	},
];

export default function FeaturesList() {
	return (
		<ul className='mt-6 grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
			{FEATURES.map((feature) => (
				<li key={feature.id}>
					<FeatureCard {...feature} />
				</li>
			))}
		</ul>
	);
}
