
export function withExtraPropAdded(component) {
    const Component = component
    
    return function(props) {
        return (
            <Component another="Blah blah blah" name="Hamza Khan" age="22" address="Uttara,Dhaka,Bangladesh" {...props} />
        )
    }
    
}