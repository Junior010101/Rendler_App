import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={require('./assets/logo.png')} style={styles.logo} />

      {/* Campos de entrada */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput style={styles.input} placeholder="Digite seu usuário" placeholderTextColor="#ccc" />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#ccc"
          secureTextEntry
        />

        {/* Botão Confirmar */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>

        {/* Botões sociais */}
        <View style={styles.socialContainer}>
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }}
            style={styles.socialIcon}
          />
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/pt/9/91/Discord.png' }}
            style={styles.socialIcon}
          />
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg' }}
            style={styles.socialIcon}
          />
        </View>
      </View>

      {/* Link de cadastro */}
      <TouchableOpacity>
        <Text style={styles.signupText}>Não é cadastrado?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 30,
    resizeMode: 'contain',
  },
  inputBox: {
    width: '100%',
    backgroundColor: '#1f1f1f',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    color: '#ffffff',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#2b2b2b',
    borderRadius: 8,
    padding: 10,
    color: '#fff',
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#6200ee',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  socialIcon: {
    width: 32,
    height: 32,
  },
  signupText: {
    color: '#00aaff',
    marginTop: 10,
  },
});
  
