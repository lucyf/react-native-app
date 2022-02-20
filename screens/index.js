import { StyleSheet, View, Text, Button} from 'react-native';




const Index = (props) => {
const {changeShow} = props


  return (
    <View style={styles.layout}>
            <View style={styles.textLayout}>
                <Text style={styles.title} >Bienvenidos a Mis Listas</Text>
                <Text style={{textAlign:'center', fontFamily: 'poppins-regular', fontSize: 18}}>Te invitamos a armar tu lista de compra de una forma rápida.</Text>
            </View>
            <View style={styles.buttonBox}>
                <Button style={styles.button} onPress={changeShow} title='Ir'></Button>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
    layout:{
        textAlign:'center',
        marginTop: 150,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 25
    },
    textLayout: {
        textAlign:'center',
        padding: 15,
        alignItems: 'center',
        
    },
    title:{
        fontSize: 25,
        fontFamily: 'poppins-bold'
    },
    buttonBox: {
        width:60,
        justifyContent: 'space-between',
        padding: 10
    },
    button: {
        textAlign: 'center',
    }
});

export default Index;