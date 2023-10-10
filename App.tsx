import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, isDarkMode && styles.darkBackground]}>
      <View style={styles.header}>
        <Text style={[styles.headerText, isDarkMode && styles.darkText]}>Modo Oscuro</Text>
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>
      <Text style={[styles.description, isDarkMode && styles.darkText]}>
        Actívalo con un toque y disfruta de una experiencia visual más cómoda en entornos de poca luz.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  darkBackground: {
    backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    marginRight: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 20,
  },
  darkText: {
    color: 'white',
  },
});