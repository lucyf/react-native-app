import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {NewRecipe} from '../../store/actions/newRecipe.action'

import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import ImageSelector from '../imageSelector';


const AddRecipe = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [ingredients, setIngredients] = useState('')
    const [image, setImage] = useState();

    const handleTitleChange = text => setTitle(text);
    const handleIngredientsChange = text =>setIngredients(text);

    const handleSave = () => {
      dispatch(NewRecipe(title, ingredients, image ));
      navigation.navigate('Mis Recetas');
    }

    const handlePickImage = (uri) => {
        setImage(uri);
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Titulo</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}
                />

                <Text style={styles.label}>Ingredientes</Text>
                <TextInput
                    style={styles.input}
                    value={ingredients}
                    onChangeText={handleIngredientsChange}
                />
                <Text style={styles.label}>Foto</Text>
                <ImageSelector onImage={handlePickImage} />

            </View>
            <View style={styles.saveBtnContainer}>
                <Button
                    title="Guardar Receta"
                    color='#000'
                    onPress={handleSave}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 2,
        paddingVertical: 4,
    },
    saveBtnContainer:{
      width:250,
      paddingLeft: 130
      
    }
})


export default AddRecipe;