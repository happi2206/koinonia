
export default function ({ store, $axios, redirect }) {
    // set token
    $axios.setToken(localStorage.getItem('KOINONIA-TOKEN'), 'Bearer')
    // catch error
    $axios.onError(error => {
        console.log(error)
        if (error.response.status === 401) {
            store.commit('auth/SIGN_OUT');
            redirect('/login')
        }
        return Promise.reject(error.response);
    })
}