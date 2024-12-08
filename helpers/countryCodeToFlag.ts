const countryCodeToFlag = (countryCode: string) => {
	if (!countryCode || countryCode.length !== 2) {
		return '🏳️‍⚧️';
	}

	const offset = 127397;

	const flag = Array.from(countryCode)
		.map((letter) => String.fromCodePoint(letter.charCodeAt(0) + offset))
		.join('');

	return flag;
};

export default countryCodeToFlag;
