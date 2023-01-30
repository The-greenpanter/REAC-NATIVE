import React from 'react';
import {Modal, Text} from 'react-native';
const Formulario = (props) => {
  const {modalVisible} = props;
  return (
    <Modal
    animationType='slide'
    visible={modalVisible}
    >
        <Text>Desde Modal</Text>
    </Modal>
  );
};

export default Formulario;
