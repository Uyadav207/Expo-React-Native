import React, { useReducer } from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from "react-native";

const reducer = (state, action) =>{
  //state === {count: number}
  // action === {type: 'increment' || 'decrement', payload: 1 }apple
switch (action.type) {
  case 'increment':
    return { ...state, count : state.count + action.payload };
  case 'decrement':
  return { ...state, count : state.count - action.payload };
  default:
    return state;
}

}

const CounterScreen = (props) => {

const [state, dispatch] = useReducer(reducer, { count : 0 })

return (
    <View>
    <Button title="Increase" onPress={()=>{ dispatch({ type: 'increment' , payload: 1 })}} ></Button>
    <Button title="Decrease" onPress={()=>{dispatch({ type: 'decrement' , payload: 1 })}} ></Button>
        <Text style={styles.container}>Counter : { state.count }</Text>
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
