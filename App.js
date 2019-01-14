class App extends React.Component {
    state = { 
        items: [
            {id: 1, name: "Magherita", category: "pizza", price: 11, active: false },
            {id: 2, name: "Pepperoni", category: "pizza", price: 15, active: false },
            {id: 3, name: "Kebab", category: "pizza", price: 14, active: false },
            {id: 4, name: "Carbonara", category: "pizza", price: 17, active: false },
            {id: 5, name: "Cztery Sery", category: "pizza", price: 19, active: false },
            {id: 6, name: "Penne", category: "makarony", price: 9, active: false },
            {id: 7, name: "Spaghetti bolognese", category: "makarony", price: 12, active: false },
            {id: 8, name: "Diabolo pomidoro", category: "makarony", price: 14, active: false },
            {id: 9, name: "Spaghetti carbonara", category: "makarony", price: 13, active: false },
            {id: 10, name: "Spaghetti frutti di mare", category: "makarony", price: 17, active: false },
            {id: 11, name: "Cola", category: "napoje", price: 5.00, active: false },
            {id: 12, name: "Woda", category: "napoje", price: 3.50, active: false },
            {id: 13, name: "Sprite", category: "napoje", price: 5.00, active: false },
            {id: 14, name: "Herbata", category: "napoje", price: 4.50, active: false },
            {id: 15, name: "Kawa", category: "napoje", price: 6.50, active: false },
        ],
        toPay: 0,
        numberProducts: 0,
        select: "pizza",
    }

    handleAddToCart = (id, quantity) => {
        let toPay = this.state.toPay
        let numberProducts = this.state.numberProducts
        const items = this.state.items.map(item => {
            if(id === item.id) {
                
                if(item.active === false) {
                    item.active = true
                    toPay = toPay + item.price * quantity
                    numberProducts = numberProducts +  quantity
                }
            }
            return item
        })

        this.setState({
            items: items,
            toPay: toPay,
            numberProducts
        })
    }

    handleItemsCategory = (option) => {
        this.setState({
            select: option
        })
    }

    

    render() { 
        return ( 
            <React.Fragment>
                <Header items={this.state.items} toPay={this.state.toPay} numberProducts={this.state.numberProducts}/>
                <div className="buttons">
                    <button onClick={this.handleItemsCategory.bind(this, "pizza") } className= { this.state.select == "pizza" ? "mybtn mybtn-active" : "mybtn mybtn-notactive"}>Pizza</button>
                    <button onClick={this.handleItemsCategory.bind(this, "makarony")} className= { this.state.select == "makarony" ? "mybtn mybtn-active" : "mybtn mybtn-notactive"}>Makarony</button>
                    <button onClick={this.handleItemsCategory.bind(this, "napoje")} className= { this.state.select == "napoje" ? "mybtn mybtn-active" : "mybtn mybtn-notactive"}>Napoje</button>
                </div>
                <ListItems items={this.state.items} addToCart={this.handleAddToCart} select={this.state.select} quantity={this.state.quantity}/>
            </React.Fragment>
        );
    }
}
