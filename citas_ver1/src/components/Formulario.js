import React, {useState} from 'react';
import DatePicker from 'react-native-date-picker';
import {
  Modal,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  ScrollView,
  Pressable,
  Alert,
} from 'react-native';
const Formulario = ({modalVisible, setModalVisible, setPacientes}) => {
  const [paciente, setpaciente] = useState('');
  const [telefonocx, settelefonocx] = useState('');
  const [address, setaddress] = useState('');
  const [email, setemail] = useState('');
  const [details, setdetails] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const newDomi = () => {
    // Validar

    if ([paciente, telefonocx, address, email, details, date].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    const nuevoPaciente = {
      paciente,
      telefonocx,
      address,
      email,
      details,
      date,
    };
    setPacientes(nuevoPaciente);
  }
  return (
    <Modal animationType="slide" visible={modalVisible}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.header}>
            <Pressable style={styles.btnCancelar}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.txtCancelar}>Cancelar</Text>
            </Pressable>
            <Text style={styles.titulo}>
              Nuevo{'   '}
              <Text style={styles.tituloBold}>Domi</Text>
            </Text>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>Nombre de quien recibe</Text>
            <TextInput
              style={styles.input}
              keyboardType="default"
              keyboardAppearance="dark"
              placeholder="Nombre de quien recibe"
              value={paciente}
              onChangeText={setpaciente}
              theme="dark"
            />
            <Text style={styles.label}>Telefono</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              keyboardAppearance="dark"
              placeholder="Telefono"
              maxLength={10}
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
            <Text style={styles.label}>
              Especificaciones del pedido
            </Text>
            <TextInput
              style={[styles.input, styles.sintomasInput]}
              keyboardType="default"
              keyboardAppearance="dark"
              placeholder="Porteria de vidrio... "
              value={details}
              onChangeText={setdetails}
              multiline={true}
              numberOfLines={6}
            />
          </View>
          <Pressable style={[styles.btnNuevacita]}
            onPress={() => setOpen(true)}>
            <Text style={[styles.label, styles.agendar]}>Agendar</Text>

            <DatePicker
              modal
              open={open}
              date={date}
              mode="date"
              onConfirm={(date) => {
                setOpen(false)
                setDate(date) 
                newDomi()
              }
              }
              onCancel={() => {
                setOpen(false)
              }}
            />
          </Pressable>
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
  header: {
    textAlign: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  btnCancelar: {
    backgroundColor: 'transparent',
    padding: 5,
    marginTop: 5,
    marginHorizontal: 7,
    borderRadius: 10,
  },
  txtCancelar: {
    color: '#fff',
    textDecorationLine: 'underline',
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
    padding: 13,
    borderRadius: 10,
    marginBottom: 15,
  },
  sintomasInput: {
    height: 100,
  },
  btnNuevacita: {
    backgroundColor: '#000',
    padding: 6,
    marginTop: 1,
    marginBottom: 10,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  agendar: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 20,
    textTransform: 'uppercase',
    fontWeight: '400',
    fontFamily: 'PingFangTC-Thin',
    letterSpacing: 4.5,
  },
});

export default Formulario;
