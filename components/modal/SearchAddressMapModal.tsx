import React, { ReactElement, useState } from 'react';
import { Modal } from 'antd';
import SearchAddressMap from '../map/SearchAddressMap';
import { AddressValues } from '../../types/common';

interface Props {
  visible: boolean;
  onOk: (addressValues: AddressValues) => void;
  onCancel: () => void;
}

function SearchAddressMapModal({ visible, onCancel, onOk }: Props): ReactElement {
  const [addressData, setAddressData] = useState<AddressValues>({
    address: undefined,
    roadAddress: undefined,
    latitude: undefined,
    longitude: undefined,
  });

  const handleOk = () => {
    onOk(addressData);
  };

  return (
    <Modal title="주소검색" width={800} destroyOnClose visible={visible} onCancel={onCancel} onOk={handleOk}>
      <SearchAddressMap onChangeAddress={setAddressData} />
    </Modal>
  );
}

export default SearchAddressMapModal;
