'use client';
import { useEffect, useState } from 'react';

import { IUser } from '@/interfaces/user';
import FilterForm from './FilterForm';
import useRequest from '@/hooks/useRequest';
import PaginationBar from '../layout-related/PaginationBar';
import SmLoadingSpinner from '../skeletons/SmLoadingSpinner';
import AnglersList from './AnglersList';

export interface IAnglersData {
	totalCount: number;
	users: IUser[] | [];
	length: number;
}

const limit = 10;

export default function Anglers() {
	const [currentPage, setCurrentPage] = useState(1);
	const [anglersData, setAnglersData] = useState<IAnglersData | null>(null);
	const [query, setQuery] = useState('');
	const [isPending, setIsPending] = useState(true);

	const { sendRequest, isLoading } = useRequest();
	const skip = (currentPage - 1) * limit;

	const showNextPage = () => {
		setIsPending(true);
		setCurrentPage((prevPage) => (prevPage += 1));
	};
	const showPrevPage = () => {
		setIsPending(true);
		setCurrentPage((prevPage) => (prevPage -= 1));
	};

	useEffect(() => {
		const fetchAnglersData = async () => {
			try {
				const data = await sendRequest(
					`/users?${query}&skip=${skip}&limit=${limit}`,
					{ method: 'GET' }
				);

				setAnglersData(data);
			} catch (err) {
				if (err instanceof Error) {
					console.error(err.message);
				}
			} finally {
				setIsPending(false);
			}
		};
		fetchAnglersData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [currentPage, query]);

	const changeQuery = (query: string) => {
		setIsPending(true);
		setCurrentPage(1);
		setQuery((prevQuery) => {
			if (prevQuery === query) {
				setIsPending(false);
			}
			return query;
		});
	};

	return (
		<>
			<FilterForm changeQuery={changeQuery} />

			{isLoading || isPending ? (
				<div className='text-center mt-4 h-[510px] flex justify-center items-center bg-light-bgSecondary dark:bg-dark-bgSecondary rounded-lg'>
					<SmLoadingSpinner />
				</div>
			) : (
				<AnglersList anglers={anglersData?.users || []} />
			)}

			{anglersData && anglersData.totalCount > limit && (
				<PaginationBar
					currentPage={currentPage}
					maxPages={Math.ceil(anglersData.totalCount / limit)}
					showNext={showNextPage}
					showPrev={showPrevPage}
				/>
			)}
		</>
	);
}
