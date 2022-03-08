
export default function ({ store, $axios, redirect }) {

    $axios.onRequest(config => {
        // set token
        $axios.setToken(localStorage.getItem('KOINONIA-TOKEN'), 'Bearer')
    })


    // catch error
    $axios.onError(error => {
        if (error.response.status === 401) {
            store.commit('auth/SIGN_OUT');
            redirect('/login')
        }
        return Promise.reject(error.response);
    })
}