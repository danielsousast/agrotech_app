import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { getCultivations } from '../services/getCultivations';
import { Cultivation } from '../types';

// import { Container } from './styles';

export default function CultivationsScreen(){
    const navigation = useNavigation()
    const [cultivations, setCultivations] = useState<Cultivation[]>()

    async function loadCultivations () {
       const response = await getCultivations();
       //@ts-ignore
        setCultivations(response?.data)
    }

    useEffect(() => {
        loadCultivations()
        console.log(typeof cultivations)
    }, [])

    function handlePress(item: Cultivation) {
        //@ts-ignore
        navigation.navigate('PlantingDay', {
            cultivationId: item.id,
            cultivationName: item.cultura
        })
    }

    function renderItem({item}: any){
        return (
            <TouchableOpacity style={{
                paddingVertical: 16,
                paddingHorizontal: 12,
                backgroundColor: '#2B2A38',
                borderRadius: 12,
                marginBottom: 8
            }} onPress={() => handlePress(item)}>
                <Text style={{
                    color: '#fff'
                }}>{item.cultura}</Text>
            </TouchableOpacity>
        )
    }

  return (
    <SafeAreaView style={{
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 16,
        backgroundColor: '#1D1D28'
    }}>
        <FlatList 
            data={cultivations}
            renderItem={renderItem}
            contentContainerStyle={{
                padding: 16
            }}
        />
    </SafeAreaView>
  );
}
