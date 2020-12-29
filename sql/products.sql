DROP TABLE IF EXISTS products;


CREATE TABLE products (
	id SERIAL NOT NULL PRIMARY KEY,
	fields JSON NOT NULL
);


INSERT INTO products (fields)
VALUES('{
        "name": "Pineapple Paradise",
        "price": 32.99,
        "brand": "Aloha Republic",
        "fabric": "Cotton",
        "colors": ["#81E2F1", "#ECBA4D", "#85D657", "#376D31", "#F04CA8"],
        "tags": ["pineapple", "hibiscus", "tropical"],
        "featured": true,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 1,
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt1.png",
                "filename": "Shirt1.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt1.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt1.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt1.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');
    
INSERT INTO products (fields)
VALUES('{
        "name": "Hawaiian Sunset Blue",
        "price": 39.99,
        "brand": "KY’s Cotton",
        "fabric": "cotton",
        "colors": ["#1F3895", "#101011", "#DCCF2C", "#F06307"],
        "tags": ["palm trees", "beach", "sunset"],
        "featured": false,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 2,
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
        "name": "Hawaiian Sunset Red",
        "price": 39.99,
        "brand": "KY’s Cotton",
        "fabric": "cotton",
        "colors": ["#BE0117", "#DABE3C", "#FF681B", "#101011"],
        "tags": ["palm trees", "beach", "sunset"],
        "featured": false,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 3,
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt3.png",
                "filename": "Shirt3.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt3.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt3.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt3.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');


INSERT INTO products (fields)
VALUES('{
        "name": "Flamingo Garden",
        "price": 36.99,
        "brand": "Pacific Legend",
        "fabric": "cotton",
        "colors": ["#51C3AA", "#B5CCB2", "#E5C559", "#FDA18C", "#435949"],
        "tags": ["flamingos", "palm trees", "beach"],
        "featured": true,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 4,
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
        "name": "Flamingo Tropics",
        "price": 36.99,
        "brand": "Pacific Legend",
        "fabric": "cotton",
        "colors": ["#08CBD7", "#9FC06F", "#089EB6", "#DA5D6C"],
        "tags": ["flamingos", "sea", "reed"],
        "featured": false,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 5,
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


INSERT INTO products (fields)
VALUES('{
        "name": "Oldschool Surf",
        "price": 46.99,
        "brand": "RJC Hawaii",
        "fabric": "cotton",
        "colors": ["#97BDCF", "#E7E7DA", "#D4773A", "#2E2835", "#666946"],
        "tags": ["surfboards", "palm trees", "hibiscus"],
        "featured": false,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 6,
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt6.png",
                "filename": "Shirt6.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt6.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt6.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt6.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');

INSERT INTO products (fields)
VALUES('{
        "name": "Paradise Birds",
        "price": 32.99,
        "brand": "RJC Hawaii",
        "fabric": "cotton",
        "colors": ["#EEEEEF", "#F8A11D", "#CC2C27", "#2963A8", "#3C685C"],
        "tags": ["parrots", "tropical", "cockatoos"],
        "featured": false,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 7,
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt7.png",
                "filename": "Shirt7.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt7.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt7.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt7.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');


INSERT INTO products (fields)
VALUES('{
        "name": "Parrot Legend",
        "price": 30.99,
        "brand": "Aloha Republic",
        "fabric": "cotton",
        "colors": ["#58951A", "#0C1E5C", "#EA162D" ],
        "tags": ["parrots", "tropical", "birds"],
        "featured": true,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 8,
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt8.png",
                "filename": "Shirt8.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt8.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt8.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt8.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');

INSERT INTO products (fields)
VALUES('{
        "name": "Hibiscus Garden",
        "price": 32.99,
        "brand": "Aloha Republic",
        "fabric": "cotton",
        "colors": ["#DB7BAE", "#F8F2F1", "#858B45", "#D0B38A"],
        "tags": ["hibiscus", "floral", "flowers"],
        "featured": false,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 9,
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt9.png",
                "filename": "Shirt9.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt9.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt9.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt9.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');

INSERT INTO products (fields)
VALUES('{
        "name": "Onomea Bay",
        "price": 27.99,
        "brand": "Aloha Republic",
        "fabric": "cotton",
        "colors": ["#B4D9E8", "#21569C", "#7B8743", "#F5F6ED"],
        "tags": ["onomea", "floral", "flowers"],
        "featured": false,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 10,
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt10.png",
                "filename": "Shirt10.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt10.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt10.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt10.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');


INSERT INTO products (fields)
VALUES('{
        "name": "Parrot Love",
        "price": 32.99,
        "brand": "Aloha Republic",
        "fabric": "cotton",
        "colors": ["#F9BE55", "#498501", "#D3111E", "#59749B", "#7A9B00"],
        "tags": ["parrots", "tropical", "birds"],
        "featured": false,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 11,
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt11.png",
                "filename": "Shirt11.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt11.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt11.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt11.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');

INSERT INTO products (fields)
VALUES('{
        "name": "Orange Island",
        "price": 36.99,
        "brand": "Aloha Republic",
        "fabric": "cotton",
        "colors": ["#FDB84A", "#EDE4BC", "#494E0E", "#73573E"],
        "tags": ["island", "palm trees", "sunny"],
        "featured": false,
        "description": "100% Cotton poplin Hawaiian short-sleeve shirt with pattern-matched chest pocket. Genuine coconut shell buttons. Cool and lightweight for summer. Made in Honolulu.",
        "image": [
            {
                "id": 12,
                "url": "https://s3.amazonaws.com/aloha.shop/Shirt12.png",
                "filename": "Shirt12.png",
                "size": 62864,
                "type": "image/png",
                "thumbnails": {
                    "small": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt12.png",
                        "width": 56,
                        "height": 36
                    },
                    "large": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt12.png",
                        "width": 801,
                        "height": 512
                    },
                    "full": {
                        "url": "https://s3.amazonaws.com/aloha.shop/Shirt12.png",
                        "width": 3000,
                        "height": 3000
                    }
                }
            }
        ]
    }');