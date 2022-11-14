import { access_token } from "../consts";
import api from "./api";

export async function getPlantingDays(cultivationId: number){
    try {
        const response = await api.get(`/zoneamento?idCultura=${cultivationId}&codigoIBGE=${5208004}`, {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        return response.data
    } catch (error) {
        
    }
}