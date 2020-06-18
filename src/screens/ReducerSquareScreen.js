import React, { useReducer } from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";
import ColourCounter from "../components/ColorCounter";
  const colorChange = 15;
const reducer = (state, action)=> {

    // state === {red:number,green:num,blue:num};
    // action === {type : 'red' || 'green' || 'blue', amount : 15 || -15 }


    switch(action.type) {
     case 'change_red':
        return state.red + action.payload > 255 || state.red + action.payload < 0
          ? state
          : { ...state, red : state.red + action.payload };
     case 'change_green':
       return state.green + action.payload > 255 || state.green + action.payload < 0
         ? state
         : { ...state, green : state.green + action.payload };
     case 'change_blue':
         return state.blue + action.payload > 255 || state.blue + action.payload < 0
           ? state
           : { ...state, blue : state.blue + action.payload };
     default:
        return state;
 }
}

const ReducerSquareScreen = () => {


    const [state, dispatch] = useReducer(reducer,{ red: 0, green: 0,blue: 0 })
  const { red, green ,blue } = state;

    return (
    <View style={styles.container}>
       <ColourCounter
       onIncrease={()=> dispatch({ type: 'change_red', payload: colorChange })}
       onDecrease={()=>dispatch({ type: 'change_red', payload: -1*colorChange })}
       color="Red" />
       <ColourCounter
       onIncrease={()=> dispatch({ type: 'change_blue', payload: colorChange })}
       onDecrease={()=>dispatch({ type: 'change_blue', payload: -1*colorChange }) }
       color="Blue" />
       <ColourCounter
       onIncrease={()=> dispatch({ type: 'change_green', payload: colorChange })}
       onDecrease={()=> dispatch({ type: 'change_green', payload: -1*colorChange })}
       color="Green" />
       <View style={{ height: 150, width:"100%", backgroundColor: `rgb(${red},${green},${blue})`}} ></View>
    </View>
    )
}
export default ReducerSquareScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
