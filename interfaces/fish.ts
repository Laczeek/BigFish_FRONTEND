export interface IFish {
    _id: string;
    name: string;
    measurement: {
		type: 'weight' | 'length';
		unit: 'kg' | 'cm' | 'lb' | 'inch';
		value: number;
	};
	description: string;
	image: {
        url: string;
        public_id: string;
    };
	user: string;
	whenCaught: Date;
	location: {
		type: 'Point';
        address: string;
		countryCode: string;
		coordinates: [number, number]; // UNION TYPE
	};
}