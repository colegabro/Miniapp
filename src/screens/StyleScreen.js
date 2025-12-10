import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function StyleScreen() {
  const [justify, setJustify] = useState('center');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Conceito: Flexbox</Text>
      <Text style={styles.desc}>
        No React Native, usamos Flexbox para layout. Tente mudar o alinhamento vertical (justifyContent) abaixo:
      </Text>

      {/* Botões de controle */}
      <View style={styles.controls}>
        {['flex-start', 'center', 'flex-end', 'space-between'].map((opt) => (
          <TouchableOpacity 
            key={opt} 
            style={[styles.btn, justify === opt && styles.btnActive]}
            onPress={() => setJustify(opt)}
          >
            <Text style={styles.btnText}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Área de Demonstração */}
      <View style={[styles.previewBox, { justifyContent: justify }]}>
        <View style={[styles.box, { backgroundColor: 'red' }]} />
        <View style={[styles.box, { backgroundColor: 'green' }]} />
        <View style={[styles.box, { backgroundColor: 'blue' }]} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  desc: { marginBottom: 20 },
  controls: { flexDirection: 'row', flexWrap: 'wrap', marginBottom: 20 },
  btn: { padding: 8, backgroundColor: '#ccc', borderRadius: 5, marginRight: 10, marginBottom: 10 },
  btnActive: { backgroundColor: '#6200ee' },
  btnText: { color: '#fff', fontSize: 12 },
  previewBox: { 
    flex: 1, 
    backgroundColor: '#ddd', 
    borderWidth: 2, 
    borderColor: '#333', 
    alignItems: 'center' // Alinhamento horizontal fixo para demo
  },
  box: { width: 50, height: 50, margin: 5 },
});