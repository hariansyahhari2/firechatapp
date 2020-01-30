//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, KeyboardAvoidingView } from 'react-native';
import {Ionicons} from '@expo/vector-icons'

// create a component
class LoginScreen extends Component {
    state= {
        name: ""
    }

    continue = () => {
        this.props.navigation.navigate("Chat Room", {name: this.state.name})
    }
    
    render() {
        return (
            <KeyboardAvoidingView 
            style={styles.container}
            behavior= 'padding'>
                <View style={{marginTop: 64}}>
                    <Image 
                    source={require("../assets/chat.png")}
                    style={{width: 110, height: 110, alignSelf: 'center'}}
                    />
                </View>
                <View style={{marginHorizontal: 32,}}>
                    <Text style={styles.header}>Login to your Account</Text>
                    <View style={{flexDirection: 'column'}}>
                        <TextInput 
                        style={styles.input}
                        placeholder='Input Username'
                        onChangeText={name => {this.setState({name})}}
                        value={this.state.name}
                        />
                        <TouchableOpacity style={styles.continue}
                        onPress={this.continue}>
                            <Ionicons name="md-arrow-round-forward" size={24} color="#FFF"/>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#F4F5F7',
        justifyContent: 'center',
        top: -150
    },
    header: {
        fontWeight: '600',
        fontSize: 20,
        color: '#514E5A',
        marginTop: 32,
        alignSelf: 'center'
    },
    input: {
        marginTop: 10,
        height: 50,
        width: 300,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: '#BAB7C3',
        borderRadius: 30,
        paddingHorizontal: 16,
        color: '#514E5A',
        fontWeight: '600',
    },
    continue: {
        marginTop: 10,
        height: 50,
        width: 150,
        borderRadius: 50/2,
        backgroundColor: '#9075E3',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        left: 75,
    }
});

//make this component available to the app
export default LoginScreen;
