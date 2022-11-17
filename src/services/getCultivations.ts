import { access_token } from "../consts";
import { Cultivation } from "../types";
import api from "./api";

type GetCultivationsResponse = {
    data: Cultivation[]
}

export async function getCultivations(): Promise<GetCultivationsResponse[] | undefined> {
    try {
        const response = await api.get('/culturas', {
            headers: {
                Authorization: `Bearer ${access_token}`
            }
        });
        return response.data
    } catch (error) {
        
    }
}