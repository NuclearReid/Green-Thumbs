const { Blog } = require("../models");
console.log("blogPostData");

//Blog posts
const blogData = [
  {
    title: "Best Time to Plant Tomatoes in VIC",
    body: "Planting tomatoes in Victoria achieves best results when started in early spring, as the frosty weather ends. Starting your seeds indoors around late August to September and transferring them outdoors in November can maximize yield.",
    blogLocation: ["VIC"]
  },
  {
{
    title: "When to Prune Roses in NSW",
    body: "In New South Wales, the ideal time for pruning roses is in late winter, around July to August, before the new growth starts. This timing helps stimulate fresh growth and blooms.",
    blogLocation: ["NSW"]
  },
  {
    title: "Growing Citrus Trees in QLD",
    body: "Queensland's climate is perfect for citrus trees, offering year-round growing conditions. Key tips include choosing a sunny spot, ensuring well-draining soil, and regular watering.",
    blogLocation: ["QLD"]
  },
  {
    title: "Organic Pest Control Strategies for SA Gardens",
    body: "Combat garden pests in South Australia using organic methods such as neem oil, diatomaceous earth, and encouraging beneficial insects by planting native flowers.",
    blogLocation: ["SA"]
  },
  {
    title: "Watering Tips for WA's Dry Climate",
    body: "In Western Australia's dry climate, efficient watering is crucial. Drip irrigation and watering in the early morning reduce evaporation and help plants thrive.",
    blogLocation: ["WA"]
  },
  {
    title: "Composting Basics for NT Gardeners",
    body: "Composting in the Northern Territory can fast-track due to the warm climate. Key components include a balance of green and brown materials, regular turning, and moisture control.",
    blogLocation: ["NT"]
  },
  {
    title: "Choosing Native Plants for TAS Gardens",
    body: "Tasmanian gardens benefit greatly from native plants like the Tasmanian Blue Gum. These plants are adapted to the local climate and support native wildlife.",
    blogLocation: ["TAS"]
  },
  {
    title: "Vertical Gardening Ideas for Small Spaces in ACT",
    body: "In the Australian Capital Territory, vertical gardening can maximize small spaces. Use wall planters, trellises, and hanging baskets to grow herbs, vegetables, and flowers.",
    blogLocation: ["ACT"]
  },
  {
    title: "Maintaining a Lawn in the Australian Summer",
    body: "Keeping a lawn green during Australia's summer requires deep, infrequent watering, mowing at a higher setting, and applying a slow-release fertilizer in the early summer.",
    blogLocation: ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS", "ACT"]
  },
  {
    title: "Creating a Wildlife-Friendly Garden",
    body: "Attract birds, bees, and beneficial insects by planting native flowering plants, setting up bird baths, and avoiding pesticides. A wildlife-friendly garden promotes biodiversity and ecosystem health.",
    blogLocation: ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS", "ACT"]
  }
];

console.log(blogData);
const seedBlogPost = () => Blog.bulkCreate(blogData);

module.exports = seedBlogPost;
