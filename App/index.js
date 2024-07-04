// Filename: index.js
// Combined code from all files

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const tales = [
  { id: '1', title: 'Cinderella' },
  { id: '2', title: 'Snow White' },
  { id: '3', title: 'Beauty and the Beast' },
  { id: '4', title: 'Little Red Riding Hood' },
  { id: '5', title: 'Hansel and Gretel' },
];

const fairyTales = {
  '1': {
    title: 'Cinderella',
    content: 'Once upon a time...',
  },
  '2': {
    title: 'Snow White',
    content: 'Once upon a time...',
  },
  '3': {
    title: 'Beauty and the Beast',
    content: 'Once upon a time...',
  },
  '4': {
    title: 'Little Red Riding Hood',
    content: 'Once upon a time...',
  },
  '5': {
    title: 'Hansel and Gretel',
    content: 'Once upon a time...',
  },
};

function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Fairy Tales</Text>
      {tales.map((tale) => (
        <TouchableOpacity
          key={tale.id}
          style={styles.button}
          onPress={() => navigation.navigate('Fairy Tale', { taleId: tale.id })}
        >
          <Text style={styles.buttonText}>{tale.title}</Text>
        </TouchableOpacity>
      ))}
    </SafeAreaView>
  );
}

function TaleScreen({ route }) {
  const { taleId } = route.params;
  const tale = fairyTales[taleId];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.content}>
        <Text style={styles.title}>{tale.title}</Text>
        <Text style={styles.text}>{tale.content}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFEEE4',
    padding: 16,
    paddingTop: 48,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    backgroundColor: '#FFD700',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  content: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Fairy Tale" component={TaleScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}