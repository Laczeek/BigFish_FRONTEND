import L from 'leaflet';

const customIcon = L.icon({
	iconUrl: `https://api.geoapify.com/v1/icon/?type=awesome&color=%23000000&icon=fish&noShadow&scaleFactor=2&apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`,
	iconSize: [33, 42],
	iconAnchor: [15.5, 42],

});

export default customIcon;
