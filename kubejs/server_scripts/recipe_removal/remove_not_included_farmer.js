ServerEvents.recipes( e => {
    //remove recipes that are broken (this can be ignored for deployment)
    const ids = [
        'displaydelight:nd_plated_nether_skewer',
        'displaydelight:mnd_plate_of_stuffed_hoglin_snout',
        'displaydelight:mnd_plate_of_stuffed_hoglin_ham',
        'displaydelight:mnd_plate_of_stuffed_hoglin',
        'displaydelight:nd_plate_of_stuffed_hoglin_snout',
        'displaydelight:nd_plate_of_stuffed_hoglin_ham',
        'displaydelight:nd_plate_of_stuffed_hoglin_roast'
    ]

    ids.forEach(id => {
        e.remove({ output: id })
    })

})