// Central content model for the site. Every field here is what a non-technical
// owner would edit to change bird info, prices, categories, etc.
// See README.md -> "How to change bird information" for plain-language instructions.

export type Parrot = {
  slug: string;
  name: string;
  species: string;
  category: string;
  price: number;
  age: string;
  gender: "Male" | "Female" | "Pair" | "Unsexed";
  colour: string;
  health: string;
  vaccinated: boolean;
  feedingGuide: string;
  careInstructions: string;
  availability: "In Stock" | "Booked" | "Coming Soon";
  images: string[];
  description: string;
  featured?: boolean;
};

export const categories = [
  {
    slug: "african-grey",
    name: "African Grey",
    blurb: "Exceptional talkers, prized for intelligence and clarity of speech.",
    image: "/images/parrots/african-grey.jpg",
  },
  {
    slug: "macaw",
    name: "Macaw",
    blurb: "Large, vividly coloured, and full of personality.",
    image: "/images/parrots/macaw-blue-gold.jpg",
  },
  {
    slug: "cockatiel",
    name: "Cockatiel",
    blurb: "Gentle, affectionate companions, ideal for families.",
    image: "/images/parrots/cockatiel.jpg",
  },
  {
    slug: "budgie",
    name: "Budgie",
    blurb: "Cheerful, easy-care birds bursting with colour.",
    image: "/images/parrots/budgie.jpg",
  },
  {
    slug: "lovebird",
    name: "Lovebirds",
    blurb: "Small, playful, and bonded for life — sold as pairs.",
    image: "/images/parrots/lovebird.jpg",
  },
  {
    slug: "amazon-parrot",
    name: "Amazon Parrot",
    blurb: "Bold, expressive, and remarkably social birds.",
    image: "/images/parrots/amazon-parrot.jpg",
  },
];

