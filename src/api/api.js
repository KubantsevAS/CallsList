import axios from "axios";

export const getCallsData = async (date_start = '2023-02-20', date_end = '2023-02-21') => {
        return await axios.post(`https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}&limit=10`,
        { date_start, date_end},
        { headers: { 'Authorization': 'Bearer testtoken' } }
    )
}

