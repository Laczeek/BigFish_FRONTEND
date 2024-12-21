'use client';
import { useEffect, useState } from 'react';

import { IUser } from '@/interfaces/user';
import FilterForm from './FilterForm';
import useRequest from '@/hooks/useRequest';
import PaginationBar from '../layout-related/PaginationBar';
import SmLoadingSpinner from '../loading/SmLoadingSpinner';
import AnglersList from './AnglersList';

const limit = 8;

export default function Anglers() {
	const [currentPage, setCurrentPage] = useState(1);
	const [totalCount, setTotalCount] = useState(0);
	const [anglers, setAnglers] = useState<IUser[] | []>([]);
	const [query, setQuery] = useState('');
	const [isPageTransition, setIsPageTransition] = useState(false);
	const [isInitialRender, setIsInitialRender] = useState(true);

	const { sendRequest, isLoading } = useRequest();
	const skip = (currentPage - 1) * limit;

	const showNextPage = () => {
		setIsPageTransition(true);
		setCurrentPage((prevPage) => (prevPage += 1));
	};
	const showPrevPage = () => {
		setIsPageTransition(true);
		setCurrentPage((prevPage) => (prevPage -= 1));
	};

	useEffect(() => {
		const fetchAnglersData = async () => {
			try {
				const data = await sendRequest(
					`/users?${query}&skip=${skip}&limit=${limit}`,
					{ method: 'GET' }
				);

				setIsInitialRender(false);
				setAnglers(data.users);
				setTotalCount(data.totalCount);
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message);
				}
			} finally {
				setIsPageTransition(false);
			}
		};
		fetchAnglersData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, query]);

	const changeQuery = (query: string) => {
		setCurrentPage(1);
		setQuery((prevState) => {
			if (prevState !== query) {
				setIsPageTransition(true);
			}
			return query;
		});
	};

	return (
		<>
			<FilterForm changeQuery={changeQuery} />

			<div className='mt-4 h-[510px] bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-lg overflow-hidden'>
				{(isLoading || isPageTransition) && (
					<div className='h-full flex justify-center items-center'>
						<SmLoadingSpinner />
					</div>
				)}
				{!isLoading && !isPageTransition && anglers.length > 0 && (
					<AnglersList anglers={anglers} />
				)}
				{!isLoading &&
					!isPageTransition &&
					!isInitialRender &&
					anglers.length === 0 && (
						<div className='flex justify-center items-center h-full'>
							<p className='bg-warningYellow p-2 mt-4 rounded-lg w-fit mx-auto text-black'>
								No results found.
							</p>
						</div>
					)}
			</div>
			<div className='h-[32px]'>
				{totalCount > limit && (
					<PaginationBar
						currentPage={currentPage}
						maxPages={Math.ceil(totalCount / limit)}
						showNext={showNextPage}
						showPrev={showPrevPage}
					/>
				)}
			</div>
		</>
	);
}
