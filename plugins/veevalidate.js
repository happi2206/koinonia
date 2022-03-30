import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { required, email, confirmed, alpha_spaces, digits, numeric } from 'vee-validate/dist/rules'
extend('required', {
    ...required,
    message: 'This field is required',
})
extend('email', {
    ...email,
    message: 'This email field is not an email format',
})
extend('confirmed', {
    ...confirmed,
})
extend('alpha_spaces', {
    ...alpha_spaces,
    message: 'must be alphabetic',
})
extend('digits', {
    ...digits,
    message: 'Number must be 11 digits',
})
extend('numeric', {
    ...numeric,
    message: 'Must be a number',
})
extend('phone', {
    ...digits,
    message: 'Enter a valid phone number',
})
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)