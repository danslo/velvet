import Navbar from "../Navbar/Navbar";

export function withLayout<P>(WrappedComponent: React.ComponentType<P>) {
    return (props: P) => {
        return (
            <>
                <Navbar />
                <WrappedComponent {...props} />
            </>
        );
    }
}
