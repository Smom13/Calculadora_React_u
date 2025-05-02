import React, { useEffect, useContext } from 'react';
import { View, Text, Button, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { GlobalContext } from '../context/GlobalContext';
import { Linking } from 'react-native';
import logo from '../../assets/images/github.jpeg';

export default function InfoScreen() {
  const navigation = useNavigation();
  const { sharedValue, setSharedValue } = useContext(GlobalContext);

  useEffect(() => {
    setSharedValue('');
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.sharedText}>{sharedValue}</Text>

      <View style={styles.card}>
        <Text style={styles.title}>Bienvenido a GitHub</Text>

        <Image source={logo} style={styles.image} />

        <View style={styles.buttonContainer}>
        <Button
  title="Ver más"
  color="#24292e"
  onPress={() => Linking.openURL('https://github.com/')}
/>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#1e1e1e', // fondo general oscuro
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sharedText: {
    textAlign: 'center',
    marginBottom: 15,
    fontSize: 16,
    color: '#ccc', // gris claro para texto informativo
  },
  card: {
    backgroundColor: '#2c2c2c', // fondo de la tarjeta
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#ffffff', // blanco para el título
  },
  image: {
    height: 120,
    width: 180,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    borderRadius: 8,
    overflow: 'hidden',
  },
});
