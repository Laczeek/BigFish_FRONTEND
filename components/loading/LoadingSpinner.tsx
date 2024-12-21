import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function LoadingSpinner() {
	return (
		<div className='absolute top-[calc(50%-100px)] left-[calc(50%-50px)] animate-spin w-[150px] h-[150px]'>
			<AiOutlineLoading3Quarters className=' inline-block w-full h-full  text-light-accentSecondary dark:text-dark-accentSecondary' />
		</div>
	);
}
