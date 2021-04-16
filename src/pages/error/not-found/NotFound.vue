<i18n>
{
  "zh-TW": {
    "title": "頁面不存在",
  },
  "en-US": {
    "title": "Page not found"
  }
}
</i18n>

<template lang="pug">
canvas#banner(ref="banner")
</template>

<script>
class Shape {
  constructor (x = 0, y = 0, canvas = null) {
    this.x = x
    this.y = y
    this.degree = Math.floor(Math.random() * 360)
    this.canvas = canvas
  }

  static get size () {
    return 20
  }

  static degreeToRadius (degree) {
    return Math.PI * degree / 180
  }

  update () {
    this.degree += 1
    this.degree %= 360
    this.y += 1
    if (this.y >= this.canvas.height + Shape.size) { this.y = -Shape.size }
  }
}
class Circle extends Shape {
  static get color () {
    return '#0dc589'
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.arc(
      this.x,
      this.y,
      Circle.size,
      0,
      Math.PI * 2,
      false
    )
    ctx.fillStyle = Circle.color
    ctx.fill()
  }
}
class Square extends Shape {
  static get color () {
    return '#faad06'
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.moveTo(
      this.x - Square.size * Math.sin(Square.degreeToRadius(this.degree)),
      this.y + Square.size * Math.cos(Square.degreeToRadius(this.degree))
    )
    for (let i = 1; i <= 3; ++i) {
      ctx.lineTo(
        this.x - Square.size * Math.sin(Square.degreeToRadius(this.degree + i * 90)),
        this.y + Square.size * Math.cos(Square.degreeToRadius(this.degree + i * 90))
      )
    }
    ctx.fillStyle = Square.color
    ctx.fill()
  }
}
class Triangle extends Shape {
  static get color () {
    return '#f67057'
  }

  static get width () {
    return Triangle.size * Math.sin(Triangle.degreeToRadius(120)) / Math.sin(Triangle.degreeToRadius(30))
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.moveTo(
      this.x - Triangle.size * Math.sin(Triangle.degreeToRadius(this.degree)),
      this.y + Triangle.size * Math.cos(Triangle.degreeToRadius(this.degree))
    )
    for (let i = 1; i <= 2; ++i) {
      ctx.lineTo(
        this.x - Triangle.size * Math.sin(Triangle.degreeToRadius(this.degree + i * 120)),
        this.y + Triangle.size * Math.cos(Triangle.degreeToRadius(this.degree + i * 120))
      )
    }
    ctx.closePath()
    ctx.fillStyle = Triangle.color
    ctx.fill()
  }
}
class Star extends Shape {
  static get color () {
    return '#399dff'
  }

  static get shrink () {
    return Star.size * Math.sin(Star.degreeToRadius(18)) / Math.sin(Star.degreeToRadius(126))
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.moveTo(
      this.x - Star.size * Math.sin(Star.degreeToRadius(this.degree)),
      this.y + Star.size * Math.cos(Star.degreeToRadius(this.degree))
    )
    for (let i = 1; i <= 9; ++i) {
      ctx.lineTo(
        this.x - ((i % 2 ? Star.shrink : Star.size) * Math.sin(Star.degreeToRadius(this.degree + (i * 36)))),
        this.y + ((i % 2 ? Star.shrink : Star.size) * Math.cos(Star.degreeToRadius(this.degree + (i * 36))))
      )
    }
    ctx.fillStyle = Star.color
    ctx.fill()
  }
}

export default {
  name: 'content',
  data () {
    return {
      img404: new Image(),
      canvas: null,
      ctx: null,
      numberOf: {
        circle: 10,
        square: 10,
        star: 10,
        triangle: 10
      },
      shapes: []
    }
  },
  methods: {
    genShapes () {
      this.shapes = []
      for (let i = 0; i < this.numberOf.circle; ++i) {
        this.shapes.push(new Circle(
          Math.floor(Math.random() * window.innerWidth),
          Math.floor(Math.random() * window.innerHeight),
          this.canvas
        ))
      }
      for (let i = 0; i < this.numberOf.square; ++i) {
        this.shapes.push(new Square(
          Math.floor(Math.random() * window.innerWidth),
          Math.floor(Math.random() * window.innerHeight),
          this.canvas
        ))
      }
      for (let i = 0; i < this.numberOf.triangle; ++i) {
        this.shapes.push(new Triangle(
          Math.floor(Math.random() * window.innerWidth),
          Math.floor(Math.random() * window.innerHeight),
          this.canvas
        ))
      }
      for (let i = 0; i < this.numberOf.star; ++i) {
        this.shapes.push(new Star(
          Math.floor(Math.random() * window.innerWidth),
          Math.floor(Math.random() * window.innerHeight),
          this.canvas
        ))
      }
    },
    animation () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.shapes.forEach((shape) => {
        shape.draw(this.ctx)
        shape.update()
      })
      this.ctx.drawImage(
        this.img404,
        this.canvas.width > this.img404.size ? (this.canvas.width - this.img404.size) / 2 : 0,
        this.canvas.height > this.img404.size ? (this.canvas.height - this.img404.size) / 2 : 0,
        this.canvas.width > this.img404.size ? this.img404.size : this.canvas.width,
        this.canvas.width > this.img404.size ? this.img404.size : this.canvas.width
      )
      requestAnimationFrame(this.animation)
    }
  },
  mounted () {
    try {
      this.canvas = this.$refs.banner
      this.canvas.width = window.innerWidth
      this.canvas.height = window.innerHeight
      this.ctx = this.canvas.getContext('2d')

      this.img404.src = require('@/assets/image/icon/404.png')
      this.img404.size = 1135

      this.genShapes()
      this.animation()

      window.addEventListener('resize', () => {
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.genShapes()
      })
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style scoped lang="scss">
#banner {
  // [ layout ]
  display: block;

  // [ skin ]
  height: 100vh;
  width: 100%;
  background-color: #213262;
}
</style>
