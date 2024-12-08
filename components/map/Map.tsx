'use client';

import { MapContainer, Marker, TileLayer } from 'react-leaflet';
import { memo } from 'react';
import 'leaflet/dist/leaflet.css';
import { useDispatch } from 'react-redux';

import customIcon from './customIcon';
import { IFish } from '@/interfaces/fish';
import { AppDispatch } from '@/store/store';
import { modalActions } from '@/store/modal-slice';

interface IMapProps {
	long: number;
	lat: number;
	fish: IFish[];
}

const Map = memo(function Map({ long, lat, fish }: IMapProps) {
	const dispatch: AppDispatch = useDispatch();
	const showFishDetails = (fishDetails: IFish) => {
		dispatch(
			modalActions.showModal({
				modalType: 'FISH_DETAILS',
				modalProps: {
					...fishDetails,
				},
			})
		);
	};

	console.log('MAP RENDERED!');
	return (
		<MapContainer
			zoom={6}
			minZoom={4}
			center={[lat, long]}
			scrollWheelZoom
			className='w-full h-[400px] z-20 rounded-lg'
		>
			<TileLayer
				id='osm-bright'
				url={`https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey=${process.env.NEXT_PUBLIC_GEOAPIFY_KEY}`}
				attribution='Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a> contributors'
			/>
			{fish.map((el) => (
				<Marker
					key={el._id}
					position={[
						el.location.coordinates[1],
						el.location.coordinates[0],
					]}
					icon={customIcon}
					eventHandlers={{
						click: () => {
							showFishDetails(el);
						},
					}}
					riseOnHover
				></Marker>
			))}
		</MapContainer>
	);
});

export default Map;
