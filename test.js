class Father {
  constructor(name) {
    this.anme = name
  }
  say() {
    console.log(this.name)
  }
}

var son = new Son()
son.say()
