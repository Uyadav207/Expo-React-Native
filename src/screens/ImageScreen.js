import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () =>{
    return (
        <View>
           <ImageDetail title="forest" imageSource={require('../../assets/icon.png')} score={10}  />
           <ImageDetail title="beach" imageSource={require('../../assets/icon.png')} score={10} />
           <ImageDetail title="mountain" imageSource={require('../../assets/icon.png')} score={10} />
        </View>
    )
} 
export default ImageScreen;
