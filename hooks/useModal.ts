import { useCallback, useState } from 'react';

type Return = [boolean, () => void, () => void];

function useModal(initialVisible = false): Return {
  const [visible, setVisible] = useState(initialVisible);

  const openModal = useCallback(() => {
    setVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    setVisible(false);
  }, []);

  return [visible, openModal, closeModal];
}

export default useModal;
