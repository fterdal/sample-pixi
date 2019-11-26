/* globals PIXI */
import * as PIXI from 'pixi.js'

import bunny from './images/bunny.png'
console.log(bunny)

let app = new PIXI.Application()
//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view)

// load the texture we need
app.loader.add("bunny", bunny).load((loader, resources) => {
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

  console.log(app.stage.children)

  // Listen for frame updates
  app.ticker.add(() => {
    // each frame we spin the bunny around a bit
    bunny.rotation += 0.01
  })
})
