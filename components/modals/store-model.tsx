"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../modal";

const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Future Create Store Form
    </Modal>
  );
};

export default StoreModal;
