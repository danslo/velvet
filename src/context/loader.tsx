import {createContext, FunctionComponent, useState} from "react";

export const LoaderContext = createContext<{
    pop: () => void
    push: () => void,
    clear: () => void,
    loading: boolean
}>({
    pop: () => undefined,
    push: () => undefined,
    clear: () => undefined,
    loading: false
});

export const LoaderProvider: FunctionComponent = ({children}) => {
    const [loaders, setLoaders] = useState<Array<boolean>>([]);

    return (
        <LoaderContext.Provider value={{
            clear: () => {
                setLoaders([]);
            },
            pop: () => {
                if (loaders.length) {
                    setLoaders(loaders.slice(1));
                }
            },
            push: () => {
                setLoaders((prevState => ([...prevState, true])));
            },
            loading: loaders.length > 0
        }}>
            {children}
        </LoaderContext.Provider>
    );
}
