export interface ICompetitionUser {
	_id: string;
	nickname: string;
	avatar: {
		url: string;
	};
	country: {
		name: string;
	};
	fishQuantity?: number;
	measurementTotal?: number;
}

export type IInvitedUser = Omit<ICompetitionUser, 'fishQuantity' | 'measurementTotal'>

export interface ICompetition {
	_id:string;
	name: string;
    creator: string;
	startDate?: string;
	endDate: string;
	measurementType: 'weight' | 'length';
	users: ICompetitionUser[];
	status: 'awaiting' | 'started';
    invites: IInvitedUser[] | [];
}
