import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Keyboard } from 'react-native';

import { AuthContext } from '../../contexts/auth';

export default function Home() {

    const { logout } = useContext(AuthContext)
    return (

        <View style={styles.container}>
            <Text style={{color:'#fff'}}>Home</Text>
            <TouchableOpacity onPress={()=>logout()}>
                <Text style={{color:'#fff'}}>sair</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131313',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 30
    },

});