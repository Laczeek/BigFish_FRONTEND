'use client';

import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import UpdateProfileModal from './profile/UpdateProfileModal';
import RemoveFishModal from './fish/RemoveFishModal';
import FishDetailsModal from './fish/FishDetailsModal';
import AddFishModal from './fish/AddFishModal';
import SearchModal from './search/SearchModal';
import FishImagePreviewModal from './fish/FishImagePreviewModal';

export default function ModalsContainer() {
	const { isOpen, modalType, modalProps } = useSelector(
		(state: RootState) => state.modal
	);

	if (!isOpen) return null;

	return (
		<>
			{modalType === 'UPDATE_PROFILE' && (
				<UpdateProfileModal modalProps={modalProps} />
			)}
			{modalType === 'REMOVE_FISH' && (
				<RemoveFishModal modalProps={modalProps} />
			)}
			{modalType === 'FISH_DETAILS' && (
				<FishDetailsModal modalProps={modalProps} />
			)}
			{modalType === 'ADD_FISH' && <AddFishModal />}
			{modalType === 'SEARCH_ANGLERS' && <SearchModal />}
			{modalType === 'FISH_IMAGE_PREVIEW' && (
				<FishImagePreviewModal modalProps={modalProps} />
			)}
		</>
	);
}
