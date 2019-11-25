import * as PIXI from "pixi.js"

let app = new PIXI.Application({
  backgroundColor: 0xf0f0f0
})

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view)

// load the texture we need
app.loader.add("bunny", "bunny.png").load((loader, resources) => {
  // This creates a texture from a 'bunny.png' image

  const bunny = new PIXI.Sprite(resources.bunny.texture)
  // Setup the position of the bunny
  bunny.x = app.renderer.width / 2
  bunny.y = app.renderer.height / 2

  // Rotate around the center
  bunny.anchor.x = 0.5
  bunny.anchor.y = 0.5

  // Add the bunny to the scene we are building
  // console.log(app.stage.addChild.toString())
  app.stage.addChild(bunny)

  // Listen for frame updates
  app.ticker.add(() => {
    // each frame we spin the bunny around a bit
    bunny.rotation += 0.01
  })
})
