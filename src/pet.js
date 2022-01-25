const minAge = 0; //pets minimum age
const maxAge = 30; //pets maximum age
const minHunger = 0; //pets minimun hunger level
const maxHunger = 10; //pets maximum hunger level
const minFitness = 0; //pets minimum fitness level
const maxFitness = 10; //pets maximum fitness level
const lessFit = 3; //pets fitness decreasing by 3 when growing up
const moreFit = 4; //pets fitness increasing when walked
const older = 1; //pets age increasing when growing up
const hungrier = 5; //pets hunger increasing by 5 when growing up
const fed = 3; //pets hunger decreases by 3 when fed
const isDead = "404 Pets life not found";

class Pet {
  constructor(name) {
    this.name = name;
    this.age = minAge;
    this.fitness = maxFitness;
    this.hunger = minHunger;
  }

  growUp() {
    if (!this.isAlive) {
      throw new Error(isDead);
    }
    this.age += older;
    this.hunger += hungrier;
    this.fitness -= lessFit;
  }

  walk() {
    if (!this.isAlive) {
      throw new Error(isDead);
    }
    if (this.fitness + moreFit <= maxFitness) {
      this.fitness += moreFit;
    } else {
      this.fitness = maxFitness;
    }
  }

  feed() {
    if (!this.isAlive) {
      throw new Error(isDead);
    } else if (this.hunger - fed >= minHunger) {
      this.hunger -= fed;
    } else {
      this.hunger = minHunger;
    }
  }

  checkUp() {
    const needWalk = this.fitness <= lessFit;
    const needFood = this.hunger >= hungrier;
    const walkFood = needWalk && needFood;

    if (!this.isAlive) {
      throw new Error(isDead);
    } else if (walkFood) {
      return "I am hungry AND I need a walk";
    } else if (needFood) {
      return "I am hungry";
    } else if (needWalk) {
      return "I need a walk";
    } else if (!walkFood) {
      return "I feel great!";
    }
  }

  get isAlive() {
    if (
      this.fitness <= minFitness ||
      this.hunger >= maxHunger ||
      this.age >= maxAge
    ) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Pet;
