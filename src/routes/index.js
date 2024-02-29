import React, { useContext } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AuthRoutes from './authRoutes';
import AppRoutes from './appRoutes';

import { AuthContext } from '../contexts/auth'


export default function Routes() {
    const { signed, loading } = useContext(AuthContext);
    if (loading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#131313'
            }}>
                <ActivityIndicator size='large' color='#7E7E7E' />
            </View>
        )
    }
        return (
            signed? <AppRoutes /> : <AuthRoutes />
        );    
}