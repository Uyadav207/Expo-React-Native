import React from "react";
import { 
    View,
    Text,
    StyleSheet, Image
} from "react-native";

const ImageDetail = (props) =>{
    console.log(props);
    
    return (
        <View>
        <Image source={props.imageSource} />
            <Text>Image-Title - {props.title}</Text>
            <Text>Image-Score - {props.score}</Text>
        </View>
    )
} 
export default ImageDetail;

