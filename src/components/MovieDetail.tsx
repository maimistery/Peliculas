import React from 'react'
import { FlatList, Text, View } from 'react-native'
import currencyFormatter from 'currency-formatter';
import  Icon  from 'react-native-vector-icons/Ionicons'
import { Cast } from '../interfaces/creditsInterface'
import { MovieFull } from '../interfaces/movieInterface'
import { CastItem } from './CastItem';


interface Props{
    movieFull: MovieFull,
    cast :Cast[]
}

export const MovieDetail = ({movieFull,cast}:Props) => {
    return (
        <>
            {/*Deatlles */}
            <View style={{marginHorizontal:20}}>
                <View style={{flexDirection:'row'}}>
                    <Icon  
                    name="star-outline"
                    color="grey"
                    size={16}/>
                    <Text>{movieFull.vote_average}</Text>
                    <Text style={{marginLeft:5}}>
                        - {movieFull.genres.map(g=>g.name).join(',')}
                    </Text>
                </View>
                <Text style={{fontSize:23,marginTop:10,fontWeight:'bold'}}>
                      Sinopsi
                </Text>
                <Text style={{fontSize:16}}>
                      {movieFull.overview}
                </Text>
                <Text style={{fontSize:18,marginTop:10,fontWeight:'bold'}}>
                      Presupuesto
                </Text>
                <Text style={{fontSize:16}}>
                     {currencyFormatter.format(movieFull.budget,{code:'USD'})} 
                </Text>
            </View>
            {/*Casting */}
            <View style={{marginTop:10,marginHorizontal:20}}>
                <Text style={{fontSize:18,marginTop:10,fontWeight:'bold'}}>
                    Reparto
                </Text>

                <FlatList 
                 data={cast}
                    renderItem={({ item }: any) =>(
                    <CastItem actor={item} />
                )}
                keyExtractor={(item)=>item.id.toString() }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{marginTop:10}}
            />
               {/**<CastItem actor={cast[0]}/> */} 
            </View>
        </>
    )
}
