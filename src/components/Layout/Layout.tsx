import {CssBaseline} from "@mui/material";
import Navbar from "../Navbar/Navbar";

export function withLayout<P>(WrappedComponent: React.ComponentType<P>) {
    return (props: P) => {
        return (
            <>
                <CssBaseline />
                <Navbar />
                <WrappedComponent {...props} />
            </>
        );
    }
}
