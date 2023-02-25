import axios from "axios";

export const getCalls = async (date_start = '2023-02-24', date_end = '2023-02-25', in_out = '') => {

    return await axios.post(`https://api.skilla.ru/mango/getList`, {date_start, date_end, in_out}, 
        {headers: {'Authorization': 'Bearer testtoken'}}
    )
        .then(function (response) {
            console.log(response.data)
            return response.data.results
    })
        .catch(function (error) {
            console.log(error);
        })
}

