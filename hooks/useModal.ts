import { useState } from "react";

export default function useModal() {
    const [isModal, setIsModal] = useState(false);

    const showModal = () => {
        setIsModal(true);
    }

    const hideModal = () => {
        setIsModal(false)
    }

    return {
        isModalOpened: isModal,
        showModal,
        hideModal
    }
}