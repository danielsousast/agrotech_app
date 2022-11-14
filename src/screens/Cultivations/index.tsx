import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { getCultivations } from '../../services/getCultivations';
import { Cultivation } from '../../types';

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
            cultivationId: item.id
        })
    }

  return (
    <SafeAreaView style={{
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 16,
        backgroundColor: '#f4f4f4'
    }}>
        <FlatList 
            data={cultivations}
            renderItem={({item}) => (
                <TouchableOpacity style={{
                    paddingVertical: 16,
                    paddingHorizontal: 12,
                    backgroundColor: '#fff',
                    borderRadius: 12,
                    marginBottom: 8
                }} onPress={() => handlePress(item)}>
                    <Text>{item.cultura}</Text>
                </TouchableOpacity>
            )}
        />
    </SafeAreaView>
  );
}
