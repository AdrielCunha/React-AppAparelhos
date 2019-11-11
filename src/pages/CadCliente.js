import React from 'react';
import { SafeAreaView, StyleSheet, View, Text,  Button, TextInput } from 'react-native';

export default class Main extends React.Component {
    static navigationOptions = {
        title: 'Cadastrar Cliente',
        headerStyle: {
            backgroundColor: '#808080'
        },
        headerTintColor: '#FFF'
      };
    render() {
        return (
          <SafeAreaView>
            <View style={{ marginTop:20 }}>
                <Text style={{marginLeft:22, fontSize:20}}>Nome:</Text>
                <TextInput style={styles.InputName} />
            </View>
          </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    InputName:{
        width: 350,
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        alignSelf:'center',
        fontSize:20
    }
});
