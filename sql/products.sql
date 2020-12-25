DROP TABLE IF EXISTS products;


CREATE TABLE products (
	id SERIAL NOT NULL PRIMARY KEY,
	fields JSON NOT NULL
);


INSERT INTO products (fields)
VALUES('{
        "name": "Aloha Basic Shirt",
        "price": 12.99,
        "brand": "Armani",
        "fabric": "cotton",
        "colors": ["#e541a5", "#f0e047", "#5b2fb2", "#45a6cc"],
        "tags": ["flowers", "flamingos", "surfboards"],
        "featured": true,
        "description": "Colorful basic shirt for everyday use",
        "image": [
            {
                "id": 1,
                "url": "https://s3.console.aws.amazon.com/s3/object/aloha.webshop?region=eu-central-1&prefix=Shirt2.png",
                "filename": "Shirt2.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.console.aws.amazon.com/s3/object/aloha.webshop?region=eu-central-1&prefix=Shirt2.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.console.aws.amazon.com/s3/object/aloha.webshop?region=eu-central-1&prefix=Shirt2.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.console.aws.amazon.com/s3/object/aloha.webshop?region=eu-central-1&prefix=Shirt2.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');