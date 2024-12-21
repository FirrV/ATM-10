//This file intended to help Minecolonies crops / items be used in place of other crops / items in recipes, mirroring tags currently applied to crops / items of the same in-game name or intended purpose.
//It's quite possible that many of these tags are redundant somehow
ServerEvents.tags('item', allthemods => {
//Bread Dough
    allthemods.add('c:foods', 'minecolonies:bread_dough')
    allthemods.add('c:dough', 'minecolonies:bread_dough')
    allthemods.add('c:dough/dough', 'minecolonies:bread_dough')
    allthemods.add('c:foods/dough', 'minecolonies:bread_dough')
//Breads
    allthemods.add('c:bread', ['minecolonies:milky_bread', 'minecolonies:sugary_bread', 'minecolonies:golden_bread', 'minecolonies:chorus_bread', 'minecolonies:manchet_bread', 'minecolonies:lembas_scone'])
    allthemods.add('c:bread/bread', ['minecolonies:milky_bread', 'minecolonies:sugary_bread', 'minecolonies:golden_bread', 'minecolonies:chorus_bread', 'minecolonies:manchet_bread', 'minecolonies:lembas_scone'])
//Crops
//Bell Pepper
    allthemods.add('c:vegetables/bellpepper', 'minecolonies:bell_pepper')
    allthemods.add('c:crops/bellpepper', 'minecolonies:bell_pepper')
    allthemods.add('c:peppers/bellpepper', 'minecolonies:bell_pepper')
    allthemods.add('c:vegetables', 'minecolonies:bell_pepper')
    allthemods.add('c:crops', 'minecolonies:bell_pepper')
    allthemods.add('c:peppers', 'minecolonies:bell_pepper')
//Cabbage
    allthemods.add('c:vegetables', 'minecolonies:cabbage')
    allthemods.add('c:crops', 'minecolonies:cabbage')
    allthemods.add('c:crops/cabbage', 'minecolonies:cabbage')
    allthemods.add('c:foods/cabbage', 'minecolonies:cabbage')
    allthemods.add('c:foods/leafy_green', 'minecolonies:cabbage')
    allthemods.add('c:salad_ingredients', 'minecolonies:cabbage')
    allthemods.add('c:vegetables/cabbage', 'minecolonies:cabbage')
    allthemods.add('c:leafyvegetables', 'minecolonies:cabbage')
    allthemods.add('c:leafyvegetables/cabbage', 'minecolonies:cabbage')
    allthemods.add('c:salad_ingredients/cabbage', 'minecolonies:cabbage')
//Chickpea
    allthemods.add('c:flour_plants/chickpea', 'minecolonies:chickpea')
    allthemods.add('c:flour_plants', 'minecolonies:chickpea')
    allthemods.add('c:crops', 'minecolonies:chickpea')
    allthemods.add('c:crops/chickpea', 'minecolonies:chickpea')
    allthemods.add('c:grain/chickpea', 'minecolonies:chickpea')
    allthemods.add('c:grain', 'minecolonies:chickpea')
//Durum Wheat, mirroring regular minecraft:wheat
    allthemods.add('twilightforest:raven_tempt_items', 'minecolonies:durum')
    allthemods.add('livingthings:giraffe_food', 'minecolonies:durum')
    allthemods.add('c:grain/wheat', 'minecolonies:durum')
    allthemods.add('minecraft:horse_food', 'minecolonies:durum')
    allthemods.add('supplementaries:straw', 'minecolonies:durum')
    allthemods.add('c:grain', 'minecolonies:durum')
    allthemods.add('c:crops/wheat', 'minecolonies:durum')
    allthemods.add('twilightforest:squirrel_tempt_items', 'minecolonies:durum')
    allthemods.add('minecraft:cow_food', 'minecolonies:durum')
    allthemods.add('c:flour_plants', 'minecolonies:durum')
    allthemods.add('minecraft:sheep_food', 'minecolonies:durum')
    allthemods.add('twilightforest:deer_tempt_items', 'minecolonies:durum')
    allthemods.add('c:animal_foods', 'minecolonies:durum')
    allthemods.add('c:flour_plants/wheat', 'minecolonies:durum')
    allthemods.add('tombstone:seeds', 'minecolonies:durum')
    allthemods.add('c:crops/grain', 'minecolonies:durum')
    allthemods.add('livingthings:koala_food', 'minecolonies:durum')
    allthemods.add('herbsandharvest:produce', 'minecolonies:durum')
    allthemods.add('c:seeds', 'minecolonies:durum')
    allthemods.add('livingthings:ostrich_food', 'minecolonies:durum')
    allthemods.add('livingthings:peacock_food', 'minecolonies:durum')
    allthemods.add('livingthings:elephant_food', 'minecolonies:durum')
    allthemods.add('twilightforest:tiny_bird_tempt_items', 'minecolonies:durum')
    allthemods.add('livingthings:shroomie_food', 'minecolonies:durum')
    allthemods.add('c:crops', 'minecolonies:durum')
    allthemods.add('livingthings:raccoon_food', 'minecolonies:durum')
//Eggplant
    allthemods.add('c:crops/eggplant', 'minecolonies:eggplant')
    allthemods.add('c:vegetables/eggplant', 'minecolonies:eggplant')
    allthemods.add('c:crops', 'minecolonies:eggplant')
    allthemods.add('c:vegetables', 'minecolonies:eggplant')
//Garlic
    allthemods.add('c:rootvegetables', 'minecolonies:garlic')
    allthemods.add('c:crops', 'minecolonies:garlic')
    allthemods.add('c:rootvegetables/garlic', 'minecolonies:garlic')
    allthemods.add('c:vegetables/garlic', 'minecolonies:garlic')
    allthemods.add('c:crops/garlic', 'minecolonies:garlic')
    allthemods.add('c:vegetables', 'minecolonies:garlic')
//Onion
    allthemods.add('c:crops', 'minecolonies:onion')
    allthemods.add('c:foods', 'minecolonies:onion')
    allthemods.add('c:crops/onion', 'minecolonies:onion')
    allthemods.add('c:foods/onion', 'minecolonies:onion')
    allthemods.add('c:foods/vegetable', 'minecolonies:onion')
    allthemods.add('c:rootvegetables', 'minecolonies:onion')
    allthemods.add('c:vegetables/onion', 'minecolonies:onion')
    allthemods.add('c:rootvegetables/onion', 'minecolonies:onion')
    allthemods.add('c:onions/onion', 'minecolonies:onion')
    allthemods.add('c:vegetables', 'minecolonies:onion')
    allthemods.add('c:onions', 'minecolonies:onion')
//Soybean
    allthemods.add('c:crops', 'minecolonies:soybean')
    allthemods.add('c:crops/soybean', 'minecolonies:soybean')
    allthemods.add('c:flour_plants/soybean', 'minecolonies:soybean')
    allthemods.add('c:flour_plants', 'minecolonies:soybean')
    allthemods.add('c:grain/soybean', 'minecolonies:soybean')
    allthemods.add('c:grain', 'minecolonies:soybean')
//Tomato
    allthemods.add('c:foods', 'minecolonies:tomato')
    allthemods.add('c:crops', 'minecolonies:tomato')
    allthemods.add('c:animal_foods', 'minecolonies:tomato')
    allthemods.add('c:crops/tomato', 'minecolonies:tomato')
    allthemods.add('c:foods/tomato', 'minecolonies:tomato')
    allthemods.add('minecraft:pig_food', 'minecolonies:tomato')
    allthemods.add('foods/vegetable', 'minecolonies:tomato')
    allthemods.add('c:salad_ingredients', 'minecolonies:tomato')
    allthemods.add('c:vegetables/tomato', 'minecolonies:tomato')
    allthemods.add('c:vinegar_ingredients', 'minecolonies:tomato')
    allthemods.add('c:salad_ingredients/tomato', 'minecolonies:tomato')
    allthemods.add('c:vinegar_ingredients/tomato', 'minecolonies:tomato')
    allthemods.add('c:vegetables', 'minecolonies:tomato')
//Rice
    allthemods.add('c:crops', 'minecolonies:rice')
    allthemods.add('c:crops/rice', 'minecolonies:rice')
    allthemods.add('twilightforest:tiny_bird_tempt_items', 'minecolonies:rice')
    allthemods.add('minecraft:chicken_food', 'minecolonies:rice')
    allthemods.add('cookingforblockheads:ingredients', 'minecolonies:rice')
    allthemods.add('twilightforest:raven_tempt_items', 'minecolonies:rice')
    allthemods.add('c:crops/grain', 'minecolonies:rice')
    allthemods.add('minecraft:parrot_food', 'minecolonies:rice')
    allthemods.add('twilightforest:squirrel_tempt_items', 'minecolonies:rice')
    allthemods.add('c:animal_foods', 'minecolonies:rice')
    allthemods.add('c:seeds', 'minecolonies:rice')
    allthemods.add('c:paper_plants/rice', 'minecolonies:rice')
    allthemods.add('c:paper_plants', 'minecolonies:rice')
    allthemods.add('c:protein', 'minecolonies:rice')
    allthemods.add('c:flour_plants', 'minecolonies:rice')
    allthemods.add('c:carbs/rice', 'minecolonies:rice')
    allthemods.add('c:flour_plants/rice', 'minecolonies:rice')
    allthemods.add('c:grain/rice', 'minecolonies:rice')
    allthemods.add('c:carbs', 'minecolonies:rice')
    allthemods.add('c:vinegar_ingredients', 'minecolonies:rice')
    allthemods.add('c:grain', 'minecolonies:rice')
    allthemods.add('c:protein/rice', 'minecolonies:rice')
//Corn
    allthemods.add('c:carbs', 'minecolonies:corn')
    allthemods.add('c:protein', 'minecolonies:corn')
    allthemods.add('c:flour_plants', 'minecolonies:corn')
    allthemods.add('c:grain', 'minecolonies:corn')
    allthemods.add('c:carbs/corn', 'minecolonies:corn')
    allthemods.add('c:crops', 'minecolonies:corn')
    allthemods.add('c:protein/corn', 'minecolonies:corn')
    allthemods.add('c:flour_plants/corn', 'minecolonies:corn')
    allthemods.add('c:grain/corn', 'minecolonies:corn')
    allthemods.add('c:crops/corn', 'minecolonies:corn')
//Nether Pepper
    allthemods.add('c:vegetables', 'minecolonies:nether_pepper')
    allthemods.add('c:crops', 'minecolonies:nether_pepper')
    allthemods.add('c:peppers', 'minecolonies:nether_pepper')
//Peas
    allthemods.add('c:flour_plants/peas', 'minecolonies:peas')
    allthemods.add('c:crops/peas', 'minecolonies:peas')
    allthemods.add('c:salad_ingredients/peas', 'minecolonies:peas')
    allthemods.add('c:vegetables', 'minecolonies:peas')
    allthemods.add('c:vegetables/pea', 'minecolonies:peas')
    allthemods.add('c:vegetables/peas', 'minecolonies:peas')
    allthemods.add('c:salad_ingredients', 'minecolonies:peas')
    allthemods.add('c:crops', 'minecolonies:peas')
    allthemods.add('c:flour_plants', 'minecolonies:peas')
    allthemods.add('c:salad_ingredients/pea', 'minecolonies:peas')
    allthemods.add('c:crops/pea', 'minecolonies:peas')
    allthemods.add('c:seeds/pea', 'minecolonies:peas')
    allthemods.add('c:flour_plants/pea', 'minecolonies:peas')
//Butternut Squash, to parity with Pam's Winter Squash
    allthemods.add('c:vegetables/wintersquash', 'minecolonies:butternut_squash')
    allthemods.add('c:crops/wintersquash', 'minecolonies:butternut_squash')
    allthemods.add('c:crops', 'minecolonies:butternut_squash')
    allthemods.add('c:vegetables', 'minecolonies:butternut_squash')
//Producables
//Large Water Bottle
    allthemods.add('c:water', 'minecolonies:large_water_bottle')
    allthemods.add('c:water/freshwater', 'minecolonies:large_water_bottle')
//Large Milk Bottle
    allthemods.add('c:milk', 'minecolonies:large_milk_bottle')
    allthemods.add('c:milk/freshmilk', 'minecolonies:large_milk_bottle')
    allthemods.add('c:milks', 'minecolonies:large_milk_bottle')
//Large Soy Milk Bottle
    allthemods.add('c:milk', 'minecolonies:large_soy_milk_bottle')
    allthemods.add('c:milk/soymilk', 'minecolonies:large_soy_milk_bottle')
//Raw Noodles
    allthemods.add('c:pasta', 'minecolonies:raw_noodle')
    allthemods.add('c:foods', 'minecolonies:raw_noodle')
    allthemods.add('c:pasta/pasta', 'minecolonies:raw_noodle')
    allthemods.add('c:foods/pasta', 'minecolonies:raw_noodle')
//Butter
    allthemods.add('c:butter', 'minecolonies:butter')
    allthemods.add('c:butter/butter', 'minecolonies:butter')
//Cornmeal
    allthemods.add('c:cornmeal', 'minecolonies:cornmeal')
    allthemods.add('c:cornmeal/cornmeal', 'minecolonies:cornmeal')
//Soysauce
    allthemods.add('c:soysauce/soysauce', 'minecolonies:soysauce')
    allthemods.add('c:soysauce', 'minecolonies:soysauce')
    allthemods.add('c:condiments/soysauce', 'minecolonies:soysauce')
    allthemods.add('c:condiments', 'minecolonies:soysauce')
    allthemods.add('cookingforblockheads:ingredients', 'minecolonies:soysauce')
//Cheddar Cheese
    allthemods.add('c:cheese', 'minecolonies:cheddar_cheese')
    allthemods.add('c:cheese/cheese', 'minecolonies:cheddar_cheese')
//Feta Cheese
    allthemods.add('c:cheese', 'minecolonies:feta_cheese')
    allthemods.add('c:cheese/cheese', 'minecolonies:feta_cheese')
//Yogurt
    allthemods.add('c:yogurt', 'minecolonies:yogurt')
    allthemods.add('c:yogurt/yogurt', 'minecolonies:yogurt')
//Tortillas
    allthemods.add('c:tortilla', 'minecolonies:tortillas')
    allthemods.add('c:tortilla/tortilla', 'minecolonies:tortillas')
})