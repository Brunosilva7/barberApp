import styled from 'styled-components/native';
import { Text} from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #FFFFFF;
`;

export const Scroller = styled.ScrollView`
  flex: 1;
`;
export const SwipeDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #FFFFFF;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeActiveDot = styled.View`
  width: 10px;
  height: 10px;
  background-color: #000000;
  border-radius: 5px;
  margin: 3px;
`;

export const SwipeItem = styled.View`
  flex: 1;
  background-color: #63C2D1;
`;

export const SwipeImage = styled.Image`
  width: 100%;
  height: 240px;
`;
// If the user doesn`t upload any photo, it`ll be normal the appearance
export const FakeSwiper = styled.View`
  height: 240px;
  background-color: #63C2D1;
`;

export const PageBody = styled.View`
  background-color: #FFFFFF;
  border-top-left-radius: 50px;
  margin-top: -50px;
  min-height: 400px;
`;

export const UserInfoArea = styled.View`
  flex-direction: row;
  margin-top: -30px;
`;
export const UserInfo = styled.View`
  flex: 1;
  justify-content: flex-end;
`;

export const UserAvatar = styled.Image`
  width: 110px;
  height: 110px;
  border-radius: 20px;
  margin-left: 30px;
  margin-right: 20px;
  border-width: 4px;
  border-color: #FFFFFF;
`;
export const UserInfoName = styled.Text`
  color: #000000;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;
export const UserFavButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  background-color: #FFFFFF;
  border: 2px solid #999999;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-right: 8px;
  margin-left: 8px;
`;

export const ServiceArea = styled.View`
margin-top: 40px;
`;
export const ServicesTitle = styled.Text`
font-size: 18px;
font-weight: bold;
color: #268596;
margin-left: 30px;
margin-bottom: 20px;
`;

export const ServiceItem = styled.View`
  flex-direction: row;
  margin-left: 30px;
  margin-right: 30px;
  margin-bottom: 20px;
`;
export const ServiceInfo = styled.View`
  flex: 1;
`;
export const ServiceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #268596;
`;
export const ServicePrice = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #268596;
`;
export const ServiceChooseButton = styled.TouchableOpacity`
background-color: #4EADBE;
border-radius: 10px;
padding: 10px 15px;
`;
export const ServiceChooseBtnText = styled.Text`
font-size: 14px;
font-weight: bold; 
color: #FFFFFF;
`;

export const TestimonialArea = styled.View`
  margin-top: 30px;
  margin-bottom: 50px;
`;
export const TestimonialItem = styled.View`
  background-color: #268596;
  padding: 15px;
  border-radius: 10px;
  height: 110px;
  justify-content: center;
  margin-left: 40px;
  margin-right: 40px;
`; 
export const TestimonialInfo = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
`;
export const TestimonialName = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #FFFFFF;
`;
export const TestimonialBody = styled.Text`
  font-size: 13px;
  font-weight: regular;
  color: #FFFFFF;
`;
export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  top: 50px;
  z-index: 9;
`;
export const LoadingIcon = styled.ActivityIndicator`
margin-top: 50px;
`;


    