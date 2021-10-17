import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import { UserContext } from '../../contexts/UserContext';
import Api from '../../Api';

//importing the logo, as we have installed svg transformer
import BarberLogo from '../../assets/barber.svg';

export default () => {

    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    /* Aways when the page appear, it will load these code lines */
    /*It will verify token code of the login*/
    useEffect(()=>{
        const checkToken = async () => {
            // It will take the token that the app had used.
            const token = await AsyncStorage.getItem('token');
            if(token) {
                let res = await Api.checkToken(token);
                // Verify if there is a new token
                if(res.token) {

                    await AsyncStorage.setItem('token', res.token);

                    userDispatch({
                        type: 'setAvatar',
                        payload:{
                            avatar: res.data.avatar
                        }
                    });

                    navigation.reset({
                        routes:[{name:'MainTab'}]
                    });

                } else {
                    // Send the user to Login page if there isn`t token 
                    navigation.navigate('SignIn');
                }
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            {/* The Style of the SVG */}
            <BarberLogo width="100%" height="160" />
            {/* loading icon */}
            <LoadingIcon size="large" color="#FFFFFF" />
        </Container>
    );
}