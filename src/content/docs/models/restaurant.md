---
title: Restaurant Model
---

## Class `Restaurant`
Represents a restaurant with its name and associated menus.
```kotlin
data class Restaurant(
    val name: String,
    val menus: MutableList<Menu> = mutableListOf(),
    val id: Int = 0
) {

    fun addMenu(vararg menus: Menu): Restaurant {
        this.menus.addAll(menus)
        return this
    }

}
```

### Properties
- `name`: `String` - The name of the restaurant.
- `menus`: `MutableList<Menu>` - A list of menus associated with the restaurant.
- `id`: `Int` - The unique identifier for the restaurant (default is 0).

### Methods
- `addMenu(vararg menus: Menu): Restaurant` - Adds one or more menus to the restaurant.

## Usage

### Creating a Simple Restaurant
```kotlin
// Restaurant
val restaurant = Restaurant("Dine")

// Insert to database
RestaurantDAO().insert(restaurant)
```

### Creating a Complete Restaurant
```kotlin
// Foods
val chocolateCake = Food("Chocolate Cake", "Cake with chocolate ganache", 2.6)
val vanillaCake = Food("Vanilla Cake", "Vanilla cake with frosting", 2.5)
val chocolateIceCream = Food("Chocolate Ice Cream", "Rich chocolate flavor", 1.9)
val vanillaIceCream = Food("Vanilla Ice Cream", "Classic vanilla", 1.7)

// Menus
val cakesMenu = Menu("Cakes").addFood(chocolateCake, vanillaCake)
val iceCreamMenu = Menu("Ice Cream").addFood(chocolateIceCream, vanillaIceCream)

// Restaurant
val restaurant = Restaurant("Dine").addMenu(cakesMenu, iceCreamMenu)

// Insert to database
RestaurantDAO().insert(restaurant)
```