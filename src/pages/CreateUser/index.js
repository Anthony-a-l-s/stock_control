import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Switch, Keyboard } from 'react-native';

import Feather from 'react-native-vector-icons/Feather'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import schema from './schema';
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth';


export default function CreateUser() {

    const navigation = useNavigation();
    const { create } = useContext(AuthContext)

    const { control, handleSubmit, formState: { errors }, register } = useForm({
        resolver: yupResolver(schema)
    })

    const [iconEye, setIconEye] = useState('eye');
    const [iconEyeConfirm, setIconEyeConfirm] = useState('eye');
    const [visible, setVisible] = useState(true);
    const [visibleConfirm, setVisibleConform] = useState(true);



    function switchIcon() {
        if (iconEye === 'eye') {
            setIconEye('eye-off');
            setVisible(false);
        } else {
            setIconEye('eye');
            setVisible(true);
        }
    }

    function switchIconConfirm() {
        if (iconEyeConfirm === 'eye') {
            setIconEyeConfirm('eye-off');
            setVisibleConform(false);
        } else {
            setIconEyeConfirm('eye');
            setVisibleConform(true);
        }
    }


    function handleCreate(data) {
        Keyboard.dismiss();
        create(data);
    }

    return (

        <View style={styles.container}>

            <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
                <AntDesign name='back' size={25} color='#7E7E7E' />
            </TouchableOpacity>
            <Text style={styles.title}>Registre-se</Text>

            <View style={styles.areaInput}>

                <Controller
                    control={control}
                    name="name"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput style={[styles.input, {
                            borderWidth: errors.name && 1,
                            borderColor: errors.name && '#ff0000'
                        }]}
                            placeholder='Nome completo'
                            placeholderTextColor='#7E7E7E'
                            cursorColor="#7E7E7E"
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.name && <Text style={styles.errorMessage}>{errors.name?.message}</Text>}

                <Controller
                    control={control}
                    name="userName"
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput style={[styles.input, {
                            borderWidth: errors.userName && 1,
                            borderColor: errors.userName && '#ff0000'
                        }]}
                            placeholder='Nome de usuário'
                            placeholderTextColor='#7E7E7E'
                            cursorColor="#7E7E7E"
                            value={value}
                            onChangeText={onChange}
                        />
                    )}
                />
                {errors.userName && <Text style={styles.errorMessage}>{errors.userName?.message}</Text>}

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

                <View style={styles.areaImputPassword}>
                    <Controller
                        control={control}
                        name="confirmPassword"
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput style={[styles.input, {
                                borderWidth: errors.confirmPassword && 1,
                                borderColor: errors.confirmPassword && '#ff0000'
                            }]}
                                placeholder='Confirme sua senha'
                                placeholderTextColor='#7E7E7E'
                                cursorColor="#7E7E7E"
                                value={value}
                                onChangeText={onChange}
                                secureTextEntry={visibleConfirm}
                            />
                        )}
                    />
                    <TouchableOpacity
                        style={styles.buttonEye}
                        onPress={switchIconConfirm}
                    >
                        <Feather name={iconEyeConfirm}
                            size={25} color='#7E7E7E'
                        />
                    </TouchableOpacity>
                </View>
                {errors.confirmPassword && <Text style={styles.errorMessage}>{errors.confirmPassword?.message}</Text>}
            </View>


            <TouchableOpacity style={styles.buttonLogin} onPress={handleSubmit(handleCreate)}>
                <Text style={styles.TextLogin}>Registrar</Text>
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
    },

    backIcon: {
        alignSelf: 'flex-start',
        marginTop: -70,
        marginLeft: 15,
        marginBottom: 30
    },

    title: {
        color: '#7E7E7E',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10
    },

    areaInput: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        marginTop: 60,
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
        marginBottom: 5,
        alignSelf: 'flex-start'
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


});