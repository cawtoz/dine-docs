---
title: Menu Endpoints
---

## GET /menu
Retrieve a list of all menu items.
### Response `200 OK`
```json
[
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
  },
  {
    "id": 2,
    "name": "Burgers",
    "restaurantId": 2
  }
]
```

## GET /menu/{id}
Retrieve a specific menu item by its ID.
### Response `200 OK`
```json
{
  "id": 1,
  "name": "Cakes",
  "restaurantId": 1,
  "foods": [ // If the menu has foods
    {
      "id": 1,
      "name": "Chocolate Cake",
      "description": "Chocolate cake with ganache topping",
      "price": 2.6,
      "menuId": 1
    }
  ]
}
```
### Response `404 Not Found`
```json
{
  "message": "Menu with id {id} does not exist"
}
```
### Response `500 Internal Server Error`
```json
{
  "message": "Invalid Menu id"
}
```

## POST /menu
Create a new menu item.
### Request Body
- **name**: (String) The name of the menu item. This field is required.
- **restaurantId**: (Number) The id of the restaurant menu item. This field is required.

**Example**
```json
{
  "name": "Ice Cream",
  "restaurantId": 3,
}
```
### Response `201 Created`
```json
{
  "message": "Menu created successfully"
}
```
### Response `500 Internal Server Error`
```json
{
  "message": "Failed to create Menu"
}
```