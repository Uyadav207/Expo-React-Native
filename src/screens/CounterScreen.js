import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

const CounterScreen = (props) => {

    const [counter, setCounter] = useState(0);

return (
    <View>
    <Button title="Increase" onPress={()=>{setCounter(counter+1)}} ></Button>
    <Button title="Decrease" onPress={()=>{setCounter(counter-1)}} ></Button>
        <Text style={styles.container}>Counter : {counter}</Text>
    </View>
    )}
export default CounterScreen;

const styles = StyleSheet.create({
    container: {
        flex:-1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});