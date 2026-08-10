ServerEvents.recipes( e => {
    //remove recipes that are broken (this can be ignored for deployment)
    const ids = [
        'create:milling/compat/biomesoplenty/endbloom',
        'create:milling/compat/biomesoplenty/tall_white_lavender',
        'create:milling/compat/biomesoplenty/white_lavender',
        'create:milling/compat/biomesoplenty/tiny_cactus',
        'create_confectionery:chocolate_recipe_6',
        'create_confectionery:black_chocolate_recipe_6',
        'create_confectionery:white_chocolate_recipe_6',
        'create_confectionery:ruby_chocolate_recipe_6',
        'createcasing:crafting/chain_drive/creative_from_zinc',
        'outer_end:violite/slab_from_vertical_slab',
        'outer_end:violite/mossy_tiles/slab_from_vertical_slab',
        'outer_end:azure_vertical_to_slab',
        'outer_end:violite/tiles/slab_from_vertical_slab',
        'outer_end:himmel_vertical_to_slab',
        'create_radar:crafting/identification_transponder',
        'farmersdelight:cutting/azure_trapdoor'
    ]

    ids.forEach(id => {
        e.remove({ output: id })
    })

})