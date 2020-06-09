import React, { useState } from "react";
import { 
    View,
    Text,
    StyleSheet,Button,FlatList
} from "react-native";



const ColorScreen = (props) => {
    const [color, setColor] = useState([]);

return (
    <View>
        <Button title="Add a Color" onPress={()=> {
            setColor([...color,randomRGB()])
        }} />
       
        <FlatList
          keyExtractor={(item)=>item}
          data={color} 
          renderItem={({item}) =>{
              return  <View style={{ height:100, width:100, backgroundColor: item }} />
          }}

       />
       
    </View>
    )}

    const randomRGB = () => {
        const red = Math.floor(Math.random()*256);
        const green = Math.floor(Math.random()*256);
        const blue = Math.floor(Math.random()*256);

        return `rgb(${red}, ${green}, ${blue})`;
    }

export default ColorScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});