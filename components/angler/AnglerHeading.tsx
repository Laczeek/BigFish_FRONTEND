import CustomButton from '../layout-related/CustomButton';

interface IAnglerHeadingProps {
	nickname: string;
	anglerId: string;
}

export default function AnglerHeading({
	nickname,
	anglerId,
}: IAnglerHeadingProps) {
	return (
		<div className='flex justify-between items-center'>
			<h1 className='text-2xl lg:text-4xl font-bold'>
				{nickname} Profile
			</h1>
			<CustomButton styleType='primary'>Observe</CustomButton>
		</div>
	);
}
