import {createContext, FunctionComponent, useState} from "react";

export const LoaderContext = createContext<{
    pop: () => void
    push: () => void,
    loading: boolean
}>({
    pop: () => undefined,
    push: () => undefined,
    loading: false
});

export const LoaderProvider: FunctionComponent = ({children}) => {
    const [loaders, setLoaders] = useState<Array<boolean>>([]);
    return (
        <LoaderContext.Provider value={{
            pop: () => {
                if (loaders.length) {
                    setLoaders(loaders.slice(1));
                }
            },
            push: () => {
                setLoaders(loaders.concat(true));
            },
            loading: loaders.length > 0
        }}>
            {children}
        </LoaderContext.Provider>
    );
}
