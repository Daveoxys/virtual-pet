const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fenrir")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const pet = new Pet("Fenrir");
    expect(pet.name).toEqual("Fenrir");
  });

  it("Pet has a inital age of 0'", () => {
    const pet = new Pet("Fenrir");
    expect(pet.age).toEqual(0);
  });

  it("Pet initial hunger equals 0", () => {
    const pet = new Pet("Fenrir");
    expect(pet.hunger).toEqual(0);
  });

  it("Pet has a fitness level of 10", () => {
    const pet = new Pet("Fenrir");
    expect(pet.fitness).toEqual(10);
  });
});

describe("growUp", () => {
  it("increases pet age by 1", () => {
    const pet = new Pet("Fenrir");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it("increases hunger by 5", () => {
    const pet = new Pet("Fenrir");
    pet.growUp();
    expect(pet.hunger).toEqual(5);
  });

  it("decreases fitness by 3", () => {
    const pet = new Pet("Fenrir");
    pet.growUp();
    expect(pet.fitness).toEqual(7);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fenrir");
    pet.age = 31;
    expect(() => pet.growUp()).toThrow("404 Pets life not found");
  });
});

describe("walk", () => {
  it("increases fitness by 4", () => {
    const pet = new Pet("Fenrir");
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });

  it("increases fitness to a maximum of 10", () => {
    const pet = new Pet("Fenrir");
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fenrir");
    pet.fitness = 0;
    expect(() => pet.growUp()).toThrow("404 Pets life not found");
  });
});

describe("feed", () => {
  it("decreases hunger level by 3", () => {
    const pet = new Pet("Fenrir");
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toEqual(2);
  });

  it("decreses hunger to a minimum of 0", () => {
    const pet = new Pet("Fenrir");
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fenrir");
    pet.hunger = 11;
    expect(() => pet.feed()).toThrow("404 Pets life not found");
  });
});

describe("checkUp", () => {
  it("returns 'I need a walk' if pets fitness is 3 or below", () => {
    const pet = new Pet("Fenrir");
    pet.fitness = 2;
    expect(pet.checkUp()).toEqual("I need a walk");
  });

  it("returns 'I am hungry' if pets hunger is 5 or above", () => {
    const pet = new Pet("Fenrir");
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual("I am hungry");
  });

  it("returns 'I am hungry AND I need a walk' if hunger is 5+ and fitness is 0-3", () => {
    const pet = new Pet("Fenrir");
    pet.hunger = 6;
    pet.fitness = 2;
    expect(pet.checkUp()).toEqual("I am hungry AND I need a walk");
  });

  it("returns 'I feel great!' if hunger is below 5 and fitness is above 3", () => {
    const pet = new Pet("Fenrir");
    pet.hunger = 4;
    pet.fitness = 4;
    expect(pet.checkUp()).toEqual("I feel great!");
  });

  it("throws an error if the pet is not alive", () => {
    const pet = new Pet("Fenrir");
    pet.hunger = 11;
    expect(() => pet.feed()).toThrow("404 Pets life not found");
  });
});

describe("isAlive", () => {
  it("returns false if the pet is dead based on the fitness level", () => {
    const pet = new Pet("Fenrir");
    pet.fitness = 0;
    expect(pet.isAlive).toBe(false);
  });
  it("returns false if the pet is dead based on the hunger level", () => {
    const pet = new Pet("Fenrir");
    pet.hunger = 11;
    expect(pet.isAlive).toBe(false);
  });

  it("returns false if the pet is dead based on the age level", () => {
    const pet = new Pet("Fenrir");
    pet.age = 31;
    expect(pet.isAlive).toBe(false);
  });

  it("returns true if pet the is alive based on the fintess, hunger and age level", () => {
    const pet = new Pet("Fenrir");
    pet.fitness = 10;
    pet.hunger = 0;
    pet.age = 29;
    expect(pet.isAlive).toBe(true);
  });
});
