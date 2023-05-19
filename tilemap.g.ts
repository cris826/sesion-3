// Código generado automáticamente. No editar.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "nivel1":
            case "nivel1":return tiles.createTilemap(hex`100010000101020404040404040404040404040801010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090701010a0909090909090909090909090901010305050505050505050505050506`, img`
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
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tilePath1,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.castle.tilePath6,sprites.castle.tilePath3,sprites.castle.tilePath5,sprites.castle.tilePath4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Código generado automáticamente. No editar.
