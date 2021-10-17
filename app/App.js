import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';
import UserContextProvider from './src/contexts/UserContext';

export default () => {
  return (
    //UserContextProvider: Wherever the users are, the app is going to load their infos. 
    <UserContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </UserContextProvider>
  );
}