// Everything the Kitchen shows. One entry per dish, newest first inside each stage.
// stage: 'board' (an idea), 'cooking' (being made), 'served' (in the game).
// A round is one sheet of options Noah looked at: its picture, and what came of it.
// How to add a dish or a round: README.md.
window.KITCHEN = {
  dishes: [
    // ------------------------------------------------------------ cooking
    {
      id: 'winter-map', name: 'The Winter Map', stage: 'cooking', date: '2026-11-10',
      line: 'Pine walls laid by hand, a river frozen solid, and one straight road through the stone ring.',
      cover: 'art/winter-map/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-11-10', img: 'art/winter-map/round-1.png',
          note: 'The stone ring keeps its walls and loses its ice and stepping stones, so the mid road runs straight through. Three floors, staged: plain snow, deep snow, or two drifts. Noah left it open, and the two drifts went in.' },
        { name: 'Round 2', date: '2026-11-10', img: 'art/winter-map/round-2.png',
          note: 'The river stops splitting the valley in half: it ends at the side lanes, gets more ice bridges, or freezes over. Noah picked B, frozen and walkable, with every fish gone and the bear at home.' },
        { name: 'Round 3', date: '2026-11-10', img: 'art/winter-map/round-3.png',
          note: 'The whole map again, with every tree wall placed on purpose and paths cut between the camps, the same for both sides. It is in the game now, with rounder walls.' },
      ],
    },

    {
      id: 'ability-icons', name: 'Ability Icons', stage: 'cooking', date: '2026-11-10',
      line: 'The keys of every hero in one colour of its own, and a small mark that says what each one does.',
      cover: 'art/ability-icons/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-11-10', img: 'art/ability-icons/round-1.png',
          note: 'Bold redraws for three heroes, with a corner mark borrowed from the health bar: A on the dark well, B on a colour per kind of ability. Noah picked B, but one colour per hero, not per kind.' },
        { name: 'Round 2', date: '2026-11-10', img: 'art/ability-icons/round-2.png',
          note: 'One glow per hero, light behind the picture and dark at the edges, the way League lights a kit. Noah said do it for all twenty.' },
      ],
    },

    {
      id: 'status-icons', name: 'Status Icons', stage: 'cooking', date: '2026-11-10',
      line: 'One small icon beside a health bar says what is holding that body, and how long it has left.',
      cover: 'art/status-icons/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-11-10', img: 'art/status-icons/round-1.png',
          note: 'Eight icons, staged on a frozen pond: thrown, pulled, frozen, stunned, rooted, blinded, weakened and slowed. The strongest one wins, and its fill drains as it wears off. Noah picked it as shown.' },
      ],
    },

    {
      id: 'robot-heroes', name: 'Robot Heroes', stage: 'cooking', date: '2026-11-10',
      line: 'Machines of the works, dug up by the empire and thrown out for refusing to do wrong.',
      cover: 'art/robot-heroes/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-11-10', img: 'art/robot-heroes/round-1.png',
          note: 'Three robots on the hero frame: a surveyor, a digger and a carrier. Noah picked B, the digger, and C, the carrier.' },
        { name: 'Round 2: Mensor', date: '2026-11-14', img: 'art/robot-heroes/round-2.png',
          note: 'Three looks for MENSOR, the surveyor: a sighting lens for an eye, a striped range rod on his back, or a long coat in his side\'s colour. Noah picked E, the range rod.' },
      ],
    },

    {
      id: 'readable-at-a-glance', name: 'Readable at a Glance', stage: 'cooking', date: '2026-11-10',
      line: 'A stranger should know in three seconds who they are, who is with them, and where the fight is.',
      cover: 'art/readable-at-a-glance/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-11-10', img: 'art/readable-at-a-glance/round-1.png',
          note: 'A staged fight at night, today beside four changes: bodies keep their light, your own bar goes green, every hero stands in a ring of its side\'s colour, and the names come off. The first three are picked. The names stay.' },
      ],
    },

    {
      id: 'wave-soldiers', name: 'Wave Soldiers', stage: 'cooking', date: '2026-11-09',
      line: 'The lanes get League\'s three kinds of bot: melee, ranged that throw snowballs, and siege that breaks towers.',
      cover: 'art/wave-soldiers/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-11-09', img: 'art/wave-soldiers/round-1.png',
          note: 'Four looks built on the real melee bot. B, the snowball arm, is the ranged bot, and D, the ballista cart, is the siege one.' },
      ],
    },

    {
      id: 'falco', name: 'Falco', stage: 'cooking', date: '2026-11-09',
      line: 'The kestrel. He let the old hunt\'s hawks fly free. One came back.',
      cover: 'art/falco/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-11-09', img: 'art/falco/round-1.png',
          note: 'Three looks and three knives on the real sprite. C, the Huntsman in the old hunt\'s green hat and cape, is his look, and D, a short throwing knife, is his blade.' },
      ],
    },

    {
      id: 'nix', name: 'Nix', stage: 'cooking', date: '2026-11-09',
      line: 'The snowblind. She keeps watch through the long nights so the valley can sleep.',
      cover: 'art/nix/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-11-09', img: 'art/nix/round-1.png',
          note: 'Three looks and three blades on the real sprite. A, the Snowblind in a night hood and bone goggles, is her look, and D, the ice dirk, is her blade.' },
      ],
    },

    {
      id: 'snow-beasts', name: 'Snow Beast Heroes', stage: 'cooking', date: '2026-11-09',
      line: 'Heroes who are animals: a bear, a snow leopard, and a reindeer with its young driver.',
      cover: 'art/snow-beasts/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-11-09', img: 'art/snow-beasts/round-1.png',
          note: 'Bruma the bear, Uncia the snow leopard and Trahea the reindeer, painted as lit shapes. They looked bad, so the method changed.' },
        { name: 'Round 2', date: '2026-11-10', img: 'art/snow-beasts/round-2.png',
          note: 'Redrawn flat on the game\'s pixel grid and checked by a reader who did not know what they were. The sides read, and the fronts turned three-quarter. Not built yet.' },
      ],
    },

    {
      id: 'steam-store', name: 'Steam Store Page', stage: 'cooking', date: '2026-11-09',
      line: 'New store screenshots, GIFs and a trailer for the five-on-five valley.',
      cover: 'art/steam-store/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-11-09', img: 'art/steam-store/round-1.png',
          note: 'Eight shots of the match, each marked real or staged. Staged fights are cleaner, so the fights are staged, the light is mostly day, and the trailer runs 60 seconds.' },
        { name: 'Round 2', date: '2026-11-10', img: 'art/steam-store/round-2.png',
          note: 'The first fights felt flat, so they were staged again up close, at the moment blows land. Six shots are kept, joined by the menu, the victory screen, the rabbit meadow and the old cistern wall above the creek, shown with no HUD.' },
      ],
    },

    {
      id: 'ignia', name: 'Ignia', stage: 'cooking', date: '2026-10-21',
      line: 'The firemage. She let the eternal flame go out so a village could keep warm.',
      cover: 'art/ignia/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-10-21', img: 'art/ignia/round-1.png',
          note: 'Three looks and three staffs on the real sprite. A, the Hearthkeeper, is her own look and C, the Wanderer, her first skin. The staffs look out of place, so they get another round.' },
        { name: 'Round 2', date: '2026-10-21', img: 'art/ignia/round-2.png',
          note: 'Three new staffs, and her side view redrawn so she does not shrink when she turns. G, a crook with a lantern on its hook, is picked.' },
        { name: 'Spotlight round 1', date: '2026-11-09', img: 'art/ignia/spotlight-round-1.png',
          note: 'Three first frames for her spotlight Short. A, the Wildfire jumping rival to rival, opens it. Staged in the game.' },
        { name: 'The spotlight', date: '2026-11-09', video: 'art/ignia/spotlight.mp4', poster: 'art/ignia/spotlight-poster.jpg',
          link: 'https://www.youtube.com/@SoftfallYT' },
      ],
    },

    {
      id: 'aura', name: 'Aura', stage: 'cooking', date: '2026-10-21',
      line: 'The northern light. She read in the stars that the fleet would sink, and it did.',
      cover: 'art/aura/cover.png',
      rounds: [
        { name: 'Round 1', date: '2026-10-21', img: 'art/aura/round-1.png',
          note: 'Three looks and three staffs on the real sprite. A, silver hair and a night mantle, is her look, now called the Northern Light, and F, a fallen star\'s shard, is her staff. One look for now.' },
        { name: 'The spotlight', date: '2026-11-10', video: 'art/aura/spotlight.mp4', poster: 'art/aura/spotlight-poster.jpg',
          link: 'https://www.youtube.com/@SoftfallYT' },
      ],
    },

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
      id: 'bella', name: 'Bella', stage: 'cooking', date: '2026-11-10',
      line: 'The imperial general. Swing first and her parry answers.',
      cover: 'art/bella/cover.png',
      rounds: [
        { name: 'The spotlight', date: '2026-11-10', video: 'art/bella/spotlight.mp4', poster: 'art/bella/spotlight-poster.jpg', note: 'Her kit, staged in the game.',
          link: 'https://www.youtube.com/@SoftfallYT' },
      ],
    },

    {
      id: 'fortiva', name: 'Fortiva', stage: 'cooking', date: '2026-11-10',
      line: 'Strength is the power to refuse to kneel. The longer the fight, the harder she is to stop.',
      cover: 'art/fortiva/cover.png',
      rounds: [
        { name: 'The spotlight', date: '2026-11-10', video: 'art/fortiva/spotlight.mp4', poster: 'art/fortiva/spotlight-poster.jpg', note: 'Her kit, staged in the game.',
          link: 'https://www.youtube.com/@SoftfallYT' },
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
        { name: 'Round 4', date: '2026-10-21', img: 'art/fortiva-splash/round-4.png',
          note: 'New armor and five faces, drawn pixel by pixel. U, the smirk, is picked.' },
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
        { name: 'Spotlight round 1', date: '2026-11-09', img: 'art/armatos/spotlight-round-1.png',
          note: 'Three first frames for his spotlight Short. A, Iron Verdict throwing two rivals up, opens it. Staged in the game.' },
        { name: 'The spotlight', date: '2026-11-09', video: 'art/armatos/spotlight.mp4', poster: 'art/armatos/spotlight-poster.jpg',
          link: 'https://www.youtube.com/@SoftfallYT' },
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
