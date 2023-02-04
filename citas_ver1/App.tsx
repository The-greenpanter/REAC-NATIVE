import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Pressable,
  View,
  Modal,
} from 'react-native';
import Formulario from './src/components/Formulario';
const App = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const [pacientes, setPacientes] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>
        {' '}
        Aplicativo {'        '}
        <Text style={styles.tituloBold}>Despachos Mendez </Text>
      </Text>
      <Pressable
        style={styles.btnNuevacita}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textBtn}>Nueva Domi</Text>
      </Pressable>
      <Formulario
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setPacientes = {setPacientes}
        pacientes={pacientes}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F3F4F6',
    flex: 1,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 30,
    color: '#374151',
    fontWeight: '400',
    fontFamily: 'Helvetica',
  },
  tituloBold: {
    fontWeight: '900',
    textTransform: 'uppercase',
    color: '#6D28D9',
  },
  textBtn: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '900',
    fontFamily: 'PingFangTC-Thin',
    letterSpacing: 1.5,
  },
  btnNuevacita: {
    backgroundColor: '#4D28D9',
    padding: 10,
    marginTop: 20,
    marginHorizontal: 20,
    borderRadius: 10,
  },
});

export default App;