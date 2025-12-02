import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router'; // Importamos isso para poder "navegar" entre telas

export default function LoginScreen() {
  const router = useRouter(); 

  const handleLogin = () => {
    router.replace('/home'); 
  };

  return (
    <View style={styles.container}>
      
      {/* 1. A LOGO PRINCIPAL */}
      {/* O 'require' busca a imagem dentro da sua pasta assets */}
      <Image 
        source={require('../assets/logo.png')} 
        style={styles.logo}
        resizeMode="contain" // Faz a imagem caber sem distorcer
      />

      {/* 2. CAIXA DE MENSAGEM (INPUT) */}
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número de Telefone</Text>
        <TextInput 
          style={styles.input}
          placeholder="(99) 99999-9999"
          placeholderTextColor="#888"
          keyboardType="phone-pad" // Abre o teclado numérico
        />
      </View>

      {/* BOTÃO DE ENTRAR (Opcional, para testar) */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginText}>Entrar</Text>
      </TouchableOpacity>

      {/* 3. BOTÃO GOOGLE */}
      <Text style={styles.googleText}>Ou entre com</Text>
      <TouchableOpacity style={styles.googleButton} onPress={handleLogin}>
        {/* Usando uma imagem da web para o icone do Google por enquanto */}
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg' }} 
          style={styles.googleIcon}
        />
      </TouchableOpacity>

    </View>
  );
}

// AQUI É ONDE A MÁGICA VISUAL ACONTECE (CSS em JS)
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela toda
    backgroundColor: '#121212', // Fundo escuro (parece combinar com sua logo preta/vermelha)
    alignItems: 'center', // Centraliza tudo horizontalmente
    justifyContent: 'center', // Centraliza tudo verticalmente
    padding: 20,
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 50, // Espaço embaixo da logo
  },
  inputContainer: {
    width: '100%',
    marginBottom: 30,
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
    borderRadius: 8, // Bordas arredondadas
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#D32F2F', // Vermelho (combinando com a logo DG)
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
    backgroundColor: '#FFF',
    width: 50,
    height: 50,
    borderRadius: 25, // Metade da largura/altura faz virar uma bolinha perfeita
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5, // Sombra no Android
  },
  googleIcon: {
    width: 24,
    height: 24,
  },
});