import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { useSelector } from 'react-redux';



const ChallengeDetail = () => {


  return (
    <View >
       <Text style={styles.title}>Title</Text>
       <Text style={styles.description}>Description</Text>
       {/* <Image 
        style={styles.img}
        
        /> */}

    </View>
  );
}

const styles = StyleSheet.create({

});

export default ChallengeDetail;