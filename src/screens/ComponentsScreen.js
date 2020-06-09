import React from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ComponentsScreen = () => {

const name  = 'Utkarsh Yadav';

    return <View>
        <Text style={styles.textStyle}>Getting started with react native!</Text>
         <Text style={styles.subHeader}>My Name is {name}</Text>
         </View>
}

const styles = StyleSheet.create({
    textStyle:{
        fontSize: 45
    },
    subHeader:{
        fontSize: 30
    }
})

export default ComponentsScreen