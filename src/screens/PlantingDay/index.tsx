import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, View, Text } from "react-native";
import { getPlantingDays } from "../../services/getPlantingDays";

// import { Container } from './styles';

interface RouteParams {
  cultivationId: number;
}

export default function PlantingDay() {
  const route = useRoute();
  const params = route.params as RouteParams;
  const [plantingDays, setPlantingDays] = useState([]);

  async function loadPlatingDay() {
    const response = await getPlantingDays(params?.cultivationId);
    setPlantingDays(response.data)
  }

  useEffect(() => {
    loadPlatingDay();
  }, []);

  function renderItem({item}: any){
    return <View style={{
      flex: 1
    }}>
      <Text>Item</Text>
    </View>
  }

  return <View>
    <FlatList 
    data={plantingDays}
    renderItem={renderItem}
    />

  </View>;
}
