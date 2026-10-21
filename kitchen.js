// Everything the Kitchen shows. One entry per dish, newest first inside each stage.
// stage: 'board' (an idea), 'cooking' (being made), 'served' (in the game).
// A round is one sheet of options Noah looked at: its picture, and what came of it.
// How to add a dish or a round: README.md.
window.KITCHEN = {
  dishes: [
    // ------------------------------------------------------------ cooking
    {
      id: 'armatos-splash', name: 'Armatos Splash', stage: 'cooking', date: '2026-10-21',
      line: 'The old standard-bearer, big, when you lock him in.',
      cover: 'art/armatos-splash/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-10-21', img: 'art/armatos-splash/round-1.png',
          note: 'Five styles from his game sprite to smooth paint, and two poses. M, chunky pixels, with Q, the sword planted, is picked.' },
        { name: 'Round 2', date: '2026-10-21', img: 'art/armatos-splash/round-2.png',
          note: 'The pick, polished: his face set by hand, cleaner fists, a halo behind him, and Iron Oath. Next: close the helm over his face.' },
        { name: 'Round 3', date: '2026-10-21', img: 'art/armatos-splash/round-3.png',
          note: 'His helm closes over his face: a spectacle guard, three takes on the eyes. S, a cold glint in each, is picked.' },
      ],
    },

    {
      id: 'fortiva-splash', name: 'Fortiva Splash', stage: 'cooking', date: '2026-10-21',
      line: 'Her big picture when you lock her in. Same chains, more room.',
      cover: 'art/fortiva-splash/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-10-21', img: 'art/fortiva-splash/round-1.png',
          note: 'One pose in four styles, from her game sprite to smooth paint. A, the big sprite, is picked.' },
        { name: 'Round 2', date: '2026-10-21', img: 'art/fortiva-splash/round-2.png',
          note: 'Her stance sketched four ways, and six places to stand. F, the blade planted, in K, the blizzard.' },
        { name: 'Round 3', date: '2026-10-21', img: 'art/fortiva-splash/round-3.png',
          note: 'The whole picture, twice: a halo of sun, or her arm out to the blade. O, the halo, is picked.' },
      ],
    },

    {
      id: 'kitchen', name: 'The Kitchen', stage: 'cooking', date: '2026-10-20',
      line: 'This page. A window into how Softfall gets made.',
      cover: 'art/kitchen/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-10-20', img: 'art/kitchen/round-1.png',
          note: 'Three looks, mocked in the game. Picked B for the front page and C for each dish.' },
      ],
    },

    {
      id: 'frost-reeds', name: 'Frost Reeds', stage: 'cooking', date: '2026-10-20', patch: '0.514',
      line: 'Deep snow becomes brush. Step into the reeds and the other team loses you.',
      cover: 'art/frost-reeds/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-10-20', img: 'art/frost-reeds/round-1.png',
          note: 'A tall bank, frost reeds or snow pillows. B, the frost reeds, is picked.' },
        { name: 'Round 1: the map', date: '2026-10-20', img: 'art/frost-reeds/round-1-map.png',
          note: 'Sixteen patches, mirrored across the creek. Picked as shown.' },
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
