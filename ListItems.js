const ListItems = props => {
    let items = props.items.filter(item => item.category === props.select)
    items = items.map(item => (
        <Item 
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            active={item.active}
            addToCart={props.addToCart}
            quantity={props.quantity}
        />
    ))
    return (
        <div className="list">
            {/* <h1>Twoje zamówienie</h1> */}
            
                {items}
            
        </div>
    )
}