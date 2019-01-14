class Item extends React.Component {
    state ={
        quantity: 0
    }

    handleIncresingItems = () => {
        let quantity = this.state.quantity + 1
        this.setState({
            quantity
        })
    }
    handleDecreasingItems = () => {
        let quantity = this.state.quantity - 1
        this.setState({
            quantity
        })
    }

    render() {
        let quantity = this.state.quantity
        return (
            <div 
            className= {this.props.active ? "enabled item" : "disabled item"}
            
            >
                <span>{this.props.name} {this.props.price} zł</span>
                <div className="align-right">
                    <button disabled={quantity<1 ? true : false} className="change-quantity" onClick={() => this.handleDecreasingItems()}> - </button>
                    <span> {quantity} </span>
                    <button disabled={quantity>19 ? true : false} className="change-quantity" onClick={() => this.handleIncresingItems()}> + </button>
                    <button disabled={quantity<1 ? true : false} className="add-to-cart" onClick={() => this.props.addToCart(this.props.id, quantity)}>Dodaj do koszyka</button>
                </div>

            </div>
        )
    }
}

// style={props.active ? {fontWeight: "bold"} : {color: "grey"} } 