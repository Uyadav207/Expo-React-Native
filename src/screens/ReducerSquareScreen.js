import React, { useReducer } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import colorCounter from '../components/ColorCounter'
import ColourCounter from "../components/ColorCounter";

const reducer = (state, action)=> {

    // state === {red:number,green:num,blue:num};
    // action === { colorToChange : 'red' || 'green' || 'blue', amount : 15 || -15 }
 
 
    switch(action.coloToChange) {
     case 'red':
         return { ...state, red: state.red + action.amount }
     case 'green':
        return { ...state, green: state.green + action.amount }
     case 'blue':
        return { ...state, blue: state.blue + action.amount }  
     default:
        return state; 
 }
}

const ReducerSquareScreen = (props) => {
    

    const [state, dispatch] = useReducer(reducer,{ red: 0, green: 0,blue: 0 })
  const { red, green ,blue } = state;
  const colorChange = 100;
    return (
    <View style={styles.container}>
       <ColourCounter 
       onIncrease={()=> dispatch({ colorToChange: 'red', amount: colorChange })} 
       onDecrease={()=>dispatch({ colorToChange: 'red', amount: -1*colorChange })} 
       color="Red" />
       <ColourCounter 
       onIncrease={()=> dispatch({ colorToChange: 'blue', amount: colorChange })} 
       onDecrease={()=>dispatch({ colorToChange: 'blue', amount: -1*colorChange }) } 
       color="Blue" />
       <ColourCounter 
       onIncrease={()=> dispatch({ colorToChange: 'green', amount: colorChange })} 
       onDecrease={()=> dispatch({ colorToChange: 'green', amount: -1*colorChange })} 
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