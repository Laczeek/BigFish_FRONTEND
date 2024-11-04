import { FaUserEdit } from "react-icons/fa";
import { FaFishFins } from "react-icons/fa6";
import { GiSwordsEmblem } from "react-icons/gi";
import { MdPeople } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";

export default function Features() {
    return <section className='p-6 mt-2 md:mt-10 text-center rounded-lg'>
    <h2 className='text-3xl  mb-1'>
        Explore the Features
    </h2>
    <p className='text-light-textSecondary dark:text-dark-textSecondary'>
        Discover everything we offer to enhance your fishing
        experience
    </p>

    <div className='mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <div className='mt-4 flex flex-col items-center bg-light-bgSecondary dark:bg-dark-bgSecondary p-6 rounded-lg shadow-md shadow-light-border dark:shadow-dark-border transition-transform duration-300 hover:scale-105'>
            <MdPeople className=' mb-4 text-4xl ' />
            <h3 className='text-lg font-semibold'>Find Users</h3>
            <p className='text-center text-light-textSecondary dark:text-dark-textSecondary'>
                Connect with fellow anglers and expand your fishing
                network.
            </p>
        </div>
        <div className='mt-4 flex flex-col items-center bg-light-bgSecondary dark:bg-dark-bgSecondary p-6 rounded-lg shadow-md shadow-light-border dark:shadow-dark-border transition-transform duration-300 hover:scale-105'>
            <FaFishFins className=' mb-4 text-4xl ' />
            <h3 className='text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary'>
                Add Fish
            </h3>
            <p className='text-center text-light-textSecondary dark:text-dark-textSecondary'>
                Quickly log your catches and track your fishing
                history with ease.
            </p>
        </div>
        <div className='mt-4 flex flex-col items-center bg-light-bgSecondary dark:bg-dark-bgSecondary p-6 rounded-lg shadow-md shadow-light-border dark:shadow-dark-border transition-transform duration-300 hover:scale-105'>
            <FaUserEdit className=' mb-4 text-4xl ' />
            <h3 className='text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary'>
                Profile Customization
            </h3>
            <p className='text-center text-light-textSecondary dark:text-dark-textSecondary'>
                Tailor your profile to showcase your fishing style
                and preferences.
            </p>
        </div>
        <div className='mt-4 flex flex-col items-center bg-light-bgSecondary dark:bg-dark-bgSecondary p-6 rounded-lg shadow-md shadow-light-border dark:shadow-dark-border transition-transform duration-300 hover:scale-105'>
            <SlMagnifier className=' mb-4 text-4xl ' />
            <h3 className='text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary'>
                Friend Finder
            </h3>
            <p className='text-center text-light-textSecondary dark:text-dark-textSecondary'>
                Find your friends and add them to your favorites.
            </p>
        </div>
        <div className='mt-4 col-span-full flex flex-col items-center bg-light-bgSecondary dark:bg-dark-bgSecondary p-6 rounded-lg shadow-md shadow-light-border dark:shadow-dark-border transition-transform duration-300 hover:scale-[1.02]'>
            <GiSwordsEmblem className=' mb-4 text-4xl ' />
            <h3 className='text-lg font-semibold text-light-textPrimary dark:text-dark-textPrimary'>
                Competition
            </h3>
            <p className='text-center text-light-textSecondary dark:text-dark-textSecondary'>
                Invite your friends to compete.{' '}
            </p>
        </div>
    </div>
</section>
}