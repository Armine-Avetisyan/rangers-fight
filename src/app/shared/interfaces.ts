
// export interface Ranger {
//   name: string;
//   age: number;
//   life: number;
//   clickCounter: number;
//   color?: string
// }

abstract class Player {
  name: string;
  age: number;
  life: number;
  protected constructor(name: string, age: number, life: number) {
    this.name = name;
    this.age = age;
    this.life = life;
  }

}

export  class Ranger extends Player{
  constructor(name: string, age: number, life: number){
    super(name, age, life)
  }
}


