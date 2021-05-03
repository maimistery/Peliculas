
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Ionicons';
import { MovieDetail } from '../components/MovieDetail';
import { useMovieDetails } from '../hooks/useMovieDetail';
import { Navigation, RootStackParams } from '../navigation/Navigation';

const screenHeight= Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams,'DetailScreen'>{};


export const DetailScreen = ({route,navigation}:Props) => {
    const movie=route.params;
    const uri = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;
      
    const{isLoading,cast,movieFull }=useMovieDetails(movie.id);
    return (
        <ScrollView>

            <View style={styles.imageContainer}>
                <Image
                    source={{uri}}
                    style={ styles.posterImage}
                />
            </View>
            <View style={styles.marginContainer}>
                <Text style={styles.title}>{movie.original_title}</Text>
                <Text style={styles.subtitle}>{movie.title}</Text>
            </View>
            {
                isLoading ?<ActivityIndicator  size={30} color="grey" style={{marginTop:20}}/> :
                <MovieDetail movieFull={movieFull !} cast={cast}/>
            }
            {/*boton para atras*/}
            <View style={styles.backBoton}>
                <TouchableOpacity  
                onPress={()=>navigation.pop()}>
                    <Icon name="arrow-back-outline" color="white" size={50}
                />
                </TouchableOpacity>
            </View>
          
           
           
    
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imageContainer:{
        width:'100%',
        height: screenHeight * 0.9
    },
    posterImage:{
        flex:1,
        borderRadius:18
        
    },
    marginContainer:{
        marginHorizontal:20,
        marginTop:20
    },
    subtitle:{
        fontSize:18
    },
    title:{
        fontSize:18,
        fontWeight:'bold'
    },
    backBoton:{
        position:'absolute',
        elevation:9,
        top:30,
        left:5
    }
})