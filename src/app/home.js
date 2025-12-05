import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, Alert } from 'react-native';
import { useLocalSearchParams, useRouter} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Home() {
    const { nomeDoUsuario, numeroDoUsuario } = useLocalSearchParams();
    const router = useRouter();

    const listaDeCarros = [
      {
        id: 1,
        nome: "Porsche 911 GT3",
        desc: "Esportividade pura com motor aspirado.",
        img: require('../assets/images/car.webp')
      },
      {
        id: 2,
        nome: "Lamborghini Huracán",
        desc: "Design agressivo e potência extrema.",
        img: require('../assets/images/car.webp')
      },
      {
        id: 3,
        nome: "Ferrari 488 Spider",
        desc: "O clássico vermelho conversível.",
        img: require('../assets/images/car.webp')
      }
    ];
    const handleLogout = () => {
      router.replace('/');
    };

    return (
      <View style={styles.container}>
      
      <View style={styles.sidebar}>
        <TouchableOpacity style={styles.sidebarItem} onPress={handleLogout}>
          <Ionicons name="home-outline" size={28} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem} onPress={() => Alert.alert("Ops", "Busca indisponível no momento.")}>
          <Ionicons name="search-outline" size={28} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem}>
          <Ionicons name="car-sport-outline" size={28} color="#888" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.sidebarItem}>
          <Ionicons name="newspaper-outline" size={28} color="#888" />
        </TouchableOpacity>
      </View>


      <View style={styles.content}>
        
        <View style={styles.header}>
          <Text style={styles.welcomeText}>Olá, {nomeDoUsuario}!</Text>
          <Text style={styles.subTitle}>Confira os status:</Text>
        </View>

        <ScrollView style={styles.scrollArea}>
          {listaDeCarros.map((carro) => (
            <View key={carro.id} style={styles.card}>
              <Image source={carro.img} style={styles.cardImage} />
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>{carro.nome}</Text>
                <Text style={styles.cardDesc}>{carro.desc}</Text>
              </View>
            </View>
          ))}
          <View style={{ height: 20 }} /> 
        </ScrollView>

      </View>
    </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', 
    backgroundColor: '#121212',
  },
  
  sidebar: {
    width: 70, 
    backgroundColor: '#1E1E1E',
    alignItems: 'center',
    paddingTop: 50,
    borderRightWidth: 1,
    borderRightColor: '#333',
  },
  sidebarItem: {
    marginBottom: 30, 
    padding: 10,
  },

  content: {
    flex: 1, 
    padding: 20,
    paddingTop: 50,
  },
  header: {
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D32F2F', 
  },
  userPhone: {
    fontSize: 14,
    color: '#AAA',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    color: '#FFF',
    marginTop: 10,
  },

  scrollArea: {
    flex: 1,
  },
  card: {
    backgroundColor: '#333',
    borderRadius: 15,
    marginBottom: 20,
    overflow: 'hidden', 
    elevation: 5, 
  },
  cardImage: {
    width: '100%',
    height: 150,
  },
  cardInfo: {
    padding: 15,
  },
  cardTitle: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  cardDesc: {
    color: '#CCC',
    fontSize: 14,
  },
});