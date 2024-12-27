import { IFeature } from './FeaturesList';

export default function FeatureCard({ Icon, text, title }: IFeature) {
	return (
		<div className='p-2 overflow-hidden relative group  h-[200px] border border-light-border dark:border-dark-border rounded-lg cursor-pointer hover:bg-light-bgSecondary  dark:hover:bg-dark-bgSecondary'>
			<div className='h-full flex justify-center items-center flex-col aboslute top-0 -translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out delay-75'>
				<strong className='text-lg'>{title}</strong>
				<p className='mt-1 text-light-textSecondary dark:text-dark-textSecondary'>
					{text}
				</p>
			</div>

			<div className='absolute top-0 left-0 right-0 h-full flex justify-center items-center group-hover:translate-y-[120%] transition-transform duration-500 ease-in delay-75'>
				<Icon className='text-3xl' />
			</div>
		</div>
	);
}
