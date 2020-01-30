//import liraries
import React, { Component } from 'react';
import { Platform, KeyboardAvoidingView, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import {GiftedChat} from 'react-native-gifted-chat'
import Fire from '../Fire'

// create a component
class ChatScreen extends Component {
    state = {
        messages: []
    }

    get user() {
        return {
            _id: Fire.uid,
            name: this.props.navigation.state.params.name
        }
    }


    componentWillUnmount(){
        Fire.off();
    }

    render() {
        const chat = <GiftedChat messages={this.state.message} onSend={Fire.send} user={this.user} /> 
        if (Platform.OS === 'android') {
            <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={30} enabled>
                {chat}
            </KeyboardAvoidingView>
        }

        return (
        <SafeAreaView style={{flex:1}}>
            {chat}
        </SafeAreaView>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default ChatScreen;