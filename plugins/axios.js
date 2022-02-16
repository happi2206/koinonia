
export default function ({ app, $axios, redirect }) {
    // set token
    $axios.setToken(localStorage.getItem('KOINONIA-TOKEN'), 'Bearer')
    // catch error
    $axios.onError(error => {
        return Promise.reject(error.response);
    })
}