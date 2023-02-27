import axios from "axios";

export const getCallsData = async (date_start = '2023-02-22', date_end = '2023-02-24') => {
        return await axios.post(`https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}&limit=1000`,
        { date_start, date_end},
        { headers: { 'Authorization': 'Bearer testtoken' } }
    )
}

