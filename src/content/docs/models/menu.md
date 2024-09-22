---
title: Menu Model
---

## Class `Menu`
Represents a menu with its name and associated foods.
```kotlin
data class Menu(
    val name: String,
    val foods: MutableList<Food> = mutableListOf(),
    val id: Int = 0,
    var restaurantId: Int = 0
) {

    fun addFood(vararg foods: Food): Menu {
        this.foods.addAll(foods)
        return this
    }

}
```

### Properties
- `name`: `String` - The name of the menu.
- `foods`: `MutableList<Food>` - A list of foods associated with the menu.
- `id`: `Int` - The unique identifier for the menu (default is 0).
- `restaurantId`: `Int` - The identifier of the restaurant this menu belongs to (default is 0).


### Methods
- `addFood(vararg foods: Food): Menu` - Adds one or more foods to the menu.

## Usage

### Creating a Simple Menu
```kotlin
// Menu
val menu = Menu("Cakes")

// Insert to database
MenuDAO().insert(menu)
```

### Creating a Complete Menu
```kotlin
// Foods
val chocolateCake = Food("Chocolate Cake", "Cake with chocolate ganache", 2.6)
val vanillaCake = Food("Vanilla Cake", "Vanilla cake with frosting", 2.5)

// Menu (Associate with a restaurant)
val menu = Menu("Cakes", restaurantId = 1).addFood(chocolateCake, vanillaCake)

// Insert to database
MenuDAO().insert(menu)
```