namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLarge, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f f e 2 2 2 2 2 2 e e f . . 
. . f e 2 f f f f f f 2 e f . . 
. . f f f f e e e e f f f f . . 
. f f e f b f 4 4 f b f e f f . 
. f e e 4 1 f d d f 1 4 e e f . 
. . f e e d d d d d d e e f . . 
. . . f e e 4 4 4 4 e e f . . . 
. . e 4 f 2 2 2 2 2 2 f 4 e . . 
. . 4 d f 2 2 2 2 2 2 f d 4 . . 
. . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
. . . . . f f f f f f . . . . . 
. . . . . f f . . f f . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
tiles.setTilemap(tiles.createTilemap(
            hex`100010000c09090909090d0d0d0d0d09090d090c090d090909090d0d0d0d0d090e0d0909090d090909090d0d0d0d0d09090d0d09090d0c09090909090909090909090d09090d09090d0d0d0d0d0d0d090c090d090e0d09090909090909090e0909090d0e090d09090e090909090d09090d090d09090d090909090909090d09090d090d090d0d0d0d09090e09090d09090d090d09090d090909090909090d09090d090d09090d090909090909090d09090d090d09090d0909090e0909090d09090d090d0e090d090909090909090d09090d090d09090d0c090909090d0d0d09090d090d09090d0d0d0d0d0d0d090d09090d090d090b0909090e0909090e0909090d0e0909`,
            img`
. . . . . . 2 2 2 2 2 . . 2 . . 
. 2 . . . . 2 2 2 2 2 . . 2 . . 
. 2 . . . . 2 2 2 2 2 . . 2 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . 2 2 2 2 2 2 2 . . . 2 . 
. 2 . . . . . . . . . . . . 2 . 
. 2 . . . . . . . 2 . . 2 . 2 . 
. 2 . . . . . . . 2 . . 2 . 2 . 
2 2 2 2 . . . . . 2 . . 2 . 2 . 
. 2 . . . . . . . 2 . . 2 . 2 . 
. 2 . . . . . . . 2 . . 2 . 2 . 
. 2 . . . . . . . 2 . . 2 . 2 . 
. 2 . . . . . . . 2 . . 2 . 2 . 
. 2 . . . . . 2 2 2 . . 2 . 2 . 
. 2 2 2 2 2 2 2 . 2 . . 2 . 2 . 
. . . . . . . . . . . . 2 . . . 
`,
            [myTiles.tile0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthWest1,sprites.dungeon.doorOpenWest,sprites.dungeon.floorLight0,sprites.dungeon.doorClosedSouth,sprites.dungeon.floorLight2,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.dungeon.collectibleInsignia,sprites.dungeon.stairLarge,sprites.dungeon.stairLadder,sprites.dungeon.floorLightMoss,sprites.castle.tileGrass2],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
info.startCountdown(10)
