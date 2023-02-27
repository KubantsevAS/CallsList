import axios from "axios";

export const getCallsData = async (date_start = '2023-01-11', date_end = '2023-01-13', in_out) => {

    await axios.post(`https://api.skilla.ru/mango/getList?date_start=${date_start}&date_end=${date_end}&limit=10`, 
        {date_start, date_end, in_out}, 
        {headers: {'Authorization': 'Bearer testtoken'}}
    )
        .then(function (response) {
            console.log(response.data.results)
            return response.data.results
    })
        .catch(function (error) {
            console.log(error);
        })
}

