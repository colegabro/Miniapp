import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Componente Filho Reutilizável
const CardAluno = ({ nome, nota }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.cardText}>Aluno: {nome}</Text>
      <Text style={[styles.cardText, { color: nota >= 6 ? 'green' : 'red' }]}>
        Nota: {nota}
      </Text>
    </View>
  );
};

export default function PropsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conceito: Props</Text>
      <Text style={styles.desc}>
        Props permitem passar dados de um componente pai para um componente filho. 
        Abaixo, usamos o mesmo componente "CardAluno" com dados diferentes.
      </Text>

      <CardAluno nome="João Silva" nota={8.5} />
      <CardAluno nome="Maria Souza" nota={4.0} />
      <CardAluno nome="Pedro Santos" nota={6.0} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  desc: { marginBottom: 20, lineHeight: 20 },
  card: {
    padding: 20,
    backgroundColor: '#f0f0f0',
    marginBottom: 10,
    borderRadius: 8,
    borderLeftWidth: 5,
    borderLeftColor: '#6200ee',
  },
  cardText: { fontSize: 18 },
});