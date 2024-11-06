import LiveChatForm from './LiveChatForm';
import LiveChatMessage from './LiveChatMessage';

export default function LiveChat() {
	return (
		<div>
			<h2 className='text-2xl font-bold text-center bg-light-accentPrimary dark:bg-dark-accentPrimary p-2 text-white dark:text-black '>
				Live Chat
			</h2>
			<div className='px-2 py-4'>
				<ul className='flex flex-col gap-y-2 h-[350px] overflow-y-auto'>
					<LiveChatMessage />
					<LiveChatMessage />
					<LiveChatMessage />
					<LiveChatMessage />
					<LiveChatMessage />
				</ul>
				<LiveChatForm />
			</div>
		</div>
	);
}
