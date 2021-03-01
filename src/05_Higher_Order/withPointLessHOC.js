
export function withPointlessHOC(component) {
    
    const Component = component
    
    return function(props) {
        return (
            <Component {...props} />
        )
    }

}