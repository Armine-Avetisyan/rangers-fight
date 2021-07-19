
// export interface Ranger {
//   name: string;
//   age: number;
//   life: number;
//   clickCounter: number;
//   color?: string
// }

abstract class Player {
  name: string;
  match: number;
  life: number;
  protected constructor(name: string, match: number, life: number) {
    this.name = name;
    this.match = match;
    this.life = life;
  }

}

export  class Ranger extends Player{
  constructor(name: string, match: number, life: number){
    super(name, match, life)
  }
  rangerData() {
    return {
      name: this.name,
      match: this.match,
      life: this.life,
    }
  }

  start() {
    this.match = setInterval(() => {
      this.life -= Math.trunc(Math.random() * 10 + 1);
      console.log(`${this.name} - ${this.life}`)
    }, 1000)

  }

  finish() {
    clearInterval(this.match)
  }
}


