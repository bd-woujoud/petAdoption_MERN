
import axios from "axios";
import { requests } from "../requests";


export function getallPost() {

    return axios.get(requests.postapi + '/getAllpost')
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })


    }

export function createPost(data) {

    return axios.post(requests.postapi + '/addpost',data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err.response
        })


    }

// export function getById(id) {
//     return axios.get(requests.postapi + '/getonepost/'+id)
//         .then(res => {
//             return res
//         })
//         .catch(err => {
//             return err
//         })

//     }

export function getByuser(id) {

    return axios.get("http://localhost:4000/post/allbyuser/"+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

    }

export function deleteById(id) {
    return axios.delete(requests.postapi + '/deletepost/'+id)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

    }

export function updateById(data) {
    return axios.put("http://localhost:4000/post/updatepost/"+data.id,data)
        .then(res => {
            return res
        })
        .catch(err => {
            return err
        })

    }

export function  search(data) {
    
        return axios.get(`http://localhost:4000/post/search?keyword=${data.keyword}`)
            .then(res => {
                return res
            }
            )
            .catch(err => {
                return err
            }
            )

}