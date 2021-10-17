import React from 'react';

//it`s the end native because is a project for app.
import styled from 'styled-components/native';

//The CSS of the page preload.
export const Container = styled.SafeAreaView`
    background-color: #63C2D1;
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const LoadingIcon = styled.ActivityIndicator`
    margin-top: 50px;
`;