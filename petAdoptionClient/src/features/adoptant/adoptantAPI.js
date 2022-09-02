import axios from "axios";
import { requests } from "../requests";


export function getallAdoptant() {

    return axios.get(requests.adoptantapi + '/getAlluser')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }
export function getallAdoptantbyRole() {

    return axios.get(requests.adoptantapi + '/getuserbyrole')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }
export function deleteAdoptant(id) {

    return axios.delete(requests.adoptantapi + '/deleteuser/'+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }


