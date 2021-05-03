import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Result } from '../interfaces/movieInterface'


interface Props{
    movie: Result;
    height?:number,
    width?:number
}


export const MoviePoster = ({movie,height=420,width=300}:Props) => {

    const uri = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            onPress={()=>navigation.navigate('DetailScreen',movie)}
            activeOpacity={0.8}
            style={{
            width,
            height,
            marginHorizontal:2,
            paddingBottom:20,
            paddingHorizontal:5
            }}
        >
            <View style={styles.imageContainer}>
                <Image
                    source={{uri:uri}}
                    style={ styles.image}
                ></Image>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    image:{
        flex:1,
        borderRadius:18
        
    },
    imageContainer:{
        flex:1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.24,
        shadowRadius: 3.84,

        elevation: 10,
    }

})