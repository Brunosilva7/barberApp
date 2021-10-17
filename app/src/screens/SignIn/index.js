import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { UserContext } from '../../contexts/UserContext';

import {
    Container,
    InputArea,
    CustomButton,
    CustomButtonText,
    SignMessageButton,
    SignMessageButtonText,
    SignMessageButtonTextBold
} from './styles';

import Api from '../../Api';

import SignInput from '../../components/SignInput';

//Importing the svgs for the pages.
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');
    const [passwordField, setPasswordField] = useState('');

    const handleSignClick = async () => {
        if(emailField != '' && passwordField != '') {

            // What i`m going to send email and password.
            let json = await Api.signIn(emailField, passwordField);

            if(json.token) {
                await AsyncStorage.setItem('token', json.token);

                userDispatch({
                    type: 'setAvatar',
                    payload:{
                        avatar: json.data.avatar
                    }
                });

                navigation.reset({
                    routes:[{name:'MainTab'}]
                });
            } else {
                alert('E-mail and/or password wrong!');
            }

        } else {
            alert("Fill in the blank!");
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{name: 'SignUp'}]
        });
    }

    return (
        <Container>
            <BarberLogo width="100%" height="160" />

            {/* The placeholders to fill in */}
            <InputArea>
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="E-mail"
                    value={emailField}
                    onChangeText={t=>setEmailField(t)}
                />

                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Password"
                    value={passwordField}
                    onChangeText={t=>setPasswordField(t)}
                    password={true}
                />
                {/* Action for Login buttom */}
                <CustomButton onPress={handleSignClick}>
                    {/* Text inside the button */}
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>
            </InputArea>

            {/* footer */}
            {/* Action for the message buttom  */}
            <SignMessageButton onPress={handleMessageButtonClick}>
                <SignMessageButtonText>Don`t you have an account yet??</SignMessageButtonText>
                <SignMessageButtonTextBold>Sign Up</SignMessageButtonTextBold>
            </SignMessageButton>

        </Container>
    );
}