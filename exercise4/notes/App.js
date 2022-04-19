import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: "pink",
    padding: 20
  }
});

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

  createAlert = () => {
    Alert.alert(
      "Duplicate note!",
      "Note is already written, please change it",
      [
        {
          text: "OK",
          onPress: () => console.log("OK Pressed")
        }
      ])
  }

  addNote = (event) => {
    event.preventDefault()
    const noteObject = this.state.setInputText;

    if(this.state.notes.includes(noteObject)) {
        this.createAlert();
    } else {
        const note = this.state.notes.concat(noteObject);

        this.setState({
          notes: note,
          text: "",
          setInputText: ""
        })
      console.log(note);
      }
      this.textInput.clear()
      console.log(this.state.notes);
  }

  DefaultScreen = (props) => {
    return (
      <ScrollView contentContainerStyle = {styles.contentContainer} >
        {this.state.notes.map(note => <Text style={{ fontSize: 30, padding: 10}}> { note } </Text>)}
        <Button color = "darkgrey" title="ADD NOTES" onPress={() => props.navigation.navigate("Add a Note")} />
      </ScrollView>
    )
  }

  AddScreen = (props) => {
    return (
      <View>
        <TextInput
          ref={input => { this.textInput = input }}
          style= {{ fontSize: 20, padding: 20, backgroundColor: "lightgray"}}
          placeholder="Write the note here"
          onChangeText={(newText) => this.setState({ setInputText: newText})}
        />
        <Button color = "darkgrey" onPress={this.addNote} title= {"ADD NOTE"} />
      </View>
    )
  }

  render() {
      return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome to Notes">
          <Stack.Screen name="Welcome to Notes" component={this.DefaultScreen} />
          <Stack.Screen name="Add a Note" component={this.AddScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      );

    }
}

export default App;