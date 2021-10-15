import { Context, useContext } from "react";

const useCustomContext = <T> (context: Context<any>) => {

    const ctx = useContext<T>(context);

    if (!ctx)
        throw new Error('No context provided!');

    return ctx;
}

export default useCustomContext;