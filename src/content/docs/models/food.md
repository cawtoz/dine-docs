---
title: Food Model
---

## Class `Food`
Represents a food item with its details, including name, description, and price, associated with a menu.
```kotlin
data class Food(
    val name: String,
    val description: String,
    val price: Double,
    val id: Int = 0,
    var menuId: Int = 0
)
```

### Properties
- `name`: `String` - The name of the food item.
- `description`: `String` - A brief description of the food item.
- `price`: `Double` - The price of the food item.
- `id`: `Int` - The unique identifier for the food item (default is 0).
- `menuId`: `Int` - The identifier of the menu this food item belongs to (default is 0).

## Usage

### Creating a Food
```kotlin
// Food (Associate with a menu)
val food = Food("Chocolate Cake", "Cake with chocolate ganache", 2.6, menuId = 1)

// Insert to database
FoodDAO().insert(food)
```