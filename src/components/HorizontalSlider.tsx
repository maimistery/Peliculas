import React from 'react'
import { Result } from '../interfaces/movieInterface'
import { FlatList, Text, View } from 'react-native'
import { MoviePoster } from './MoviePoster'
interface Props{
    title?:String,
    movies:Result[]
}

export const HorizontalSlider = ({title, movies}:Props) => {
    return (
        <View style={{
            height:(title)?230:205
        }}>
            {
            title && <Text style={{fontSize:30,fontWeight:'bold', marginLeft:10}}>{title}</Text>
            }
            <FlatList 
            data={movies}
            renderItem={({ item }: any) =>(
                <MoviePoster movie={ item }  width={140} height={150}/>
            )}
            keyExtractor={(item)=>item.id.toString() }
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}
