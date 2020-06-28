import React from 'react';
import { Text , View , StyleSheet } from "react-native";


const BoxScreen =() => {
  return <View style = {styles.ViewStyle}>
<Text style={styles.textOneStyle}> child #1 </Text>
<Text style={styles.textTwoStyle}> child #2 </Text>
<Text style={styles.textThreeStyle}> child #3 </Text>
  </View>
}


const styles = StyleSheet.create({
ViewStyle: {
  flexDirection:'row'
  ,borderWidth: 3
  ,borderColor: 'black'
  ,height: 200
  ,alignItems: 'flex-end'
},
textOneStyle: {
borderWidth:3,
borderColor :'red',
},
textTwoStyle: {
borderWidth:3,
borderColor :'red',
position: 'absolute' // Same as {...StyleSheet.absoluteFillObject}
},
textThreeStyle: {
borderWidth:3,
borderColor :'red',
}

});

export default BoxScreen;
