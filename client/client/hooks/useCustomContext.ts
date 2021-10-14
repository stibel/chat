import { Context, useContext } from "react";

const useCustomContext = (context: Context<any>) => {

    const ctx = useContext(context);

    if (!ctx)
        throw new Error('No context provided!');

    return ctx;
}

export default useCustomContext;