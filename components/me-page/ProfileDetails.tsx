import { FaTrophy } from "react-icons/fa";
import { FaFishFins } from "react-icons/fa6";
import { TbFishHook } from "react-icons/tb";

export default function ProfileDetails() {
	return (
		<section>
            <h2 className="hidden">Your details</h2>
			<div className='text-center mt-6'>
				<p className='text-lg mb-2 font-bold'>Poland</p>
				<p className='text-light-textSecondary dark:text-dark-textSecondary'>
					Account created:{' '}
					<time dateTime='2012-02-15'>2012-02-15</time>
				</p>
				<div className='flex justify-evenly items-center my-4 text-light-textSecondary dark:text-dark-textSecondary'>
					<p>
						<FaFishFins
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of fish caught'
						/>
						10
					</p>
					<p>
						<FaTrophy
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of competition wins'
						/>
						2
					</p>
					<p>
						<TbFishHook
							className='inline-block text-2xl text-light-accentPrimary dark:text-dark-accentPrimary mr-2'
							aria-label='Number of observations'
						/>
						362
					</p>
				</div>
			</div>
		</section>
	);
}