export const parrots: Parrot[] = [
  {
    slug: "congo-african-grey-rehan",
    name: "Rehan",
    species: "Congo African Grey",
    category: "african-grey",
    price: 185000,
    age: "8 months",
    gender: "Male",
    colour: "Grey with red tail",
    health: "Excellent — vet checked on arrival",
    vaccinated: true,
    feedingGuide:
      "Premium parrot pellet mix, fresh vegetables daily, occasional fruit, cuttlebone for calcium.",
    careInstructions:
      "Needs daily mental stimulation and social interaction. Cage size minimum 24x24x36 inches.",
    availability: "In Stock",
    images: [
      "/images/parrots/african-grey-1.jpg",
      "/images/parrots/african-grey-2.jpg",
    ],
    description:
      "Rehan is a young Congo African Grey already mimicking household sounds. Hand-raised and comfortable around people, he's an excellent choice for a first-time Grey owner ready for a long-term companion.",
    featured: true,
  },
  {
    slug: "blue-gold-macaw-sultan",
    name: "Sultan",
    species: "Blue & Gold Macaw",
    category: "macaw",
    price: 320000,
    age: "1.5 years",
    gender: "Male",
    colour: "Blue & Gold",
    health: "Excellent — full health certificate available",
    vaccinated: true,
    feedingGuide:
      "Macaw seed & nut blend, fresh fruit, leafy greens, limit high-fat nuts to treats only.",
    careInstructions:
      "Large flight cage or aviary recommended. Highly social — needs 2+ hours out-of-cage time daily.",
    availability: "In Stock",
    images: [
      "/images/parrots/macaw-blue-gold-1.jpg",
      "/images/parrots/macaw-blue-gold-2.jpg",
    ],
    description:
      "Sultan is a striking, confident Blue & Gold Macaw with a calm temperament around visitors. A showpiece bird for an experienced or committed new owner.",
    featured: true,
  },
  {
    slug: "scarlet-macaw-noor",
    name: "Noor",
    species: "Scarlet Macaw",
    category: "macaw",
    price: 365000,
    age: "2 years",
    gender: "Female",
    colour: "Red, Yellow & Blue",
    health: "Excellent",
    vaccinated: true,
    feedingGuide:
      "Fortified pellet base with fresh produce; avocado and chocolate strictly avoided.",
    careInstructions:
      "Enjoys climbing and foraging toys. Needs a firm, consistent routine.",
    availability: "Booked",
    images: [
      "/images/parrots/macaw-scarlet-1.jpg",
      "/images/parrots/macaw-scarlet-2.jpg",
    ],
    description:
      "Noor is a vibrant, well-socialised Scarlet Macaw currently reserved. Contact us to join the waitlist for her next available clutch-mate.",
  },
  {
    slug: "cockatiel-pearl-mishu",
    name: "Mishu",
    species: "Pearl Cockatiel",
    category: "cockatiel",
    price: 18000,
    age: "5 months",
    gender: "Male",
    colour: "Pearl grey & white",
    health: "Excellent",
    vaccinated: true,
    feedingGuide: "Cockatiel seed mix with millet spray treats and fresh greens twice a week.",
    careInstructions: "Loves to whistle and be handled. Great for families with children.",
    availability: "In Stock",
    images: ["/images/parrots/cockatiel-1.jpg", "/images/parrots/cockatiel-2.jpg"],
    description:
      "Mishu is a gentle Pearl Cockatiel, hand-tamed and already whistling simple tunes. A wonderful entry point into bird ownership.",
    featured: true,
  },
  {
    slug: "budgie-pair-sky-sun",
    name: "Sky & Sun",
    species: "English Budgerigar",
    category: "budgie",
    price: 9000,
    age: "6 months",
    gender: "Pair",
    colour: "Blue & Yellow",
    health: "Excellent",
    vaccinated: true,
    feedingGuide: "Budgie seed mix, cuttlebone, occasional leafy greens.",
    careInstructions: "Best kept in pairs. Enjoys mirrors, swings, and bells.",
    availability: "In Stock",
    images: ["/images/parrots/budgie-1.jpg", "/images/parrots/budgie-2.jpg"],
    description:
      "Sky & Sun are a bonded budgie pair, lively and low-maintenance — perfect for a first aviary or apartment setup.",
  },
  {
    slug: "lovebird-pair-gulabi",
    name: "Gulabi Pair",
    species: "Peach-Faced Lovebird",
    category: "lovebird",
    price: 14000,
    age: "7 months",
    gender: "Pair",
    colour: "Peach & Green",
    health: "Excellent",
    vaccinated: true,
    feedingGuide: "Lovebird seed mix, sprouted grains, fresh vegetables.",
    careInstructions: "Bonded pair — should not be separated. Enjoys chewing toys.",
    availability: "In Stock",
    images: ["/images/parrots/lovebird-1.jpg", "/images/parrots/lovebird-2.jpg"],
    description:
      "A devoted, colourful Peach-Faced Lovebird pair, ideal for anyone wanting the charm of lovebirds without the space needs of larger parrots.",
    featured: true,
  },
  {
    slug: "amazon-parrot-baba",
    name: "Baba",
    species: "Blue-Fronted Amazon",
    category: "amazon-parrot",
    price: 145000,
    age: "1 year",
    gender: "Male",
    colour: "Green with blue face",
    health: "Excellent",
    vaccinated: true,
    feedingGuide: "Amazon pellet blend, fresh fruit, vegetables, whole grains.",
    careInstructions: "Confident and vocal — thrives with daily interaction and training games.",
    availability: "Coming Soon",
    images: ["/images/parrots/amazon-parrot-1.jpg", "/images/parrots/amazon-parrot-2.jpg"],
    description:
      "Baba is a bold, expressive Blue-Fronted Amazon arriving soon — reserve early, as our Amazons are rarely available for long.",
  },
];

export const reviews = [
  {
    name: "Bilal Ahmed",
    location: "Karachi",
    rating: 5,
    text:
      "Brought home a Congo African Grey from MashAllah Parrot House — healthy, well socialised, and exactly as described. The team answered every question before and after the sale.",
  },
  {
    name: "Sana Malik",
    location: "Lahore (delivered)",
    rating: 5,
    text:
      "Our lovebird pair arrived in perfect condition. Careful packaging and constant WhatsApp updates during transit. Highly recommend.",
  },
  {
    name: "Hamza Sheikh",
    location: "Karachi",
    rating: 5,
    text:
      "Atta and Imran clearly love what they do. They spent an hour with us before we chose our macaw, no pressure at all. Five stars easily.",
  },
  {
    name: "Ayesha Raza",
    location: "Islamabad",
    rating: 4,
    text:
      "Great experience overall — the cockatiel we bought is thriving. Would love more feeding accessories in stock next time.",
  },
];

