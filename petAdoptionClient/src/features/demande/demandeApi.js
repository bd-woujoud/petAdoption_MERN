
import axios from "axios";

import { requests } from "../requests";

export function createdemande(data) {

    return axios.post(requests.demandeapi + '/createdemande')

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )

    }

export function getdemande() {

    return axios.get('http://localhost:4000/demande/getAlldemande')

    .then(res => {
        return res
    }
    )
    .catch(err => {
        return err
    }
    )

    }



    
