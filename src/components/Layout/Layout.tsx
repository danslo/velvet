import Navbar from "../Navbar/Navbar";
import {Container} from "@mui/material";

export function withLayout<P>(WrappedComponent: React.ComponentType<P>) {
    return (props: P) => {
        return (
            <>
                <Navbar/>
                <Container maxWidth={false} sx={{py: 3}}>
                    <WrappedComponent {...props} />
                </Container>
            </>
        );
    }
}
