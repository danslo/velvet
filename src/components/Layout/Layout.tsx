import Navbar from "../Navbar/Navbar";
import {Fragment} from "react";

export function withLayout<P>(WrappedComponent: React.ComponentType<P>) {
    return (props: P) => {
        return (
            <Fragment>
                <Navbar />
                <WrappedComponent {...props} />
            </Fragment>
        );
    }
}
