ServerEvents.tags("worldgen/biome", event => {
    // remove the tag from all biomes
    event.removeAll("ae2:has_meteorites") 
    
    // add meteorite tag only to mars biomes
    event.add("ae2:has_meteorites", "ad_astra:martian_wastelands") 
    event.add("ae2:has_meteorites", "ad_astra:martian_canyon_creek")
    event.add("ae2:has_meteorites", "ad_astra:martian_wastelands")
    
    
})