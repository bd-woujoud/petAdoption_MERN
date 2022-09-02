import axios from "axios";
import { requests } from "../requests";


export function getall() {

    return axios.get(requests.symptomeapi + '/getAll')

        .then(res => {

            return res

        })

        .catch(err => {

            return err
        })


    }


export function getmaladie(data) {

   return axios.post('http://localhost:4000/maladie/getBySymptomes',data)
   .then(res => {
    return res
})
.catch(err => {
    return err
})


    }