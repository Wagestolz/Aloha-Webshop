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
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt2.png",
                "filename": "Shirt2.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt2.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt2.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt2.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');
    
INSERT INTO products (fields)
VALUES('{
        "name": "Aloha Premium",
        "price": 19.99,
        "brand": "Armani",
        "fabric": "cotton",
        "colors": ["#e541a5", "#f0e047", "#5b2fb2", "#45a6cc"],
        "tags": ["flowers", "flamingos", "surfboards"],
        "featured": true,
        "description": "Colorful basic shirt for everyday use",
        "image": [
            {
                "id": 2,
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt4.png",
                "filename": "Shirt4.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt4.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt4.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt4.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');
INSERT INTO products (fields)
VALUES('{
        "name": "Aloha Special",
        "price": 16.99,
        "brand": "Armani",
        "fabric": "cotton",
        "colors": ["#e541a5", "#f0e047", "#5b2fb2", "#45a6cc"],
        "tags": ["flowers", "flamingos", "surfboards"],
        "featured": true,
        "description": "Colorful basic shirt for everyday use",
        "image": [
            {
                "id": 3,
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt5.png",
                "filename": "Shirt5.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt5.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt5.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt5.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');