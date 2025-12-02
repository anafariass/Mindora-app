import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Importamos isso para poder "navegar" entre telas

export default function LoginScreen() {
  const router = useRouter(); 

  const handleLogin = () => {
    router.replace('/home'); 
  };

  return (
    <View style={styles.container}>
      
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número de Telefone</Text>
        <TextInput 
          style={styles.input}
          placeholder="(99) 99999-9999"
          placeholderTextColor="#888"
          keyboardType="phone-pad"
        />
      </View>


      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.googleText}>Ou entre com</Text>
      <TouchableOpacity style={styles.googleButton} onPress={handleLogin}>
        <Image 
          source={require('../assets/google.png')} 
          style={styles.googleIcon}
          resizeMode="contain"
        />
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
    width: 500,
    height: 250,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 25,
  },
  label: {
    color: '#FFF',
    marginBottom: 8,
    fontSize: 16,
  },
  input: {
    backgroundColor: '#333',
    color: '#FFF',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#D32F2F', 
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  googleText: {
    color: '#AAA',
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#888',
    width: 50,
    height: 50,
    borderRadius: 25, 
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
});