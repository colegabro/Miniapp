import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Vibration } from 'react-native';

export default function StateScreen() {
  // Explicação didática no código
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    // RECURSO NATIVO: Vibrar o celular por 100ms ao clicar
    Vibration.vibrate(100);
    setContador(contador + 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.explanationBox}>
        <Text style={styles.title}>Conceito: useState</Text>
        <Text style={styles.text}>
          O State é a "memória" do componente. Quando ele muda, a tela desenha novamente.
        </Text>
        <Text style={styles.code}>
          {`const [count, setCount] = useState(0);`}
        </Text>
      </View>

      <View style={styles.demoBox}>
        <Text style={styles.counterText}>Valor atual: {contador}</Text>
        <Button title="Aumentar e Vibrar" onPress={incrementar} color="#6200ee" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  explanationBox: { marginBottom: 30, padding: 15, backgroundColor: '#e0e0e0', borderRadius: 8, width: '100%' },
  title: { fontWeight: 'bold', fontSize: 18, marginBottom: 10 },
  text: { marginBottom: 10, lineHeight: 20 },
  code: { fontFamily: 'monospace', backgroundColor: '#333', color: '#0f0', padding: 10, borderRadius: 5 },
  demoBox: { alignItems: 'center' },
  counterText: { fontSize: 30, marginBottom: 20, fontWeight: 'bold' },
});