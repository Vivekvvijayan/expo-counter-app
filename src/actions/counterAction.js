export const incrementCounter = (count) => {
    return {
        type: 'INCREMENT',
        payload: count
    }
}

export const decrementCounter = (count) => {
    return {
        type: 'DECREMENT',
        payload: count
    }
}