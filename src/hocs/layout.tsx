import Navbar from "../components/Navbar/Navbar";
import {Container} from "@mui/material";
import Footer from "../components/Footer/Footer";
import React from "react";
import ProgressBar from "../components/ProgressBar/ProgressBar";

export function withLayout<P>(WrappedComponent: React.ComponentType<P>) {
    return (props: P) => (
        <>
            <Navbar/>
            <ProgressBar/>
            <Container maxWidth={false} sx={{p: 3}} disableGutters>
                <WrappedComponent {...props} />
            </Container>
            <Footer/>
        </>
    );
}
