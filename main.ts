tiles.setCurrentTilemap(tilemap`map`);

let mySprite = sprites.create(assets.image`player`, SpriteKind.Player);
controller.moveSprite(mySprite);
scene.cameraFollowSprite(mySprite)

let myEnemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy);
tiles.placeOnRandomTile(myEnemy, assets.tile`ground`)
tilesAdvanced.followUsingPathfinding(myEnemy, mySprite, 50)