const { GameOfLife } = require('../GameOfLife');

describe('Test in the GameOfLife class', () => {
  test('A live cell that have 2 neighbours stills alive', () => {
    expect(GameOfLife.liveOrDie(2, 1)).toBe(1);
  });
  
  test('A died cell that have exactly 3 neighbours become live cell', ()=> {
    expect(GameOfLife.liveOrDie(3, 0)).toBe(1);
  });
  
  test('A life cell thath have exactly 3 neighbours still live ',()=> {
    expect(GameOfLife.liveOrDie(3, 1)).toBe(1);
  });

  test('A life cell that have more than 3 neighbours becomes a death cell', () => {
    expect(GameOfLife.liveOrDie(4, 1)).toBe(0);
  });

  test('A life cell that have less than 2 neighbours becomes a death cell', () => {
    expect(GameOfLife.liveOrDie(1, 1)).toBe(0);
  });
});