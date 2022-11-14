import { access_token } from "../consts";
import { Cultivation } from "../types";
import api from "./api";

export async function getCultivations(): Promise<Cultivation[] | undefined> {
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