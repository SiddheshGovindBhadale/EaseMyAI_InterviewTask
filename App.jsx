import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import StackNavigation from './src/navigation/StackNavigation';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar backgroundColor={'#7d6af0'} />
      <StackNavigation />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  }
});
