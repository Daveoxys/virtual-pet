const Pet = require("../src/pet");

describe("constructor", () => {
  it("returns an object", () => {
    expect(new Pet("Fenrir")).toBeInstanceOf(Object);
  });

  it("sets the name property", () => {
    const pet = new Pet("Fenrir");
    expect(pet.name).toEqual("Fenrir");
  });

  it("has a inital age of 0'", () => {
    const pet = new Pet("Fenrir");
    expect(pet.age).toEqual(0);
  });

  describe("growUp", () => {
    const pet = new Pet("Fenrir");
    pet.growUp();
    expect(pet.age).toEqual(1);
  });

  it("Pet initial hunger equals 0", () => {
    expect(pet.hunger).toEqual(0);
  });
});
