import axios from 'axios'

export const Getzone =async()=>{
    const responce= await axios.get("https://timeapi.io/api/timezone/availabletimezones");
    return responce.data
}