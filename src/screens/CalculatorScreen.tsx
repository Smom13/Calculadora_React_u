// src/screens/CalculatorScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function CalculatorScreen() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const calculate = (op: string) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) return;
    let res = 0;
    switch (op) {
      case '+': res = a + b; break;
      case '-': res = a - b; break;
      case '*': res = a * b; break;
      case '/': res = b !== 0 ? a / b : 0; break;
    }
    setResult(res);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.calculator}>
        <Text style={styles.title}>Calculadora</Text>

        <TextInput
          placeholder="Número 1"
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
          style={styles.input}
        />
        <TextInput
          placeholder="Número 2"
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
          style={styles.input}
        />

        <View style={styles.row}>
          <Button title="+" onPress={() => calculate('+')} />
          <Button title="-" onPress={() => calculate('-')} />
          <Button title="*" onPress={() => calculate('*')} />
          <Button title="/" onPress={() => calculate('/')} />
        </View>

        <Text style={styles.result}>
          Resultado: {result !== null ? result : ''}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#1e1e1e', // fondo general oscuro
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculator: {
    width: 300,
    padding: 20,
    backgroundColor: '#2c2c2c', // fondo de la "calculadora"
    borderRadius: 12,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#ffffff', // texto blanco
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#555', // borde gris oscuro
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    color: '#fff',
    backgroundColor: '#3a3a3a', // fondo del input
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  result: {
    fontSize: 18,
    fontWeight: '500',
    color: '#fff',
  },
});
