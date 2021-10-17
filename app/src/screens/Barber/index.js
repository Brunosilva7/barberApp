
import React, { useEffect, useState } from 'react';
import { Text} from 'react-native';
// to get all informations that we`ve received when the user arrive here.
import {useNavigation, useRoute} from '@react-navigation/native';
import Swiper from 'react-native-swiper';

import Stars from '../../components/Stars';
import BarberModal from '../../components/BarberModal';

import FavoriteIcon from '../../assets/favorite.svg';
import FavoriteFullIcon from '../../assets/favorite_full.svg'; 

import BackIcon from '../../assets/back.svg';
import NavPrevIcon from '../../assets/nav_prev.svg';
import NavNextIcon from '../../assets/nav_next.svg';



import { 
    Container,
    Scroller,
    FakeSwiper,
    PageBody,
    UserInfoArea,
    ServiceArea,
    SwipeDot,
    SwipeActiveDot, 
    SwipeItem,
    SwipeImage,
    UserAvatar,
    UserInfo,
    UserInfoName,
    UserFavButton,
    BackButton,
    LoadingIcon,
    ServicesTitle,
    ServiceItem,
    ServiceInfo,
    ServiceName,
    ServicePrice,
    ServiceChooseButton,
    ServiceChooseBtnText,
    TestimonialArea ,
    TestimonialItem ,
    TestimonialInfo,
    TestimonialName,
    TestimonialBody
} from './styles';

import Api from '../../Api';

export default () => {
    const navigation = useNavigation();
    const route = useRoute();

    const [userInfo, setUserInfo] = useState({
        id: route.params.id,
        avatar: route.params.avatar,
        name: route.params.name,
        stars: route.params.stars,
        testimonials: route.testimonials
    });
    /* STATES*/

    // Adding the loading icon.
    const [loading, setLoading] = useState(false);
    // changing the favorite icon color when click on it.
    const [favorited, setFavorited] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(()=>{
        // getting haircutters informations when we click on their profile.
        const getBarberInfo = async ()=>{

            setLoading(true);

            let json = await Api.getBarber(userInfo.id);
            if(json.error == ''){
                setUserInfo(json.data);

                // Veriying if user either have favorited or not the haircutter. 
                setFavorited(json.data.favorited);
                
            } else{
                alert("Erro: "+json.error);
            }
            setLoading(false);
        }
        getBarberInfo();
    },[]);
    // coming back when we click on the backIcon.
    const handleBackButton = () => {
        navigation.goBack();
    } 

    const handleFavClick = () => {
        // changing the fav icon color
        setFavorited(!favorited);
        Api.setFavorite( userInfo.id);
    }
    // Key here means the service id the user is requesting
    const handleServiceChoose = (key) =>{
        setSelectedService(key);
        setShowModal(true);
    }

    return (
        <Container>
            {/* Verifying if there are any photos on the profile */}
            <Scroller>
                {userInfo.photos && userInfo.photos.length > 0 ?
                <Swiper
                    style={{height: 240}}
                    dot={<SwipeDot />}
                    activeDot={<SwipeActiveDot />}
                    paginationStyle = {{top: 15, right: 15, bottom: null, left: null}}
                    autoplay = {true}
                >
                    {userInfo.photos.map((item, key)=>(
                        <SwipeItem key={key}>
                            {/* Whatever the size of the photo, it`ll aways be on the center. */}
                            <SwipeImage source={{uri:item.url}} resizeMode="cover" />

                        </SwipeItem>
                    ))}
                </Swiper>
                :
                <FakeSwiper>

                </FakeSwiper>    
        }
        <PageBody>
            {/* Haircutter info */}
            <UserInfoArea>
                <UserAvatar source={{uri:userInfo.avatar}}/>
                <UserInfo>
                    <UserInfoName>{userInfo.name}</UserInfoName>
                    <Stars stars= {userInfo.stars} showNumber/>
                </UserInfo>
                {/* Favorite button */}
                <UserFavButton onPress={handleFavClick}>
                    {favorited ?
                    <FavoriteFullIcon width="24" height="24" fill="#FF0000"/>
                        :
                    <FavoriteIcon width="24" height="24" fill="#FF0000"/>

                    }
                </UserFavButton>
            </UserInfoArea>

            {/* If the page doesn`t load, it`ll show the loading icon. */}
            {loading &&
                <LoadingIcon size="large" color="000000" />
            }


            {/* Works schredule */}
            {userInfo.services &&
            <ServiceArea>
                <ServicesTitle>Services</ServicesTitle>
                
                {userInfo.services.map((item, key)=>(
                    <ServiceItem key={key}>
                        <ServiceInfo>
                            <ServiceName>{item.name}</ServiceName>
                            <ServicePrice>$ {item.price.toFixed(2)}</ServicePrice>
                        </ServiceInfo>

                        {/* Button to schedule */}
                        {/* Checking inside the map() what type of service the user choose. */}
                        <ServiceChooseButton onPress={()=>handleServiceChoose(key)}>
                            <ServiceChooseBtnText>Schedule</ServiceChooseBtnText>
                        </ServiceChooseButton>
                    </ServiceItem>

                   
                    ))}
                </ServiceArea>
            }
            {/* Feedback area */}
            {userInfo.testimonials && userInfo.testimonials.lenght > 0 &&
                       <TestimonialArea>
                           <Swiper
                            style={{height: 110}}
                            showsPagination ={false}
                            showsButtons ={true}
                            prevButton ={<NavPrevIcon width="35" height="35" fill="#000000" />}
                            nextButton ={<NavNextIcon width="35" height="35" fill="#000000" />}
                           >

                        {userInfo.testimonials.map((item, key)=>(
                            <TestimonialItem key={key}>
                                <TestimonialInfo>
                                    <TestimonialName>{item.name}</TestimonialName>
                                    <Stars stars={item.rate} showNumber={false}/>
                                </TestimonialInfo>
                                {/* content of it */}
                                <TestimonialBody>
                                    {item.body}
                                </TestimonialBody>
                            
                            </TestimonialItem>
                        ))}
            
                           </Swiper>
                       </TestimonialArea>
            }
        
     
        </PageBody>
        
        </Scroller>
        {/* Button to come back for haircutters options */}
        <BackButton onPress={handleBackButton}>
            <BackIcon width="40" height="40" fill="#FFFFFF" />
        </BackButton>

            {/* Modal page */}
            <BarberModal 
                show={showModal}
                setShow={setShowModal}
                user={userInfo}
                service={selectedService}
            
            
            />

        </Container>
    );
}