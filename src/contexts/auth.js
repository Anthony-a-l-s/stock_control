import React, { createContext, useState, useEffect } from 'react';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({});

function AuthProvider({ children }) {

    const [user, setUser] = useState(null);
    const [loged, setLoged] = useState(false);
    const [loading, setLoading] = useState(true)
    const [loginError, setLoginerror] = useState('')

    const navigation = useNavigation();


    useEffect(() => {
        async function findUser() {
            const token = await AsyncStorage.getItem('@Token');
            if (token) {
                const req = { token: token };
                const result = await api.get(`/user/${token}`);
                api.defaults.headers['Authorization'] = `Bearer ${token}`
                setUser(result.data);
                setLoading(false);
            }
            setLoading(false);
        }
        findUser();

    }, [])

    async function login(data) {
        const req = {
            email: data.email,
            password: data.password
        };
        await api.post('/login', req)
            .then( async(response) => {
                console.log(response.data)
                const { id, name, token, username, email, admin } = response.data;


                await AsyncStorage.setItem('@Token', token);


                api.defaults.headers['Authorization'] = `Bearer ${token}`
                setUser({
                    id,
                    name,
                    token,
                    username,
                    email,
                    admin,
                })

                navigation.navigate('Home')
            }).catch((error)=>{
                console.log('Erro ao logar!');
                console.log(error);
                setLoginerror('Email ou senha icorretos')
            })
    }

    async function logout() {
        await AsyncStorage.removeItem('@Token');
        setUser(null);


    }

    async function create(data) {
        const req = {
            name: data.name,
            username: data.userName,
            email: data.email,
            password: data.password,
            admin: false
        }
        try {
            await api.post('/user-create', req)
            navigation.goBack();
        }
        catch {
            console.log('Erro aou criar usuário!')
        }
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, user, login, create, loading, logout, loginError }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;