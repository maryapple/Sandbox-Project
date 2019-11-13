// action creators
// они могут быть несчитыми функциями
export const inc = () => ({ type: 'INC' })
export const dec = () => ({ type: 'DEC' })
export const rnd = () => {
    return { 
        type: 'RND', 
        payload: Math.floor(Math.random() * 10)
    }
}