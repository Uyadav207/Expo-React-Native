import React from "react";
import { 
    View,
    Text,
    StyleSheet,
    FlatList
} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: 'friend #1'},
        {name: 'friend #2'},
        {name: 'friend #3'},
        {name: 'friend #4'},
        {name: 'friend #5'},
        {name: 'friend #6'}
    ];

   return (
       <FlatList
       keyExtractor={(friends)=>friends.name}
          data={friends} 
          renderItem={({item}) =>{
              return <Text style={styles.container}>{item.name}</Text>
          }}

       />
    )}
export default ListScreen;

const styles = StyleSheet.create({
    container: {
       marginVertical:50
    }
});