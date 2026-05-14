import type { Experience, ExperienceCategory } from "./experience.interface";

const categories: ExperienceCategory[] = [
  "Adventure",
  "Culture",
  "Food",
  "Wellness",
  "Nature",
];

const destinations = [
  "Kyoto, Japan",
  "Lisbon, Portugal",
  "Cusco, Peru",
  "Marrakech, Morocco",
  "Reykjavik, Iceland",
  "Medellin, Colombia",
  "Cape Town, South Africa",
  "Seoul, South Korea",
  "Queenstown, New Zealand",
  "Istanbul, Turkiye",
  "Mexico City, Mexico",
  "Nairobi, Kenya",
  "Barcelona, Spain",
  "Hanoi, Vietnam",
  "Athens, Greece",
  "Chiang Mai, Thailand",
  "Dubrovnik, Croatia",
  "Cartagena, Colombia",
  "Edinburgh, Scotland",
  "Ubud, Indonesia",
];

const titleByCategory: Record<ExperienceCategory, string[]> = {
  Adventure: [
    "Canyon Sunrise Trek",
    "Coastal Cliff Kayak",
    "Volcano Ridge Hike",
    "Desert Night Trail",
    "Glacier Valley Expedition",
  ],
  Culture: [
    "Old Town Story Walk",
    "Living Heritage Workshop",
    "Local Traditions Circuit",
    "Artisan District Discovery",
    "Architecture and Memory Tour",
  ],
  Food: [
    "Street Flavor Crawl",
    "Market-to-Table Session",
    "Regional Kitchen Lab",
    "Night Bites Journey",
    "Farm and Fire Feast",
  ],
  Wellness: [
    "Mountain Breath Retreat",
    "Coastal Reset Ritual",
    "Forest Sound Healing",
    "Sunrise Yoga Escape",
    "Thermal Calm Session",
  ],
  Nature: [
    "Wetland Birdwatch Escape",
    "Rainforest Canopy Route",
    "Wild Coast Discovery",
    "Highland Lakes Circuit",
    "Stargazing Reserve Night",
  ],
};

function buildDescription(category: ExperienceCategory, destination: string): string {
  const categoryNarrative: Record<ExperienceCategory, string> = {
    Adventure:
      "A dynamic route led by expert local hosts with a strong focus on safety and authentic terrain.",
    Culture:
      "An immersive encounter with local history, neighborhoods, and community voices.",
    Food:
      "A curated tasting and cooking journey that highlights regional ingredients and culinary identity.",
    Wellness:
      "A restorative experience designed to balance movement, mindful pauses, and natural surroundings.",
    Nature:
      "A low-impact exploration through protected landscapes and biodiversity hotspots.",
  };

  return `${categoryNarrative[category]} Hosted in ${destination} for travelers seeking meaningful connection.`;
}

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const idNumber = index + 1;
  const category = categories[index % categories.length];
  const destination = destinations[index % destinations.length];
  const titleBase = titleByCategory[category][index % titleByCategory[category].length];

  return {
    id: `exp-${String(idNumber).padStart(3, "0")}`,
    title: `${titleBase} - Edition ${idNumber}`,
    description: buildDescription(category, destination),
    category,
    destination,
    price: 35 + (idNumber % 15) * 12,
    rating: Number((4.1 + (idNumber % 9) * 0.1).toFixed(1)),
    imageUrl: `https://picsum.photos/seed/wanderlust-${idNumber}/900/600`,
  };
});
