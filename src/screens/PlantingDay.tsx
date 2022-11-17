import { useRoute } from "@react-navigation/native";
import React, { useEffect, useMemo, useState } from "react";
import { FlatList, View, Text, SafeAreaView, StyleSheet } from "react-native";
import Selector from "../components/Selector";
import { colors } from "../consts";
import {
  getPlantingDays,
  PlantingDayItem,
} from "../services/getPlantingDays";
interface RouteParams {
  cultivationId: number;
  cultivationName: string;
}

export default function PlantingDay() {
  const route = useRoute();
  const params = route.params as RouteParams;
  const [plantingDays, setPlantingDays] = useState<PlantingDayItem[]>([]);
  const [activeSelector, setActiveSlector] = useState('Grupo I')

  async function loadPlatingDay() {
    const response = await getPlantingDays(params?.cultivationId);
    setPlantingDays(response as any);
  }

  useEffect(() => {
    loadPlatingDay();
  }, []);

  const filteredDays = useMemo(()=>{
    return plantingDays?.filter(item => item.ciclo.toLowerCase() === activeSelector.toLowerCase())
  }, [activeSelector, plantingDays])

  function renderItem({ item }: { item: PlantingDayItem }) {
    return (
      <View
        style={styles.item}
      >
        <View style={styles.itemHeader}>
        <Text style={styles.itemTitle}>Solo: {item.solo}</Text>
        </View>
        <Text style={styles.text}>Data início: {item.dataInicio}</Text>
        <Text style={styles.text}>Data fim: {item.dataFim}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.background,
        flex: 1,
      }}
    >
      <Text
        style={{
          alignSelf: "center",
          color: colors.text,
          fontSize: 18,
        }}
      >
        {params?.cultivationName}
      </Text>
      <View style={styles.selectors}>
        <Selector text="Grupo I" onPress={() => setActiveSlector('Grupo I')} active={activeSelector === 'Grupo I'}/>
        <Selector text="Grupo II" onPress={() => setActiveSlector('Grupo II')} active={activeSelector ===  'Grupo II'}/>
        <Selector text="Grupo III" onPress={() => setActiveSlector('Grupo III')} active={activeSelector === 'Grupo III'}/>
      </View>
      <FlatList
        data={filteredDays}
        renderItem={renderItem}
        contentContainerStyle={{
          padding: 16,
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    color: colors.text,
    marginBottom: 8
  },
  item: {
    backgroundColor: colors.shape,
    marginBottom: 12,
    padding: 12,
    borderRadius: 8,
  },
  itemTitle: {
    color: colors.text,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  itemHeader: {
    width: '100%',
    alignItems: 'center'
  },
  selectors: {
    flexDirection: 'row',
    paddingHorizontal: 16, 
    marginVertical: 16
  }
});
