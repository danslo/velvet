import Navbar from "../components/Navbar/Navbar";
import {Container} from "@mui/material";
import Footer from "../components/Footer/Footer";
import React from "react";

export function withLayout<P>(WrappedComponent: React.ComponentType<P>) {
    return (props: P) => (
        <>
            <Navbar/>
            <Container maxWidth={false} sx={{py: 3}}>
                <WrappedComponent {...props} />
            </Container>
            <Footer/>
        </>
    );
}
