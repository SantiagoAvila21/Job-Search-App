import axios from 'axios'

const url = "https://backendnodejstzuzulcode.uw.r.appspot.com";

const instance = axios.create({
    baseURL: url
})

const post = (url, data) => {
    return instance.post(url,data);
}

const postWithToken = async (url,data) => {
    const token = localStorage.getItem("token");
    if(token){
        return await instance.post(url,data, {
            headers: {
                'Authorization': "Bearer " + token
            }
        })
    }
    return {
        data: {
            failed: true,
            message: "No token existance"
        }
    };
}

const putWithToken = async (url,data) => {
    const token = localStorage.getItem("token");
    if(token){
        return await instance.put(url,data, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
    }
    return{
        data:{
            failed: true,
            message: "No token existance",
        }
    }
}

const getWithToken = async (url,data) => {
    const token = localStorage.getItem("token");
    if(token){
        if(data){
            return await instance.get(url,data,{
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }
        else {
            return await instance.get(url,{
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
        }
    }
    return {
        data:{
            failed: true,
            message: "No token existance"
        }
    }
}

export default instance;

export {post, postWithToken, putWithToken, getWithToken}