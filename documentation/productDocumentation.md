# GET - /api/products

_Fetches all products._

## Returns

- Successful Response

```
    success: true,
    message: 'Products found.',
    status: 200,
    products: [...]
```

## Errors

- Internal Server Error

```
    success: false,
    message: 'Internal server error.',
    status: 500
```

<hr><br><br>

# GET - /api/products/:productId

_Fetches a specific product by its ID._

## Returns

- Successful Response

```
    success: true,
    message: 'Product found.',
    status: 200,
    product: {...}
```

# Errors

- Product Not Found

```
    success: false,
    message: 'Product not found.',
    status: 404
```

<hr><br><br>

# POST - /api/products/addproduct

lägga till produkter som admin baserat information från `req.body`
id, \_id och addedAt får du automatisk när du fyller alla krav och skickar info til db

## Req.body

```
desc: string,
title: string,
price: number
```

## Returns

```
success: true,
status: 200,
message: 'Product added'
```

# Errors

- ### Någon av parametrarna saknas
  ```
  success": false,
  message": '\"xxxxx\" is required', // xxxxx == variabel som saknas i `req.body`
  status": 400
  ```

* Product Not added
  ```
  success: false,
  status: 404,
  message: 'Product not added'
  ```

## Product Exist

- If product Exits
  #### Return
  ```
    success: false,
    message: 'Product already exists.',
    status: 400
  ```

<hr><br><br>

# Delete - /api/products/:productId

- Radera produkter som admin
  ## Returns
  ```
  success: true,
  status: 200,
  message: 'Product deleted',
  ```

# Errors

- If product not deleted
  ```
  success: false,
  status: 500,
  message: 'Product not deleted',
  ```

# Product Not found

- If (deletedProduct === 0)
  ### Return
  ```
  success: false,
  status: 404,
  message: 'Product not found',
  ```
  <hr><br><br>

# Put - /api/products/:productId

- Ändra produkter som admin
  ## Returns
  ```
  success: true,
  status: 200,
  message: 'Product updated',
  ```

# Errors

- If product not updated
  ```
  success: false,
  status: 500,
  message: 'Product not updated',
  ```

# Product Not found

- If (!updatedProduct)
  ### Return
  ```
  success: false,
  status: 404,
  message: 'Product not found',
  ```
