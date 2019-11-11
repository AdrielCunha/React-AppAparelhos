import React from 'react';
import { SafeAreaView, StyleSheet, View,  Button, Image, StatusBar } from 'react-native';

export default class Main extends React.Component {
    static navigationOptions = {
        title: 'Home',
        headerStyle: {
            backgroundColor: '#00c'
        },
        headerTintColor: '#FFF'
      };
    render() {
        return (
            <SafeAreaView>
                <StatusBar 
                    barStyle = "dark-content"
                    hidden = {false} 
                    backgroundColor = "#555" 
                    headerTintColor = "#FFF"
                    translucent = {false}/>
                <View>
                    <Image 
                        source={require('../images/tv.jpg')} 
                        style={styles.Image}
                    />
                </View>
                <View style={styles.button} >
                    <Button 
                        title='Cadastrar Cliente'
                        onPress={() => this.props.navigation.navigate('CadCliente')}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        title='Cadastrar Aparelho'
                        onPress={() => this.props.navigation.navigate('CadAparelho')}
                    />
                </View>
            </SafeAreaView>

        );
    }
}

const styles = StyleSheet.create({
    button:{
        width: 200,
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:60,
    },
    Image:{
        width:300,
        height:200,
        marginTop:20,
        marginRight:'auto',
        marginLeft:'auto'

    }
});
