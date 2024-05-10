
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import MusicPlayerScreen from './screens/MusicPlayerScreen';
import HappyPlayListScreen from './screens/HappyPlayListScreen';
import SadPlayListScreen from './screens/SadPlayListScreen';
import EnergeticPlayListScreen from './screens/EnergeticPlayListScreen';
import QuirkyPlayListScreen from './screens/QuirkyPlayListScreen';
import RelaxingPlayListScreen from './screens/RelaxingPlayListScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="TuneSky" component={HomeScreen} />
        <Stack.Screen name="HappyPlaylist" component={HappyPlayListScreen} />
        <Stack.Screen name="SadPlaylist" component={SadPlayListScreen} />
        <Stack.Screen name="EnergeticPlaylist" component={EnergeticPlayListScreen} />
        <Stack.Screen name="QuirkyPlaylist" component={QuirkyPlayListScreen} />
        <Stack.Screen name="RelaxingPlaylist" component={RelaxingPlayListScreen} />
        <Stack.Screen name="MusicPlayer" component={MusicPlayerScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
