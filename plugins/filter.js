import Vue from 'vue'
import {
    DateTime
} from "luxon";

Vue.filter('AssetName', (value) => {
    if (!value) return ''
    value = value.toString()
    if (value.length > 30) {
        return value.slice(0, 30) + '...'
    } else {
        return value
    }
})
Vue.filter('TextFilter', (value) => {
    if (!value) return ''
    value = value.toString()
    if (value.length > 200) {
        return value.slice(0, 200) + '...'
    } else {
        return value
    }
})
Vue.filter('shortTextFilter', (value) => {
    if (!value) return ''
    value = value.toString()
    if (value.length > 200) {
        return value.slice(0, 200) + '...'
    } else {
        return value
    }
})
Vue.filter('AssetFormat', (value) => {
    if (!value) return ''
    let array = value.split('.');
    return array[array.length - 1].toString().toUpperCase();
})
Vue.filter('AssetSize', (value) => {
    if (!value) return ''
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (value == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(value) / Math.log(1024)));
    return Math.round(value / Math.pow(1024, i), 2) + ' ' + sizes[i];
})
Vue.filter('DateFormat', (value) => {
    if (!value) return ''
    const date = DateTime.fromISO(value)
    return date.toLocaleString(DateTime.DATE_MED);
})

Vue.filter('DateTimeFormat', (value) => {
    if (!value) return ''
    const date = DateTime.fromISO(value)
    return date.toLocaleString(DateTime.DATETIME_MED);
})
Vue.filter('LinkCode', (value) => {
    if (!value) return ''
    return `KMOS - ${value}`;
})
