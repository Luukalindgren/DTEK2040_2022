import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ActivityIndicator, TextInput, ScrollView } from 'react-native';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notes: [
                 "Note 1",
                 "Note 2",
                 "Note 3",
                 "Note 4"
               ],
      text: "",
      setInputText: ""
    }
  }

  addNote = (event) => {
    event.preventDefault()
    const noteObject = this.state.setInputText;

    const note = this.state.notes.concat(noteObject);

    this.setState({
      notes: note,
      text: "",
      setInputText: ""
    })
    console.log(note);
    console.log(this.state.notes);
  }

  render() {
      return (
        <View style={styles.container}>
            {this.state.notes.map(note => <Text> { note } </Text>)}

            <View style={styles.bottom}>
              <TextInput
                placeholder="Write the note here"
                onChangeText={(newText) => this.setState({ setInputText: newText})}
              />
              <Button onPress={this.addNote} title= {"ADD NOTE"} />
            </View>
        </View>
      );
    }
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


export default App