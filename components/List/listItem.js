import { useState } from 'react';
import { StyleSheet, Text, View,  TouchableOpacity  } from 'react-native';


const ListItem = (props) => {
const {data, deleteItem} = props



  return (
    <View style={styles.list} >
          <Text style={styles.item}>{data.item.value}</Text>
          <TouchableOpacity 
          title="Close"
          style={styles.deleteBtn}
          onPress={() => deleteItem(data.item.id)}
          >
            <Text>X</Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    list:{
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        padding: 10,
        margin: 10
      },
      item:{
        flexGrow: 1,
        fontSize: 20
      },
      deleteBtn: {
          
      }
  });

export default ListItem;