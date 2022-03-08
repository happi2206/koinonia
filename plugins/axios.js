
export default function ({ store, $axios, redirect }) {

<<<<<<< HEAD

=======
>>>>>>> 060a32035c6573e9a0ba19cf28aecb1b2cb12141
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