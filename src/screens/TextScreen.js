import React, { useState } from "react";
import {
    View,
    Text,
    StyleSheet, TextInput
} from "react-native";
import colorCounter from '../components/ColorCounter'
import ColourCounter from "../components/ColorCounter";


const TextScreen = (props) => {

   const [password,setPassword] = useState('');

    return (
    <View>
    <Text>Input Password : </Text>
      <TextInput
       style = {styles.container}
       AutoCaptalize = "none"
       autoCorrect = {false}
       placeholder="Type your name"
       value={password}
       onChangeText = {(newValue)=> setPassword(newValue)}
        />
        <View>
        {password.length < 4 ? <Text>Password must be 4 characters</Text> : null }
        </View>
    </View>
    )
}
export default TextScreen;

const styles = StyleSheet.create({
    container: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});
