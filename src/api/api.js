import axios from "axios";

export const getCallsData = async (date_start, date_end, in_out) => {
        return await axios.post(`https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}&limit=5000`,
        { date_start, date_end},
        { headers: { 'Authorization': 'Bearer testtoken' } }
    )
}

