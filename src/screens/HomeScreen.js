import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = ({navigation}) => {
  return (
    <View>
    <Text style={styles.text}>HomeScreen</Text>
    <Button
     onPress={() => navigation.navigate('Components')}
     title="Components screen Demo" />
    <Button
     onPress={() => navigation.navigate('List')}
     title="List screen Demo" />
    <Button
     onPress={() => navigation.navigate('ImgScr')}
     title="Image screen Demo" />
    <Button
     onPress={() => navigation.navigate('count')}
     title="Counter screen Demo" />
    <Button
     onPress={() => navigation.navigate('randC')}
     title="Color screen Demo" />
    <Button
     onPress={() => navigation.navigate('square')}
     title="Square screen Demo" />
    <Button
     onPress={() => navigation.navigate('ReduceSquare')}
     title="Reducer Square screen Demo" />
     <Button
      onPress={() => navigation.navigate('TScreen')}
      title="Text Screen screen Demo" />
    </View>

);};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default HomeScreen;
