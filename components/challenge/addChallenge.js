import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {NewChallenge} from '../../store/actions/newChallenge.action'

import { View, Text, Button, TextInput, ScrollView, StyleSheet } from 'react-native';
import ImageSelector from '../imageSelector';


const AddChallenge = ({ navigation }) => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('')
    const [description, setdescription] = useState('')
    const [image, setImage] = useState();

    const handleTitleChange = text => setTitle(text);
    const handleDescriptionChange = text =>setdescription(text);

    const handleSave = () => {
      dispatch(NewChallenge(title, description, image ));
      navigation.navigate('My Challenges');
    }

    const handlePickImage = (uri) => {
        setImage(uri);
    }


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Challenge Title</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={handleTitleChange}
                />

                <Text style={styles.label}>What did you do?</Text>
                <TextInput
                    style={styles.input}
                    value={description}
                    onChangeText={handleDescriptionChange}
                />
                <Text style={styles.label}>Take a picture</Text>
                <ImageSelector onImage={handlePickImage} />

            </View>
            <View style={styles.saveBtnContainer}>
                <Button
                    title="Save in Album"
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


export default AddChallenge;