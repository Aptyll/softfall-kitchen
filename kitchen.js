// Everything the Kitchen shows. One entry per dish, newest first inside each stage.
// stage: 'board' (an idea), 'cooking' (being made), 'served' (in the game).
// A round is one sheet of options Noah looked at: its picture, and what came of it.
// How to add a dish or a round: README.md.
window.KITCHEN = {
  dishes: [
    // ------------------------------------------------------------ cooking
    {
      id: 'kitchen', name: 'The Kitchen', stage: 'cooking', date: '2026-10-20',
      line: 'This page. A window into how Softfall gets made.',
      cover: 'art/kitchen/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-10-20', img: 'art/kitchen/round-1.png',
          note: 'Three looks, mocked in the game. Picked B for the front page and C for each dish.' },
      ],
    },

    // ------------------------------------------------------------ served
    {
      id: 'armatos', name: 'Armatos', stage: 'served', date: '2026-10-20', patch: '0.504',
      line: 'The first hero. A shield-captain with a greatsword.',
      cover: 'art/armatos/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-10-10', img: 'art/armatos/round-1.png',
          note: 'Five looks in 3D. None picked: Softfall is flat, top-down pixel art.' },
        { name: 'Round 2', date: '2026-10-12', img: 'art/armatos/round-2.png',
          note: 'The same five, redrawn flat. Still none picked.' },
        { name: 'Round 4', date: '2026-10-20', img: 'art/armatos/round-4.png',
          note: 'At real size. F is his look, G his first skin, J his greatsword.' },
        { name: 'In the game', date: '2026-10-20', img: 'art/armatos/in-game.png', served: true },
      ],
    },
    {
      id: 'road-towers', name: 'Road Towers', stage: 'served', date: '2026-10-20', patch: '0.503',
      line: 'Two stone towers guard every lane, each with a great crossbow.',
      cover: 'art/road-towers/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-10-19', img: 'art/road-towers/round-1.png',
          note: 'Timber, stone or a blockhouse. Refined over the next round.' },
        { name: 'Round 3', date: '2026-10-19', img: 'art/road-towers/round-3.png',
          note: 'The Sentinel takes shape: cut stone, one big bolt.' },
        { name: 'Round 5', date: '2026-10-19', img: 'art/road-towers/round-5.png',
          note: 'The ballista in round 4 missed. L, the crossbow, is picked.' },
        { name: 'In the game', date: '2026-10-20', img: 'art/road-towers/in-game.png', served: true },
      ],
    },
    {
      id: 'orca', name: 'The Orca', stage: 'served', date: '2026-10-15', patch: '0.473',
      line: 'Something lives under the ice in the middle of the map.',
      cover: 'art/orca/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-10-14', img: 'art/orca/round-1.png', note: 'First looks. None picked.' },
        { name: 'Round 2', date: '2026-10-14', img: 'art/orca/round-2.png', note: 'D, the bold one, is picked.' },
        { name: 'In the game', date: '2026-10-15', img: 'art/orca/in-game.png', served: true },
        { name: 'The Short', date: '2026-10-15', video: 'art/orca/short.mp4', poster: 'art/orca/short-poster.jpg',
          link: 'https://www.youtube.com/@SoftfallYT' },
      ],
    },
    {
      id: 'deer-riding', name: 'Deer Riding', stage: 'served', date: '2026-10-12', patch: '0.406',
      line: 'Press E by a deer and ride it.',
      cover: 'art/deer-riding/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-10-12', img: 'art/deer-riding/round-1.png', note: 'Painted riders. None picked.' },
        { name: 'Round 2', date: '2026-10-12', img: 'art/deer-riding/round-2.png', note: 'Legless bodies. Called "beanbags". None picked.' },
        { name: 'Round 3', date: '2026-10-12', img: 'art/deer-riding/round-3.png', note: 'G: the real scout, sunk into the saddle. Picked.' },
        { name: 'In the game', date: '2026-10-12', img: 'art/deer-riding/in-game.png', served: true },
      ],
    },
    {
      id: 'merchant', name: 'The Merchant', stage: 'served', patch: '',
      line: 'Raises your base and sells to anyone who walks up.',
      cover: 'art/merchant/cover.png',
      rounds: [
        { name: 'Round 1', img: 'art/merchant/round-1.png', note: 'Three hooded robes. None picked.' },
        { name: 'Round 2', img: 'art/merchant/round-2.png', note: 'D, the fur hat and beard, is picked.' },
      ],
    },

    // ------------------------------------------------------------ on the board
    { id: 'harpoon', name: 'Harpoon', stage: 'board', line: 'A pull across the ice.' },
    { id: 'glider', name: 'Glider', stage: 'board', line: 'Leap from the roost, land anywhere.' },
    { id: 'zipline', name: 'Zipline', stage: 'board', line: 'Cut the line under a rider.' },
    { id: 'last-stand', name: 'Last Stand', stage: 'board', line: 'One fire at the roost. One against five.' },
    { id: 'mammoth', name: 'Mammoth', stage: 'board', line: 'Frozen in the glacier. Do not wake it.' },
    { id: 'iron-golem', name: 'Iron Golem Teamfight', stage: 'board', line: 'Something huge is buried under the fight.' },
    { id: 'minigames', name: 'Minigames', stage: 'board', line: 'Small games inside the valley.' },
    { id: 'fishing', name: 'Fishing', stage: 'board', line: 'A hole in the lake. Something bites back.' },
    { id: 'avalanche', name: 'Avalanche Event', stage: 'board', line: 'The slope gives way on a fight.' },
  ],
};
