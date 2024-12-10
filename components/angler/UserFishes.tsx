'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { FaMapMarkedAlt } from 'react-icons/fa';

import FishGallery from './FishGallery';
import PaginationBar from '../layout-related/PaginationBar';
import useRequest from '@/hooks/useRequest';
import { IFish } from '@/interfaces/fish';
import { IUser } from '@/interfaces/user';
import SmLoadingSpinner from '../skeletons/SmLoadingSpinner';
import CustomButton from '../layout-related/CustomButton';

const DynamicMap = dynamic(() => import('../map/Map'), { ssr: false });

export interface IFishData {
	totalCount: number;
	fish: IFish[];
	length: number;
}

interface IUserFishesProps {
	angler: IUser;
}

const limit = 8;

export default function UserFishes({ angler }: IUserFishesProps) {
	const [isMapVisible, setIsMapVisible] = useState(false);
	const [fishData, setFishData] = useState<IFishData | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [isPending, setIsPending] = useState(false);
	const { sendRequest, isLoading } = useRequest();

	const skip = (currentPage - 1) * limit;

	useEffect(() => {
		const fetchUserFishes = async () => {
			try {
				const data = await sendRequest(
					`/fish/${angler._id}?sort=-whenCaught&skip=${skip}&limit=${limit}`,
					{ method: 'GET' }
				);

				setFishData(data);
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message);
				}
			} finally {
				setIsPending(false);
			}
		};

		fetchUserFishes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, angler.fishAmount]);

	const nextPageHandler = () => {
		setIsPending(true);
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const prevPageHandler = () => {
		setIsPending(true);
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
			{isLoading || isPending ? (
				<div className='h-[420px] flex justify-center items-center'>
					<SmLoadingSpinner />
				</div>
			) : (
				<FishGallery fishes={fishData?.fish || []} />
			)}

			{fishData && fishData.totalCount > limit && (
				<PaginationBar
					currentPage={currentPage}
					maxPages={Math.ceil(fishData.totalCount / limit)}
					showNext={nextPageHandler}
					showPrev={prevPageHandler}
				/>
			)}
			{fishData && (
				<>
					<CustomButton
						styleType='primary'
						type='button'
						onClick={() =>
							setIsMapVisible((prevState) => !prevState)
						}
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
								fish={fishData.fish}
							/>
						</section>
					)}
				</>
			)}
		</>
	);
}
