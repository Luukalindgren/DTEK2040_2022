import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';


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
        <ScrollView contentContainerStyle = {styles.contentContainer} >
            {this.state.notes.map(note => <Text style={{ fontSize: 50}}> { note } </Text>)}

            <View >
              <TextInput
                style= {{ fontSize: 20, padding: 10}}
                placeholder="Write the note here"
                onChangeText={(newText) => this.setState({ setInputText: newText})}
              />
              <Button style={{ position: 'absolute', bottom: 20}}onPress={this.addNote} title= {"ADD NOTE"} />
            </View>
        </ScrollView>
      );
    }
}

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    flexDirection: "column",
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