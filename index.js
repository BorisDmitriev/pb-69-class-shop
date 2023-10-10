class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    toText() {
        return `${this.name} tracksuit ${this.price} € in total. ${this.price * 0.16} € VAT incl. (16%).`
    }

    containedVAT(){
        return `${this.price * 0.16} € VAT incl.`;
    }
}


class Cart {
    constructor(){
        this.products = [];
    }

    addProduct(shoppedProduct){
        if( shoppedProduct instanceof Product ){
            this.products.push(shoppedProduct);
            return `Your shopping cart now contains ${this.products.length} products`;
        }else{
            return `The product is not available in the shop`;
        }
    }

    getProductInfoCart(){
        this.products.forEach( product => {
            console.log( product.toText() );
        } );
    }

    getTotalItemsPrice(){
       const sum = this.products.reduce( (acc, cur) => acc+cur, 0 );
       return String(sum);
    }
}

const tracksuit = new Product("tracksuit", 150);
const shoes = new Product("shoes", 100);
const socks = new Product("socks", 20);


const cart = new Cart()
cart.addProduct("potato") // This is not available in our shop!
cart.addProduct(tracksuit) // Your shopping cart now contains 1 products
cart.addProduct(shoes) // Your shopping cart now contains 2 products
cart.addProduct(socks) // Your shopping cart now contains 3 products

cart.getProductInfoCart()
// Adidas running shoes 150.00 € in total. 24.00 € VAT incl. (16%).
// Puma tracksuit 85.99 € in total. 13.76 € VAT incl. (16%).

