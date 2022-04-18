import React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
    const [text, onChangeText] = React.useState(null);
  return (
    <View style={styles.bottom}>
      <TextInput
        onChangeText={onChangeText}
        value={text}
        placeholder="Write the note here"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10
  }
});
