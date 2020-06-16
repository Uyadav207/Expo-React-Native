import React from "react";
import { 
    View,
    Text,
    StyleSheet, Button
} from "react-native";

const ColourCounter = ({color, onIncrease, onDecrease}) => (
    <View style={styles.container}>
        <Text>{color}</Text>
        <Button onPress={()=> onIncrease()} title={`Increase ${color}`} ></Button>
        <Button onPress={()=> onDecrease()} title={`Decrease ${color}`} ></Button>
    </View>
    )
export default ColourCounter;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});