import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import COLORS  from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';

const ChallengeItem = ({ title, image, description}) => {

 const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={()=>{navigation.navigate('Challenge Detail')}}
      style={styles.RecipeItem}
    >
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  RecipeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 16,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: COLORS.salmon,
  },
  info: {
    marginLeft: 25,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    color: COLORS.mediumBlue,
    fontSize: 18,
    marginBottom: 6,
  },
  address: {
    color: '#777',
    fontSize: 16,
  }
});

export default ChallengeItem;