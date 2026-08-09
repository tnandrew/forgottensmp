// FORGOTTEN SMP - COMPLETE 4-PART MULTI-SCENE ECONOMY GUIDE

const ALL_BANK_CARDS = [
    "numismatics:white_card",
    "numismatics:orange_card",
    "numismatics:magenta_card",
    "numismatics:light_blue_card",
    "numismatics:yellow_card",
    "numismatics:lime_card",
    "numismatics:pink_card",
    "numismatics:gray_card",
    "numismatics:light_gray_card",
    "numismatics:cyan_card",
    "numismatics:purple_card",
    "numismatics:blue_card",
    "numismatics:brown_card",
    "numismatics:green_card",
    "numismatics:red_card",
    "numismatics:black_card"
];

Ponder.tags(event => {
    event.createTag(
        "kubejs:economy", 
        "numismatics:cog", 
        "Forgotten SMP Economy", 
        "Learn all about the SMP economy with this custom made ponder!", 
        ALL_BANK_CARDS
    );
});

Ponder.registry(event => {
    ALL_BANK_CARDS.forEach(cardId => {
        
        // ==========================================
        // SCENE 1: THE CORE ACCOUNT ONBOARDING GUIDE
        // ==========================================
        event.create(cardId)
            .scene("bank_card_onboarding", "1. Getting started with cards", (scene, util) => {
                scene.scaleSceneView(0.8);
                scene.setSceneOffsetY(-1);
                scene.showStructure();
                
                // Replace the 5x5 floor grid at Y=0 with create:layered_tuff
                for (let x = 0; x <= 4; x++) {
                    for (let z = 0; z <= 4; z++) {
                        scene.world.setBlock([x, 0, z], "create:layered_tuff", false);
                    }
                }
                
                scene.world.setBlock([2, 1, 2], "create:depot", true);
                scene.idle(20);

                scene.showControls(520, [2.5, 2.0, 2.5], "down")
                    .rightClick()
                    .withItem(cardId);
                scene.idle(20);

                scene.text(60, "Welcome to the SMP Economy!", [2.5, 2.2, 2.5]).attachKeyFrame();
                scene.idle(70);

                scene.text(80, "Walk up to a Banker NPC and right-click them using a card to begin. This creates an account and says Bound to {Your username} on the card.", [2.5, 2.2, 2.5]).attachKeyFrame();
                scene.idle(90);

                scene.text(70, "Use the GUI it provides to manage your card.", [2.5, 2.2, 2.5]).attachKeyFrame();
                scene.idle(80);

                scene.text(90, "Depositing takes all coins in your inventory and inputs them into the card you're holding!", [2.5, 2.2, 2.5]).attachKeyFrame();
                scene.idle(100);

                scene.text(80, "Withdrawals take coins out of your card and gives them to you.", [2.5, 2.2, 2.5]).attachKeyFrame();
                scene.idle(90);

                scene.text(60, "You can use the /bal command to see the balance of the card you're holding!", [2.5, 2.2, 2.5]).attachKeyFrame();
                scene.idle(70); 

                scene.world.setBlock([1, 1, 2], "numismatics:blaze_banker", true);
                scene.idle(10);
                
                scene.showControls(210, [1.5, 2.0, 2.5], "down")
                    .rightClick()
                    .withItem(cardId);

                scene.text(100, "You can add more cards to your account for friends using a blaze banker or right-clicking them to add them to your personal account.", [1.5, 2.0, 2.5]).attachKeyFrame();
                scene.idle(110);

                scene.text(100, "Pro tip! You can have multiple cards at once, just make sure you're holding the right one when the time comes! Have fun!", [1.5, 2.0, 2.5]).attachKeyFrame();
                scene.idle(110);
            });

        // ==========================================
        // SCENE 2: THE OFFICIAL SERVER ADMINSHOP
        // ==========================================
        event.create(cardId)
            .scene("admin_shop_guide", "2. Using the Adminshop", "kubejs:admin_shop", (scene, util) => {
                scene.scaleSceneView(0.8);
                scene.setSceneOffsetY(-1);
                
                // 1. LOAD STRUCTURE & SPAWN VILLAGER AT START
                scene.showStructure();
                
                // Villager Cashier present right from the beginning at [1.0, 2.0, 3.0]
                let cashierVillager = scene.world.createEntity("minecraft:villager", [1.0, 2.0, 3.0]);
                scene.idle(10);

                // 2. INTRO TEXT (Targeting table cloth area at 1,2,0)
                scene.text(90, "Welcome to the server adminshop/server shop!", [1.5, 2.5, 0.5]).attachKeyFrame();
                scene.idle(100);

                // 3. TABLECLOTH DEMONSTRATION (Targeting table cloth at 1,2,0)
                scene.text(120, "This is a table cloth, right-click them to get a shopping list with the item displayed added to it.", [1.5, 2.5, 0.5]).attachKeyFrame();
                
                scene.showControls(110, [1.5, 2.8, 0.5], "down")
                    .rightClick()
                    .withItem("create:shopping_list");
                scene.idle(130);

                // 4. CURRENCY EXPLANATION
                scene.text(130, "The adminshop uses Sprockets (¤ 1.00), which you can get from the ATM NPC by withdrawing them from your card.", [1.5, 2.5, 0.5]).attachKeyFrame();
                scene.idle(140);

                // 5. TRANSITION: CLEAR UPDATED TABLE CLOTH & CASING BLOCKS (1,1,0 and 1,2,0)
                scene.world.setBlock([1, 1, 0], "minecraft:air", false);
                scene.world.setBlock([1, 2, 0], "minecraft:air", false);
                scene.idle(20);

                // 6. CASHIER DIALOGUE (Targeting Villager Cashier at 1,2,3)
                scene.text(110, "Right-click the cashier with the list to get your items delivered onto the belt!", [1.5, 2.5, 3.5]).attachKeyFrame();
                
                scene.showControls(100, [1.0, 2.8, 3.0], "down")
                    .rightClick()
                    .withItem("create:shopping_list");
                scene.idle(120);

                // 7. OUTRO EXIT TEXT (Targeting Hypertube at 3,3,0)
                scene.text(120, "When you get everything, crouch under the hypertube to get out of the check-out booth! Happy shopping!", [3.5, 3.5, 0.5]).attachKeyFrame();
                scene.idle(130);
            });
      
        // ==========================================
        // SCENE 3: PLAYER SHOPS & DISCORD         
        // ==========================================
        event.create(cardId)
            .scene("player_shop_guide", "3. Player Shops At Spawn", "kubejs:player_shops", (scene, util) => {
                scene.scaleSceneView(0.8);
                scene.setSceneOffsetY(-1);
                
                // 1. LOAD PLAYER SHOPS SCHEMATIC
                scene.showStructure();
                scene.idle(30);

                
                let targetPos = [0.5, 2.5, 4.5];

                // 2. INTRO QUESTION
                scene.text(105, "Want something to do with all of your factories?", targetPos).attachKeyFrame();
                scene.idle(120);

                // 3. SYSTEM OVERVIEW
                scene.text(120, "The SMP actually has a simple and effective player shops at spawn system!", targetPos).attachKeyFrame();
                scene.idle(135);

                // 4. DISCORD APPLICATION INSTRUCTIONS
                scene.text(135, "Just head over to our discord and fill out the Shop Plot Owner application in #support-and-jobs!", targetPos).attachKeyFrame();
                scene.idle(150);

                // 5. RENT & CARD REQUIREMENTS
                scene.text(165, "Then when accepted, you must hold a card tied to the account you want to use for rent payments at the time we buy it for you.", targetPos).attachKeyFrame();
                scene.idle(180);

                // 6. DISCORD INTEGRATION PURPOSE
                scene.text(135, "We use discord to keep things organized and to avoid people abusing the system. Just as an FYI", targetPos).attachKeyFrame();
                scene.idle(150);

                // 7. OUTRO & WRAP-UP
                scene.text(150, "That's it! Read the message before starting the application for info on prices! Have fun with your shop!", targetPos).attachKeyFrame();
                scene.idle(165);
            });

        // ==========================================
        // SCENE 4: USING THE /PAY COMMAND
        // ==========================================
        event.create(cardId)
            .scene("bank_pay_guide", "4. Using the /pay command", (scene, util) => {
                scene.scaleSceneView(0.8);
                scene.setSceneOffsetY(-1);
                scene.showStructure();
                
                // Replace the 5x5 floor grid at Y=0 with create:layered_tuff
                for (let x = 0; x <= 4; x++) {
                    for (let z = 0; z <= 4; z++) {
                        scene.world.setBlock([x, 0, z], "create:layered_tuff", false);
                    }
                }
                scene.idle(20);

                // Spawn two villagers   
                let villager1Pos = [4.5, 2.2, 0.5]; //  Speech target above Villager 1
                let villager2Pos = [0.5, 2.2, 4.5]; //  Speech target above Villager 2

                let villager1 = scene.world.createEntity("minecraft:villager", [4.5, 1.0, 0.5]);
                let villager2 = scene.world.createEntity("minecraft:villager", [0.5, 1.0, 4.5]);
                scene.idle(20);

                // --- FIRST HALF: VILLAGER 1 SPEAKS ---
                scene.text(70, "Want to send someone some money?", villager1Pos).attachKeyFrame();
                scene.idle(80);

                scene.text(80, "Just use the /pay {Username} {Amount} command!", villager1Pos).attachKeyFrame();
                scene.idle(90);

                scene.text(90, "Just hold a card to transfer the money out of and do the command!", villager1Pos).attachKeyFrame();
                scene.idle(100);

                // --- SECOND HALF: VILLAGER 2 SPEAKS ---
                scene.text(110, "If the receiver is holding a card at the time, the money goes right into that account! If not, they get it in physical coins.", villager2Pos).attachKeyFrame();
                scene.idle(120);

                scene.text(90, "Quick note, you can't pay yourself to avoid breaking the purpose of the Bank!", villager2Pos).attachKeyFrame();
                scene.idle(100);

                scene.text(110, "If you have ideas/suggestions for new features or for these tutorials, make a suggestion on the discord! Happy banking!", villager2Pos).attachKeyFrame();
                scene.idle(120);
            });
    });
});