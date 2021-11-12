import {QueryResult} from "@apollo/client/react/types/types";
import React, {PropsWithChildren} from "react";
import {CircularProgress} from "@mui/material";

type LoaderProps = PropsWithChildren<Partial<QueryResult>>;

const LoaderHandler = ({children, loading, error}: LoaderProps): JSX.Element|null => {
    if (error) return (<><h2>Error</h2><p>{error.message}</p></>);
    if (loading) return <CircularProgress />
    return <>{children}</>;
}

export default LoaderHandler;
