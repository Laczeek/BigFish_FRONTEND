import Link from 'next/link';

export default function LiveChatMessage() {
	return (
		<article className='flex gap-x-4 bg-light-bgSecondary dark:bg-dark-bgSecondary shadow shadow-light-border dark:shadow-dark-border p-2'>
			<header>
				<Link href='#' className='block min-w-[50px]'>
					<img
						src='https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg'
						alt='GOOD ALT SHOULD BE THERE'
						width={50}
						height={50}
						className='w-[50px] h-[50px] object-cover rounded-full'
					/>
				</Link>
				<span className='block text-center mt-1 font-bold'>Nick</span>
			</header>
			<p>
				Lorem ipsum dolor sit amet consectetur, adipisicing elit.
				Aliquam, suscipit! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Provident, nostrum ducimus nihil culpa ut
				ratione ipsam commodi maiores neque maxime deserunt cupiditate
				fugit dicta mollitia earum rem, vitae molestiae quasi! Culpa et
				magni inventore eaque maxime perspiciatis nihil non ipsa.
			</p>
		</article>
	);
}
