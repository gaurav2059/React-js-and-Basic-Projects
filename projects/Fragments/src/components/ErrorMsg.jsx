const ErrorMessage = ({items}) => {
    // let foodItems = ["dal", "bhaat", "salad", "fruits", "water"];
    return (
        <>  {items.length === 0 && <h1>I'm Still Hungry</h1>}

        </>
    )
}
export default ErrorMessage;