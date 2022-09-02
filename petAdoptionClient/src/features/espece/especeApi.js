
import axios from "axios";

import { requests } from "../requests";

export function getallespece() {

    return axios.get(requests.especeapi + '/getAllespece')

        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }
export function createEspece(data) {

    return axios.post(requests.especeapi + '/addespece',data)

        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }
export function deleteEspece(id) {

    return axios.delete(requests.especeapi + '/deleteespece/'+id)

        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }
export function updateEspece(data) {

    return axios.put(requests.especeapi + '/updateespece/'+data.id,data)

        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }


