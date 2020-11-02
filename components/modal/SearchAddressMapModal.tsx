import React, { ReactElement, useState } from 'react';
import { Modal } from 'antd';
import SearchAddressMap from '../map/SearchAddressMap';
import { AddressValues } from '../../types/common';

interface Props {
  visible: boolean;
  onOk: (addressValues: AddressValues) => void;
  onCancel: () => void;
  defaultAddress: string;
}

function SearchAddressMapModal({ visible, onCancel, onOk, defaultAddress }: Props): ReactElement {
  const [addressData, setAddressData] = useState<AddressValues>({
    address: undefined,
    roadAddress: undefined,
  });

  const handleOk = () => {
    onOk(addressData);
  };

  return (
    <Modal title="주소검색" width={800} destroyOnClose visible={visible} onCancel={onCancel} onOk={handleOk}>
      <SearchAddressMap defaultAddress={defaultAddress} onChangeAddress={setAddressData} />
    </Modal>
  );
}

export default SearchAddressMapModal;
