/* 
Older test suit
describe("Esto es una suite de pruebas", () => {
    test('Caso de prueba 1', () => {
      const result = 1 + 2 
      expect(result).toBe(3);
    });
  })
   */

  const MC = require('./../app/MissionCommander.js');

  describe('Suit test from MissionCommander class', () => {
    test('1. Create a mission commander object', () => {
      const missionCommander = new MC("Woopa");
      expect(missionCommander.name).toBe("Woopa");
    });
  });