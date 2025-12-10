import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen({ navigation }) {
  const topics = [
    { id: 'State', title: '1. O que é State?', desc: 'Aprenda interatividade com useState e Vibração.', route: 'State' },
    { id: 'Props', title: '2. Props e Reuso', desc: 'Como passar dados entre componentes.', route: 'Props' },
    { id: 'Style', title: '3. Flexbox', desc: 'Como alinhar elementos na tela.', route: 'Style' },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Bem-vindo ao Lab!</Text>
      <Text style={styles.subHeader}>Escolha um conceito para aprender:</Text>

      {topics.map((item) => (
        <TouchableOpacity 
          key={item.id} 
          style={styles.card} 
          onPress={() => navigation.navigate(item.route)}
        >
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.cardDesc}>{item.desc}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  subHeader: { fontSize: 16, color: '#666', marginBottom: 20 },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3, // Sombra no Android
    shadowColor: '#000', // Sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
  },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#6200ee' },
  cardDesc: { fontSize: 14, color: '#555', marginTop: 5 },
});