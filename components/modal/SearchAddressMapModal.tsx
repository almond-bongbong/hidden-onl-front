import React, { ReactElement } from 'react';
import { Modal } from 'antd';
import SearchAddressMap from '../map/SearchAddressMap';

interface Props {
  visible: boolean;
  onCancel: () => void;
  defaultAddress: string;
}

function SearchAddressMapModal({ visible, onCancel, defaultAddress }: Props): ReactElement {
  return (
    <Modal title="주소검색" width={800} destroyOnClose visible={visible} onCancel={onCancel}>
      <SearchAddressMap defaultAddress={defaultAddress} />
    </Modal>
  );
}

export default SearchAddressMapModal;
