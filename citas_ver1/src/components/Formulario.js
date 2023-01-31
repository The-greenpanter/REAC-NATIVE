import React, {useState} from 'react';
import {
  Modal,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
const Formulario = ({ modalVisible }) => {

  const [paciente, setpaciente] = useState('');
  const [telefonocx, settelefonocx] = useState('');
  const [address, setaddress] = useState('');
  const [email, setemail] = useState('');
  const [details, setdetails] = useState('');
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nuevo{'   '}
            <Text style={styles.tituloBold}>Domi</Text>
          </Text>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre de quien recibe</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              keyboardAppearance="dark"
              placeholder="Nombre de quien recibe"
              value={paciente}
              onChangeText={setpaciente}
            />
            <Text style={styles.label}>Telefono</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              keyboardAppearance="dark"
              placeholder="Telefono"
              value={telefonocx}
              onChangeText={settelefonocx}
            />
            <Text style={styles.label}>Direccion</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              keyboardAppearance="dark"
              placeholder="Direccion"
              value={address}
              onChangeText={setaddress}
            />
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>Datos Opcionales</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              keyboardAppearance="dark"
              placeholder="e-mail"
              value={email}
              onChangeText={setemail}
            />
            <Text style={styles.label}>Datos Opcionales</Text>
            <TextInput
              style={styles.input}
              keyboardType="email-address"
              keyboardAppearance="dark"
              placeholder="detalles"
              value={details}
              onChangeText={setdetails}
              multiline={true}
              numberOfLines={5}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6D28D9',
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 30,
    color: 'white',
    letterSpacing: 1.5,
    marginBottom: 25,
  },
  tituloBold: {
    fontWeight: '900',
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
    marginBottom: 10,
  },
  label: {
    color: 'white',
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '600',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    marginBottom: 15,
  },
});

export default Formulario;
