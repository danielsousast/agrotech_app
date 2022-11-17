import { access_token } from "../consts";
import { PlantingDayResponseItem } from "../types";
import api from "./api";

export type PlantingDayItem = {
    cultura: string;
    ciclo: string;
    risco: number;
    solo: string;
    dataInicio: string;
    dataFim: string;
}

export async function getPlantingDays(cultivationId: number){
    try {
        const response = await api.get(`/zoneamento?idCultura=${cultivationId}&codigoIBGE=${5208004}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        return parseResponse(response.data)
    } catch (error) {
        console.log(error)
    }
}

function parseResponse({data}: {data: PlantingDayResponseItem[]}):PlantingDayItem[]{
    return data?.map(item => ({
        cultura: item.cultura,
        ciclo: item.ciclo,
        risco: item.risco,
        solo: item.solo,
        dataInicio: `${item.diaIni}/${item.mesIni}`,
        dataFim: `${item.diaFim}/${item.mesFim}`
    }))
}