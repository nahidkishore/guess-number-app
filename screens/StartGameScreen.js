import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/colors';

const StartGameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a New Game</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a Number</Text>
        <TextInput />
        <View style={styles.buttonContainer}>
          <Button style={styles.button}title='Reset' onPress={() => {}} color={Colors.accent} />
          <Button style={styles.button}title='Confirm' onPress={() => {}} color={Colors.primary}/>
        </View>
      </Card>
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  button:{
    width:100
  }
});
export default StartGameScreen;
