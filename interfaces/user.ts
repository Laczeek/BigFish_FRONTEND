export interface IUser {
	_id: string;
	nickname: string;
	email: string;
	description: string;
	favMethod:
		| 'not defined'
		| 'not defined'
		| 'spinning'
		| 'bottom fishing'
		| 'casting'
		| 'jigging'
		| 'popping'
		| 'trolling'
		| 'fly fishing'
		| 'ice fishing';
	avatar: {
		url: string;
		public_id: string;
	};
	country: {
		name: string;
		coordinates: [number, number];
	};
	role: 'admin' | 'moderator' | 'user';
	fishAmount: number;
	myHooks: string[];
	hooksAmount: number;
	competition?: string;
	competitionWins: number;
	createdAt: string;
}
