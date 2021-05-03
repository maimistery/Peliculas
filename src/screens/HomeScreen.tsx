
import React from 'react'
import {ActivityIndicator, Dimensions, Text, View } from 'react-native'
import {  ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Carousel from 'react-native-snap-carousel';
import { HorizontalSlider } from '../components/HorizontalSlider';

import { MoviePoster } from '../components/MoviePoster'
import { useMovies } from '../hooks/useMovies'


const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {

    const { nowPlaying,popular,topRate,upComing ,isLoading} = useMovies();

    const {top} = useSafeAreaInsets();
 //   const navigation = useNavigation();
if(isLoading){
    return(
        <View style={{
            flex:1,
            justifyContent:'center',
            alignContent:'center'
        }}>
            <ActivityIndicator color='red' size={100}/>
        </View>
    )
}
    //console.log(peliculasEnCine[0]?.title)
    return (
        <ScrollView>
            <View style={{marginTop: top+20}}>
        
                {/* Carosel Principal */}
                <View style={{ height: 440 }}>
                    <Carousel 
                        data={ nowPlaying  }
                        renderItem={ ({ item }: any) => <MoviePoster movie={ item } /> }
                        sliderWidth={ windowWidth }
                        itemWidth={ 300 }
                        inactiveSlideOpacity={0.9}
                    />
                </View>
                {/* Peliculas Principal */}
                <HorizontalSlider title='En cine' movies={topRate} />
                <HorizontalSlider title='Cine popular' movies={popular}/>
                <HorizontalSlider title='upComing' movies={upComing}/>
            </View>
        </ScrollView>
    )
}
