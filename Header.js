const Header = props => {

    const activeItems = props.items.filter(item => item.active === true)
    const number = activeItems.length
    const numberProducts = props.numberProducts

    return (
        <header>
            <h1>Twoje zamówienie:</h1>
            <h2>Ilość produktów: {numberProducts}</h2>
            <h2>Do zapłaty: {number ? ` ${props.toPay} złotych` : "Koszyk jest pusty" } </h2>
        </header>
    )
}