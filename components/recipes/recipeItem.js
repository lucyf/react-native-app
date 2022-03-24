import React from 'react';
import { TouchableOpacity, View, Text, Image, StyleSheet } from 'react-native';
import COLORS  from '../../constants/colors';

const RecipeItem = ({ title, image, ingredients, onSelect }) => {
  return (
    <TouchableOpacity
      onPress={onSelect}
      style={styles.RecipeItem}
    >
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.ingredients}>{ingredients}</Text>
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

export default RecipeItem;