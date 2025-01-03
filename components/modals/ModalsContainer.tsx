'use client';

import { useSelector } from 'react-redux';

import { RootState } from '@/store/store';
import RemoveFishModal from './fish/RemoveFishModal';
import FishDetailsModal from './fish/FishDetailsModal';
import AddFishModal from './fish/AddFishModal';
import SearchModal from './search/SearchModal';
import FishImagePreviewModal from './fish/FishImagePreviewModal';
import QuitCompetitionModal from './competition/QuitCompetitionModal';
import DeleteCompetitionModal from './competition/DeleteCompetitionModal';
import ReportModal from './angler/ReportModal';
import DeleteAccountModal from './angler/DeleteAccountModal';

export default function ModalsContainer() {
	const { isOpen, modalType, modalProps } = useSelector(
		(state: RootState) => state.modal
	);

	if (!isOpen) return null;

	return (
		<>
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
			{modalType === 'QUIT_COMPETITION' && <QuitCompetitionModal />}
			{modalType === 'DELETE_COMPETITION' && <DeleteCompetitionModal />}
			{modalType === 'REPORT_USER' && (
				<ReportModal modalProps={modalProps} />
			)}
			{modalType === 'DELETE_ACCOUNT' && (
				<DeleteAccountModal modalProps={modalProps} />
			)}
		</>
	);
}
