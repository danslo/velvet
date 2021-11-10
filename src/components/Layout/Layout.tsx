export function withLayout<P>(WrappedComponent: React.ComponentType<P>) {
    return (props: P) => {
        return (
            <>
                <h1>Velvet</h1>
                <WrappedComponent {...props} />
            </>
        );
    }
}
