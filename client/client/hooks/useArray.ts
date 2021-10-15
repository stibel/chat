import { useState } from "react"
export const useArray = (initialState: Array<any>) => {
    const [array, setArray] = useState(initialState);

    const push = (elem: any): void => {
        setArray(a => [...a, elem]);
    }

    const remove = (id: number): void => {
        setArray(a => [...a.filter(elem => elem.id !== id)]);
    }

    return { array, push, remove };
}