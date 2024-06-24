import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Keyboard } from 'react-native';

import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema';
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth';


export default function Login() {


    const navigation = useNavigation();
    const { login, loginError } = useContext(AuthContext)

    const { control, handleSubmit, formState: { errors }, register } = useForm({
        resolver: yupResolver(schema)
    })


    const [iconEye, setIconEye] = useState('eye');
    const [visible, setVisible] = useState(true);


    function switchIcon() {
        if (iconEye === 'eye') {
            setIconEye('eye-off');
            setVisible(false);
        } else {
            setIconEye('eye');
            setVisible(true);
        }
    }

    function handleLogin(data) {
        Keyboard.dismiss();
        const req = {
            email: data.email,
            password: data.password,
        }
        login(req);
    }


    return (

        <View style={styles.container}>

            <Text style={styles.title}>Entrar</Text>

            <View style={styles.areaInput}>

                <Controller
                    control={control}
                    name="email"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput style={[styles.input, {
                            borderWidth: errors.email && 1,
                            borderColor: errors.email && '#ff0000'
                        }]}
                            placeholder='Email'
                            placeholderTextColor='#7E7E7E'
                            cursorColor="#7E7E7E"
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.email && <Text style={styles.errorMessage}>{errors.email?.message}</Text>}

                <View style={styles.areaImputPassword}>
                    <Controller
                        control={control}
                        name="password"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput style={[styles.input, {
                                borderWidth: errors.password && 1,
                                borderColor: errors.password && '#ff0000'
                            }]}
                                placeholder='Senha'
                                placeholderTextColor='#7E7E7E'
                                cursorColor="#7E7E7E"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry={visible}
                            />
                        )}
                    />
                    <TouchableOpacity
                        style={styles.buttonEye}
                        onPress={switchIcon}
                    >
                        <Feather name={iconEye}
                            size={25} color='#7E7E7E'
                        />
                    </TouchableOpacity>
                </View>
                {errors.password && <Text style={styles.errorMessage}>{errors.password?.message}</Text>}
                {loginError && <Text style={styles.errorMessage}>{loginError}</Text>}

            </View>

            <TouchableOpacity>
                <Text style={styles.textForgotPassword}>Esqueci minha senha</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit(handleLogin)}>
                <Text style={styles.TextLogin}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
                <Text style={styles.textCreateAccount}>Criar conta</Text>
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

    title: {
        color: '#7E7E7E',
        fontWeight: 'bold',
        fontSize: 40,
        marginBottom: 20
    },

    areaInput: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
    },

    input: {
        backgroundColor: '#2F2F2F',
        width: '100%',
        height: 50,
        borderRadius: 8,
        padding: 8,
        color: '#7E7E7E',
        marginBottom: 20,
    },

    areaImputPassword: {
        width: '100%',
        flexDirection: 'row',
    },

    buttonEye: {
        position: 'absolute',
        padding: 10,
        marginLeft: '85%'
    },

    errorMessage: {
        color: '#ff0000',
        marginBottom: 20,
        alignSelf: 'flex-start'
    },

    textForgotPassword: {
        color: '#7E7E7E',
        fontSize: 15,
    },

    checkBoxArea: {
        width: 23,
        height: 23,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkBox: {
        width: 23,
        height: 23,
        borderWidth: 1,
        borderColor: '#7E7E7E',
        borderRadius: 2,
    },

    buttonLogin: {
        backgroundColor: '#0E175C',
        width: '90%',
        height: 45,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },

    TextLogin: {
        color: '#7E7E7E',
        fontSize: 20
    },


    textCreateAccount: {
        color: '#7E7E7E',
        fontSize: 18,
        marginTop: -10
    },

});