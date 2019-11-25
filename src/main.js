import * as PIXI from 'pixi.js'

console.log(PIXI)

let app = new PIXI.Application()

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view)