export const blogPosts = [
  {
    slug: "beginner-parrot-feeding-guide",
    title: "The Beginner's Guide to Feeding Your Parrot",
    excerpt:
      "A balanced diet is the single biggest factor in a parrot's lifespan. Here's what to feed, what to avoid, and how much.",
    category: "Feeding",
    readTime: "6 min read",
    body: [
      "A varied, pellet-based diet supplemented with fresh vegetables is healthier for most parrots than a seed-only diet, which tends to be high in fat and low in essential vitamins.",
      "Introduce new foods gradually and alongside familiar ones — parrots can be cautious about unfamiliar textures and colours at first.",
      "Avoid avocado, chocolate, caffeine, onion, and garlic entirely, as these are toxic to parrots even in small amounts.",
      "Fresh water should be changed daily, and food dishes cleaned to prevent bacterial growth in Karachi's warmer months.",
    ],
  },
  {
    slug: "signs-your-parrot-is-unwell",
    title: "7 Early Signs Your Parrot May Be Unwell",
    excerpt:
      "Parrots hide illness instinctively. Learn the subtle behavioural changes worth watching for.",
    category: "Health",
    readTime: "5 min read",
    body: [
      "In the wild, showing weakness makes a bird a target — so parrots instinctively mask illness until it's advanced. Owners need to watch closely.",
      "Watch for fluffed feathers held constantly (not just during rest), reduced appetite, changes in droppings, and unusual quietness.",
      "Sitting at the bottom of the cage, laboured breathing, or discharge from the eyes or nostrils are signs that need same-day veterinary attention.",
      "When in doubt, contact us or a licensed avian vet — early intervention makes a significant difference in outcomes.",
    ],
  },
  {
    slug: "teaching-your-parrot-to-talk",
    title: "Teaching Your Parrot to Talk: A Realistic Timeline",
    excerpt:
      "Not every species talks the same way. Here's what to expect from an African Grey vs a Budgie.",
    category: "Training",
    readTime: "7 min read",
    body: [
      "African Greys are among the most capable talkers and may begin mimicking sounds within a few months of consistent interaction, while some species may never speak clearly.",
      "Short, repeated daily sessions in a calm environment work better than long, infrequent ones.",
      "Associate words with actions and objects consistently — saying 'up' every time you lift your bird helps it connect language to meaning, not just sound.",
      "Patience matters more than method. Some birds simply prefer whistling or mimicking sounds over words, and that's perfectly normal.",
    ],
  },
  {
    slug: "setting-up-first-cage",
    title: "Setting Up Your First Cage the Right Way",
    excerpt:
      "Size, bar spacing, perch placement, and toy rotation — the essentials before your bird comes home.",
    category: "Care",
    readTime: "8 min read",
    body: [
      "Bigger is almost always better — a cage should allow full wing extension and short flights, not just room to turn around.",
      "Bar spacing should match the species: too wide, and small birds like budgies can squeeze through or get stuck.",
      "Place perches of varying diameters and textures to support healthy foot muscles, and avoid placing the cage in direct, harsh sunlight or drafts.",
      "Rotate two or three toys weekly rather than filling the cage at once — novelty keeps a parrot mentally engaged.",
    ],
  },
];

export const faqs = [
  {
    q: "How do I book a parrot?",
    a: "Browse the Shop page, open the bird you're interested in, and tap 'Book Now' or message us directly on WhatsApp. We'll confirm availability and arrange payment and pickup or delivery.",
  },
  {
    q: "Do you deliver outside Karachi?",
    a: "Yes, we arrange careful, climate-considerate delivery to major cities across Pakistan. Delivery cost depends on distance and is confirmed on WhatsApp before booking.",
  },
  {
    q: "Are your birds vaccinated and health-checked?",
    a: "Every bird listed as vaccinated has been checked by our veterinary partner before sale. Health status is listed on each bird's product page.",
  },
  {
    q: "Can I visit before buying?",
    a: "Absolutely — we welcome visits to our Karachi location by appointment. Message us on WhatsApp to arrange a time.",
  },
  {
    q: "What if my parrot falls ill shortly after purchase?",
    a: "Contact us immediately on WhatsApp or phone. We support customers with guidance and, where applicable, our health guarantee terms shared at the time of sale.",
  },
  {
    q: "Do you provide cages and feed?",
    a: "Yes, we stock cages, feed, and accessories. Ask us when booking your bird and we can bundle everything you need.",
  },
];
