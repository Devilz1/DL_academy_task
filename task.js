class Product {
    setPrice(price){
        this.price = price;   // Установили цену
        return this;          // Вернули товар
    }

    withDiscount(percent){
        this.discountedPrice = this.price - (this.price * (percent * 0.01));   // Установили скидку
        return this;                                                           // Вернули товар
    }
}

class Shop {
    addProducts (products){
        this.products = Array.from(products);                                  // Присваиваем свойству массив товаров
    }

    getProduct (id){
        return this.products.find(prod => {
            return prod.id === id;                                             // Возвращаем нужный товар, исходя из параметра id
        })
    }
}

var products = [
    {
        "id":3,
        "name":"Cake",
        "price":333,
        "description":"The tastiest cake in the world."
    },
    {
        "id":5,
        "name":"Petroleum",
        "price":2977,
        "description":"Black gold."
    },
    {
        "id":8,
        "name":"Moscow metro logo",
        "price":117000000,
        "description":"Remove circle from logo"
    }
];

products.map((prod)=>{
    Object.setPrototypeOf(prod, Product.prototype);   // Устанавливаем прототипы так, чтобы они стали экземплярами класса Products
});

var shop = new Shop();
shop.addProducts(products);
console.log(shop.getProduct(5).setPrice(3224).withDiscount(10).discountedPrice === 2901.6);  // true
