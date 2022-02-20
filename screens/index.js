import { StyleSheet, View, Text, Button} from 'react-native';



const Index = (props) => {
const {changeShow} = props


  return (
    <View style={styles.layout}>
            <View style={styles.textLayout}>
                <Text style={styles.title} >Bienvenidos a Mis Listas</Text>
                <Text style={{textAlign:'center'}}>Te invitamos a armar tu lista de compra, de una forma rápida.</Text>
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
        padding: 20
    },
    textLayout: {
        textAlign:'center',
        padding: 10,
        alignItems: 'center'
    },
    title:{
        fontSize: 20,
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