import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './pages/Login';
import SerieScreen from './pages/Series';
import SerieDetail from './pages/SerieDetail';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#6ca2f7',
            borderBottomWidth: 1,
            borderBottomColor: '#c5c5c5',
          },
          headerTitleStyle: {
            color: '#fff',
            fontSize: 30,
          },
        }}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            title: 'Bem vindo!',
          }}
        />
        <Stack.Screen
          name="Main"
          component={SerieScreen}
          options={{
            title: 'Séries!',
          }}
        />
        {/* <Stack.Screen name="SerieDetail">
          {props => <SerieDetail {...props} />}
        </Stack.Screen> */}
        <Stack.Screen
          name="SerieDetail"
          component={SerieDetail}
          options={({route}) => ({title: route.params.serie.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
