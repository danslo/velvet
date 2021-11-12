import {QueryResult} from "@apollo/client/react/types/types";
import React, {Fragment, PropsWithChildren} from "react";
import {CircularProgress} from "@mui/material";

type LoaderProps = PropsWithChildren<Partial<QueryResult>>;

const Loader = ({children, data, loading, error}: LoaderProps): JSX.Element|null => {
    if (error) {
        return (
            <>
                <h2>Error</h2>
                <p>{error.message}</p>
            </>
        );
    }

    if (loading) {
        return <CircularProgress />
    }

    if (!data) return null;
    return <>{children}</>;
}

export default Loader;
