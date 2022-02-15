
export default function ({ $axios, redirect }) {
    $axios.onError(error => {
        return Promise.reject(error.response);
    })
}