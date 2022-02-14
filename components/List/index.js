import { useState } from 'react';
import { StyleSheet,  View,  FlatList } from 'react-native';
import ListItem from './listItem';

const List = (props) => {

    const {itemsList, setItemsList} = props

    const handleDeleteItem = (id)=>{
      const filteredData = itemsList.filter(item => item.id !== id);

      setItemsList(filteredData)
    }

  return (
    <View>
      <FlatList
        data={itemsList}
        renderItem={data => (<ListItem data={data} deleteItem={handleDeleteItem}/> )
        }
        keyExtractor={(item) => item.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
   
  });

export default List;