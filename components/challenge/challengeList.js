import React, {useEffect} from 'react'
import { StyleSheet, View, FlatList} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import ChallengeItem from './challengeItem';
import { loadChallenge } from '../../store/actions/newChallenge.action';




const ChallengeList = ({ navigation }) => {
  const dispatch = useDispatch();
  const addedChallenges = useSelector(state =>state.myChallenges.myChallenges)

  
  useEffect(() => {
    dispatch(loadChallenge());
}, [addedChallenges]);




  const renderItem = (data) => (
    <ChallengeItem
        title={data.item.title}
        image={data.item.image}
        description={data.item.description}
        dataId={data.item.id}

    />
  )


  return (
    <View >
       <View>
       <FlatList
        data={addedChallenges}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        />
       </View>
       
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ChallengeList;