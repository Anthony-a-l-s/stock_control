import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Keyboard } from 'react-native';

export default function Home() {
    return (

        <View style={styles.container}>
            <Text style={{color:'#fff'}}>Home</Text>
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