class Product {
    productItems = [];  //create empty array to store product items


    constructor() {};


    addProduct(name, price, category, description, image) {
        const item = {
            name = name,
            price = price,
            category = category,
            description = description,
            image = image
        }

        this.productItems.push(item);


    }  // end of add product method


}