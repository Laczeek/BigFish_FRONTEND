'use client';
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

import FishGallery from './FishGallery';
import SmLoadingSpinner from '../skeletons/SmLoadingSpinner';
import PaginationBar from '../layout-related/PaginationBar';
import useRequest from '@/hooks/useRequest';
import { IFish } from '@/interfaces/fish';
import { IUser } from '@/interfaces/user';

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
	const [fishData, setFishData] = useState<IFishData | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const { sendRequest, isLoading } = useRequest();

	const skip = (currentPage - 1) * limit;

	useEffect(() => {
		const fetchUserFishes = async () => {
			try {
				const data = await sendRequest(
					`/fish/${angler._id}?sort=-whenCaught&skip=${skip}&limit=${limit}`,
					{ method: 'GET' }
				);

				if (data.length === 0 || data.totalCount === 0) {
					setFishData(null);
					return;
				}
				setFishData(data);
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message);
				}
			}
		};

		fetchUserFishes();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, angler.fishAmount]);

	const nextPageHandler = () => {
		setCurrentPage((prevPage) => prevPage + 1);
	};

	const prevPageHandler = () => {
		setCurrentPage((prevPage) => prevPage - 1);
	};

	return (
		<>
			{!isLoading && !fishData && (
				<p className='text-center bg-warningYellow w-fit mx-auto p-2 rounded-lg text-black mb-2'>
					No fish have been caught yet.
				</p>
			)}
			{fishData && (
				<div>
					{!isLoading && (
						<div>
							<FishGallery fishes={fishData.fish} />
						</div>
					)}
					{isLoading && (
						<div className='flex justify-center items-center h-[180px]'>
							<SmLoadingSpinner />
						</div>
					)}
					{fishData.totalCount > limit && (
						<PaginationBar
							currentPage={currentPage}
							maxPages={Math.ceil(fishData.totalCount / limit)}
							showNext={nextPageHandler}
							showPrev={prevPageHandler}
						/>
					)}
				</div>
			)}
			{fishData && (
				<section className='mt-8'>
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
	);
}
