import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import IndexScreens from './src/screens/IndexScreens';
import BlogProvider from './src/context/BlogContext';


const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={IndexScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <BlogProvider>
      <App/>
    </BlogProvider>
  )
}
