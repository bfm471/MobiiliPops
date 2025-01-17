import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider } from 'react-native-paper';
import SigninScreen from './screens/SigninScreen';
import HomeScreen from './screens/HomeScreen';
import LogOut from './components/LogOut';
import FavoriteScreen from './screens/FavoritesScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function LoginStack() {
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name='Login' 
        component={LoginScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Signin'
        component={SigninScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )

}

export default function App() {

  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='LoginStack'>
          <Drawer.Screen name='LoginStack' component={LoginStack} options={{ title: 'Login / SignIn', drawerItemStyle: { display: 'none'}, headerShown: false }} />
          <Drawer.Screen name='LogOut' component={LogOut} />
          <Drawer.Screen name='Home' component={HomeScreen} options={{ title: 'Random Joke'}} />
          <Drawer.Screen name='Favourites' component={FavoriteScreen} options={{ title: 'My favorites'}} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
