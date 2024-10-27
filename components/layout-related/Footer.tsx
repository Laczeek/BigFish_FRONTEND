export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className=' w-full p-3 text-center bg-light-bgSidenav dark:bg-dark-bgSidenav'>
			<p>
				Big Fish &copy; <span>{currentYear}</span>
			</p>
		</footer>
	);
}
