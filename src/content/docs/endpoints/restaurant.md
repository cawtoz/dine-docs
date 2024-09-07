---
title: Restaurant Endpoints
---

## GET /restaurant
Retrieve a list of all restaurant items.
### Response `200 OK`
```json
[
  {
    "id": 1,
    "name": "Dine",
    "menus": [
      {
        "id": 1,
        "name": "Cakes",
        "restaurantId": 1,
        "foods": [
          {
            "id": 1,
            "name": "Chocolate Cake",
            "description": "Chocolate cake with ganache topping",
            "price": 2.6,
            "menuId": 1
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Fast Food"
  }
]
```

## GET /restaurant/{id}
Retrieve a specific restaurant item by its ID.
### Response `200 OK`
```json
{
  "id": 1,
  "name": "Dine",
  "menus": [ // If the restaurant has menus
    {
      "id": 1,
      "name": "Cakes",
      "restaurantId": 1,
      "foods": [
        {
          "id": 1,
          "name": "Chocolate Cake",
          "description": "Chocolate cake with ganache topping",
          "price": 2.6,
          "menuId": 1
        }
      ]
    }
  ]
}
```
### Response `404 Not Found`
```json
{
  "message": "Restaurant with id {id} does not exist"
}
```
### Response `500 Internal Server Error`
```json
{
  "message": "Invalid Restaurant id"
}
```

## POST /restaurant
Create a new restaurant item.
### Request Body
- **name**: (String) The name of the restaurant item. This field is required.

**Example**
```json
{
  "name": "Frosty Delights",
}
```
### Response `201 Created`
```json
{
  "message": "Restaurant created successfully"
}
```
### Response `500 Internal Server Error`
```json
{
  "message": "Failed to create Restaurant"
}
```