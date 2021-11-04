const path = require('path');
const p = path.join(__dirname, '..', 'data', 'products.json');
const fs = require('fs');

module.exports = class Product {
    static fetchAll(cb) {

        fs.readFile(p, (err, fileContent) => {
            let products;
            if (err) {
                products = [];
            } else {
                products = JSON.parse(fileContent);
            }
            cb(products);
        });
    }

    static search(query, cb) {
        fs.readFile(p, (err, fileContent) => {
            let products;
            if (err)
                products = [];
            else
                products = JSON.parse(fileContent);

            // search products
            const filteredProducts = products.filter(product => {
                // search product tags
                let tagFound = false;
                product.tags.forEach(tag => {
                    if (tag.toLowerCase().includes(query))
                        tagFound = true;
                });

                return tagFound ||
                    product.name.toLowerCase().includes(query) ||
                    product.description.toLowerCase().includes(query);
            });

            cb(filteredProducts);

        });
    }
};