import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator, TextInput, ScrollView } from 'react-native';

  let notes = [
    "Note 1",
    "Note 2",
    "Note 3",
    "Note 4"
  ]

export default function App() {

  const [text, setInputText] = React.useState("");

  const addNote = () => {
    notes.push(text.toString());
    console.log(notes);
  }

  return (
    <View style={styles.container}>
        {notes.map(note => <Text> { note } </Text>)}

        <View style={styles.bottom}>
          <TextInput
            onChangeText={item => setInputText(item)}
            placeholder="Write the note here"
          />
          <Button onPress={addNote} title= {"ADD NOTE"} />
        </View>
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
    position: 'absolute',
    bottom: 10,
    left: 10
  }
});
