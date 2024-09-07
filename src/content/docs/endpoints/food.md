---
title: Food Endpoints
---

## GET /food
Retrieve a list of all food items.
### Response `200 OK`
```json
[
  {
    "id": 1,
    "name": "Chocolate Cake",
    "description": "Chocolate cake with ganache topping",
    "price": 2.6,
    "menuId": 1
  },
  {
    "id": 2,
    "name": "Bacon Cheeseburger",
    "description": "Beef patty with bacon and cheddar cheese",
    "price": 8.2,
    "menuId": 2
  }
]
```

## GET /food/{id}
Retrieve a specific food item by its ID.
### Response `200 OK`
```json
{
  "id": 1,
  "name": "Chocolate Cake",
  "description": "Chocolate cake with ganache topping",
  "price": 2.6,
  "menuId": 1
}
```
### Response `404 Not Found`
```json
{
  "message": "Food with id {id} does not exist"
}
```
### Response `500 Internal Server Error`
```json
{
  "message": "Invalid Food id"
}
```

## POST /food
Create a new food item.
### Request Body
- **name**: (String) The name of the food item. This field is required.
- **description**: (String) A brief description of the food item. This field is required.
- **price**: (Number) The price of the food item. This field is required.
- **menuId**: (Number) The menu id of the food item. This field is required.

**Example**
```json
{
  "name": "Vanilla Ice Cream",
  "description": "Vanilla ice cream with real vanilla beans",
  "price": 4.2,
  "menuId": 3
}
```
### Response `201 Created`
```json
{
  "message": "Food created successfully"
}
```
### Response `500 Internal Server Error`
```json
{
  "message": "Failed to create Food"
}
```