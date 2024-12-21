'use client';
import { useEffect, useState } from 'react';
import { FaMapMarkedAlt } from 'react-icons/fa';
import dynamic from 'next/dynamic';

import FishGallery from './FishGallery';
import PaginationBar from '../layout-related/PaginationBar';
import useRequest from '@/hooks/useRequest';
import { IFish } from '@/interfaces/fish';
import { IUser } from '@/interfaces/user';
import SmLoadingSpinner from '../loading/SmLoadingSpinner';
import CustomButton from '../layout-related/CustomButton';

const DynamicMap = dynamic(() => import('../map/Map'), { ssr: false });

interface IUserFishesProps {
	angler: IUser;
}

const limit = 8;

export default function UserFishes({ angler }: IUserFishesProps) {
	const [isMapVisible, setIsMapVisible] = useState(false);
	const [totalCount, setTotalCount] = useState<number>(0);
	const [fish, setFish] = useState<IFish[] | []>([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [isPageTransition, setIsPageTransition] = useState(false);

	const { sendRequest, isLoading } = useRequest();

	const skip = (currentPage - 1) * limit;

	useEffect(() => {
		const fetchUserFishes = async () => {
			try {
				const data = await sendRequest(
					`/fish/${angler._id}?sort=-whenCaught&skip=${skip}&limit=${limit}`,
					{ method: 'GET' }
				);

				setTotalCount(data.totalCount);
				setFish(data.fish);
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message);
				}
			} finally {
				setIsPageTransition(false);
			}
		};

		fetchUserFishes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, angler.fishAmount]);

	const nextPageHandler = () => {
		setIsPageTransition(true);
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const prevPageHandler = () => {
		setIsPageTransition(true);
		setCurrentPage((prevPage) => prevPage - 1);
	};

	if (angler.fishAmount === 0)
		return (
			<p className='text-center bg-warningYellow w-fit mx-auto p-2 rounded-lg text-black mb-2'>
				No fish have been caught yet.
			</p>
		);

	return (
		<>
			<div className='h-[420px] bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-lg overflow-hidden'>
				{(isLoading || isPageTransition) && (
					<div className=' w-full h-full flex justify-center items-center'>
						<SmLoadingSpinner />
					</div>
				)}
				{!isLoading && !isPageTransition && fish.length > 0 && (
					<FishGallery fishes={fish} />
				)}
			</div>

			{totalCount > limit && (
				<PaginationBar
					currentPage={currentPage}
					maxPages={Math.ceil(totalCount / limit)}
					showNext={nextPageHandler}
					showPrev={prevPageHandler}
				/>
			)}

			<CustomButton
				styleType='primary'
				type='button'
				onClick={() => setIsMapVisible((prevState) => !prevState)}
				additionalClasses='mt-6 block mx-auto'
			>
				<FaMapMarkedAlt className='text-xl ' />
			</CustomButton>

			{isMapVisible && (
				<section className='mt-2'>
					<h3 className='text-xl mb-2 text-center font-bold'>
						Fishes Locations
					</h3>
					<DynamicMap
						long={angler.country.coordinates[0]}
						lat={angler.country.coordinates[1]}
						fish={fish}
					/>
				</section>
			)}
		</>
	);
}
