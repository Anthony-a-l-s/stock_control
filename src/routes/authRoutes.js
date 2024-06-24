import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Login from '../pages/Login';
import CreateUser from '../pages/CreateUser';

const AuthStack = createNativeStackNavigator();

export default function AuthRoutes() {

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown: false,
                }}
            />
            <AuthStack.Screen
                name='CreateUser'
                component={CreateUser}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    );
}