import {QueryResult} from "@apollo/client/react/types/types";
import React, {PropsWithChildren, useContext, useEffect} from "react";
import {LoaderContext} from "../../context/loader";

type LoaderProps = PropsWithChildren<Partial<QueryResult>>;

const LoaderHandler = ({children, loading, error}: LoaderProps): JSX.Element => {
    const {push, pop} = useContext(LoaderContext);

    useEffect(() => {
        if (loading) {
            push();
        } else {
            pop();
        }
    }, [push, pop, loading]);

    if (error) return (<><h2>Error</h2><p>{error.message}</p></>);
    return <>{children}</>;
}

export default LoaderHandler;
