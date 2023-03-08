import {ref} from 'vue'

export function useFetch(url){
    const data = ref(null)
    console.log('data',data) // {value: nulls}
    const error = ref(null)

    fetch(url).then((res) => res.json()).then(res => data.value = res).catch(err => error.value = err)

    return {data, error}
}