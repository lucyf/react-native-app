import React from 'react'
import { StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import Colors from '../constants/colors';
import ShuffleSearch from '../components/shuffleSearch';




const Accordion = ({data}) => {
  const [showComponent, setShowComponent] = React.useState(false)

    const handleOnPress =()=>{
      setShowComponent(!showComponent)
    }

    const type = '?type=' + data.item.toLowerCase()
  return (
    <View>
        <TouchableOpacity style={styles.button}
        onPress={handleOnPress}
        key={data.id}>
            <View style={styles.category}>
                <Text style={styles.categoryText}>{data.item}</Text>
            </View>
        </TouchableOpacity>
        {!showComponent  ? null : <ShuffleSearch type={type} />}
    </View>
  );
}

const styles = StyleSheet.create({
    layout:{
        textAlign:'center',
        backgroundColor: '#fff',
        flex: 1,
        padding: 25,
    },
    category: {
      backgroundColor: Colors.mediumBlue,
      padding: 10,
      margin: 10,
      borderRadius: 10

    },
    categoryText: {
      color: '#fff',
      fontSize: 20
    }
});

export default Accordion;