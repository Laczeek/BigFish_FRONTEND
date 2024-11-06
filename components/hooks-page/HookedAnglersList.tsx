import HookedAnglerItem from './HookedAnglerItem';

export default function HookedAnglersList() {
	return (
		<ul className='flex flex-col gap-y-2 p-4 overflow-y-auto max-h-[calc(100vh-200px)]  mx-auto bg-light-bgSecondary dark:bg-dark-bgSecondary shadow-md shadow-light-border dark:shadow-dark-border rounded-l-lg'>
			<li>
				<HookedAnglerItem />
			</li>
			<li>
				<HookedAnglerItem />
			</li>
			<li>
				<HookedAnglerItem />
			</li>
			<li>
				<HookedAnglerItem />
			</li>
			<li>
				<HookedAnglerItem />
			</li>
			<li>
				<HookedAnglerItem />
			</li>
			<li>
				<HookedAnglerItem />
			</li>
			<li>
				<HookedAnglerItem />
			</li>
			<li>
				<HookedAnglerItem />
			</li>
			<li>
				<HookedAnglerItem />
			</li>
			<li>
				<HookedAnglerItem />
			</li>
		</ul>
	);
}
