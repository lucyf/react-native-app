import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import Colors from '../constants/colors'
import { useSelector } from "react-redux";
import { Link } from '@react-navigation/native';

const ModalAcceptedChallenge = (props) => {
const {modalVisible, setModalVisible, navigation} = props
 const challenge = useSelector(state => state.suggestions.selectedChallenge)

 const handleModalButton = () =>{
    setModalVisible(!modalVisible)
 }
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>You have chosen:</Text>
            <Text style={styles.modalSubtitle}>"{challenge.activity}"</Text>
            <Text style={styles.modalText}>You need {challenge.participants} participant/s to complete it.</Text>
            <Text style={styles.modalText}>Go to your challenge album and make new memories.</Text>
            <Link to={{ screen: 'My Challenges', params: {screen: 'New Challenge', params: {challenge: challenge}}}} onPress={handleModalButton} style={styles.button}> Go</Link>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4
    },
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: Colors.flame,
    color: 'white'

  },

  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalTitle:{
      fontSize: 25,
      paddingBottom: 20
  },
  modalSubtitle: {
    fontSize: 20,
    paddingBottom: 10 
  },

  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: "center"
  }
});

export default ModalAcceptedChallenge;