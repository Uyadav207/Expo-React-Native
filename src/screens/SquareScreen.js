import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import colorCounter from '../components/ColorCounter'
import ColourCounter from "../components/ColorCounter";


const SquareScreen = (props) => {

    
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const color_change = 20;

    const setColor = (color, change) => {

        switch(color) {
            case 'red':
                red+change >255 || red+change < 0 ? null : setRed(red+change);``
                return;
            case 'green':
                green+change >255 || green+change < 0 ? null : setGreen(green+change);``
                return;
            case 'blue':
                blue+change >255 || blue+change < 0 ? null : setBlue(blue+change);``
                return;
        }
    }

    return (
    <View style={styles.container}>
       <ColourCounter 
       onIncrease={()=> setColor('red', color_change)} 
       onDecrease={()=>setColor('red', -1*color_change)} 
       color="Red" />
       <ColourCounter 
       onIncrease={()=> setColor('blue', color_change)} 
       onDecrease={()=> setColor('blue', -1*color_change)} 
       color="Blue" />
       <ColourCounter 
       onIncrease={()=> setColor('green', color_change)} 
       onDecrease={()=> setColor('green', -1*color_change)} 
       color="Green" />
       <View style={{ height: 150, width:"100%", backgroundColor: `rgb(${red},${green},${blue})`}} ></View>
    </View>
    )
}
export default SquareScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});