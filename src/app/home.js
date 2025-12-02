
import { View, Text, StyleSheet, Image } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bem-vinda à Home!</Text>
      <Text style={styles.text}>Aqui vamos colocar a barra lateral e os carros.</Text>
      <View style={styles.cars}>
        <Image source={require('../assets/car.webp')} style={styles.image}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222',
  },
  text: {
    color: '#FFF',
    fontSize: 18,
  },
  cars: {
    
  },
});