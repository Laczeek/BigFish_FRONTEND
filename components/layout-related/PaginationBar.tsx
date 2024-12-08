import {
	MdOutlineKeyboardArrowLeft,
	MdOutlineKeyboardArrowRight,
} from 'react-icons/md';

interface IPaginationBarProps {
	currentPage: number;
	maxPages: number;
	showPrev: () => void;
	showNext: () => void;
}

export default function PaginationBar({
	currentPage,
	maxPages,
	showPrev,
	showNext,
}: IPaginationBarProps) {
	return (
		<menu
			className='mt-3 flex items-center gap-x-1 justify-center'
			aria-label='Fish pagination buttons'
		>
			<button
				type='button'
				className='min-h-[32px] min-w-8 py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-light-textPrimary hover:bg-light-border focus:outline-none focus:bg-light-border disabled:opacity-50 disabled:pointer-events-none dark:text-dark-textPrimary dark:hover:bg-dark-border dark:focus:bg-dark-border'
				aria-label='Previous'
				disabled={currentPage === 1}
				onClick={showPrev}
			>
				<MdOutlineKeyboardArrowLeft />
				<span className='sr-only'>Previous</span>
			</button>
			<div className='flex items-center gap-x-1'>
				<span className='min-h-[32px] min-w-8 flex justify-center items-center border-2 border-light-accentSecondary text-light-textPrimary py-1 px-3 text-sm rounded-full focus:outline-none focus:bg-light-border disabled:opacity-50 disabled:pointer-events-none dark:border-dark-accentSecondary dark:text-dark-textPrimary dark:bg-dark-border'>
					{currentPage}
				</span>
				<span className='min-h-[32px] flex justify-center items-center text-light-textPrimary py-1.5 px-1.5 text-sm dark:text-dark-textPrimary'>
					of
				</span>
				<span className='min-h-[32px] flex justify-center items-center text-light-textPrimary py-1.5 px-1.5 text-sm dark:text-dark-textPrimary'>
					{maxPages}
				</span>
			</div>
			<button
				type='button'
				className='min-h-[32px] min-w-8 py-2 px-2 inline-flex justify-center items-center gap-x-2 text-sm rounded-full text-light-textPrimary hover:bg-light-border focus:outline-none focus:bg-light-border disabled:opacity-50 disabled:pointer-events-none dark:text-dark-textPrimary dark:hover:bg-dark-border dark:focus:bg-dark-border'
				aria-label='Next'
				onClick={showNext}
				disabled={currentPage >= maxPages}
			>
				<span className='sr-only'>Next</span>

				<MdOutlineKeyboardArrowRight />
			</button>
		</menu>
	);
}
