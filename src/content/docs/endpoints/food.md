---
title: Food Endpoints
---

## GET /food
Retrieve a list of all food items.
### Response `200 OK`
```json
[
  {
    "menuId": 1,
    "name": "Apple",
    "description": "apple description",
    "price": 3.7
  },
  {
    "menuId": 2,
    "name": "Pear",
    "description": "pear description",
    "price": 3.2
  }
]
```

## GET /food/{id}
Retrieve a specific food item by its ID.
### Response `200 OK`
```json
{
  "menuId": 1,
  "name": "Apple",
  "description": "apple description",
  "price": 3.7
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

**Example**
```json
{
  "name": "Banana",
  "description": "banana description",
  "price": 2.9
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