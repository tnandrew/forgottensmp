// FORGOTTEN SMP - COIN TOOLTIP OVERHAUL (KubeJS 1.20.1)

ItemEvents.tooltip(event => {
    // Master configuration for colors and names (Unbolded, custom colored)
    const coinConfig = {
        'numismatics:spur':     { name: 'Spur',     val: '0.01',  color: '#D27D2D' }, // Copper-like color
        'numismatics:bevel':    { name: 'Bevel',    val: '0.10',  color: '#FFFFFF' }, // Plain White
        'numismatics:sprocket': { name: 'Sprocket', val: '1.00',  color: '#808080' }, // Gray
        'numismatics:cog':      { name: 'Cog',      val: '10.00', color: '#FFAA00' }, // Gold
        'numismatics:crown':    { name: 'Crown',    val: '50.00', color: '#55FFFF' }, // Light Blue
        'numismatics:sun':      { name: 'Sun',      val: '100.00', color: '#AA00AA' } // Purple
    };

    Object.keys(coinConfig).forEach(coinId => {
        event.addAdvanced(coinId, (item, advanced, text) => {
            const config = coinConfig[coinId];

            // 1. REBUILD THE TITLE (Unbolded, specific colors, literal ¤ symbol)
            const customTitle = Text.of(`${config.name} (¤${config.val})`).color(config.color);

            // 2. VAPORIZE THE OLD TOOLTIP LINES
            text.clear();

            // 3. REBUILD WITH NEW COLORS
            text.add(customTitle); // Adds the styled, unbolded title
            
            // Adds the footer text styled in electric blue (#55FFFF matches the light blue crown color)
            text.add(Text.of("Forgotten SMP Currency").color('#55FFFF').italic()); 
        });
    });
});