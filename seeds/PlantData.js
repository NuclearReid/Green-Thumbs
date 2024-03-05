const { Plant } = require('../models');
const plantData = [
  {
  "plantName": "Tomato",
  "planType": "Fruit",
  "plantDescription": "A versatile and popular garden fruit with a wide range of varieties.",
  "plantSeason": ["Spring", "Summer"],
  "plantLocation": ["QLD", "NSW", "VIC", "SA", "WA", "NT", "TAS", "ACT"]
  },
  {           
  "plantName": "Carrot",           
  "plantType": "Vegetable",           
  "plantDescription": "Root vegetable, typically orange in color, though purple, black, red, white, and yellow varieties exist.",           
  "plantSeason": ["Autumn", "Winter"],           
  "plantLocation": ["VIC", "TAS", "SA", "WA", "NSW", "QLD"]         
  },         
  {           
  "plantName": "Eucalyptus",           
  "plantType": "Tree",           
  "plantDescription": "Iconic Australian tree known for its aromatic leaves and used for oils, koala food, and timber.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Lavender",           
  "plantType": "Herb",           
  "plantDescription": "Fragrant herb used in cooking, cosmetics, and for its relaxing properties.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["TAS", "VIC", "SA", "NSW", "WA"]         
  },         
  {           
  "plantName": "Rose",           
  "plantType": "Flower",           
  "plantDescription": "Popular flowering plant known for its beauty and fragrance.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["SA", "VIC", "NSW", "QLD", "TAS", "WA"]         
  },         
  {           
  "plantName": "Lemon",           
  "plantType": "Fruit",           
  "plantDescription": "Citrus fruit known for its distinctive sour taste and culinary versatility.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["QLD", "NSW", "VIC", "SA", "WA", "NT", "ACT"]         
  },         
  {           
  "plantName": "Spinach",           
  "plantType": "Vegetable",           
  "plantDescription": "Leafy green vegetable rich in vitamins and minerals.",           
  "plantSeason": ["Autumn", "Winter", "Spring"],           
  "plantLocation": ["VIC", "TAS", "SA", "WA", "NSW", "QLD", "ACT"]         
  },         
  {           
  "plantName": "Wattle",           
  "plantType": "Tree",           
  "plantDescription": "Australian native plant known for its distinctive golden flowers.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["WA", "SA", "NSW", "VIC", "QLD", "NT", "TAS", "ACT"]         
  },
  {           
  "plantName": "Mint",           
  "plantType": "Herb",           
  "plantDescription": "Aromatic herb used in both culinary and medicinal applications.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["ACT", "NSW", "VIC", "QLD", "SA", "WA", "TAS"]         
  },         
  {           
  "plantName": "Sunflower",           
  "plantType": "Flower",           
  "plantDescription": "Tall plant with a large flowering head, known for its seeds and oil.",           
  "plantSeason": ["Summer"],           
  "plantLocation": ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS"]         
  },         
  {           
  "plantName": "Strawberry",           
  "plantType": "Fruit",           
  "plantDescription": "Sweet, red, heart-shaped fruit popular in desserts and as a fresh snack.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["QLD", "NSW", "VIC", "SA", "WA", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Zucchini",           
  "plantType": "Vegetable",           
  "plantDescription": "A type of summer squash that can grow to nearly a meter in length.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Banksia",           
  "plantType": "Tree",           
  "plantDescription": "Australian native plant known for its unique flower spikes and fruit cones.",           
  "plantSeason": ["Autumn", "Winter", "Spring"],           
  "plantLocation": ["WA", "SA", "NSW", "VIC", "QLD", "TAS"]         
  },         
  {           
  "plantName": "Basil",           
  "plantType": "Herb",           
  "plantDescription": "Culinary herb known for its fragrant leaves, used in a variety of cuisines.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["SA", "VIC", "NSW", "QLD", "WA", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Daffodil",           
  "plantType": "Flower",           
  "plantDescription": "Spring-blooming perennial with bright yellow flowers.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["TAS", "VIC", "SA", "NSW", "ACT"]         
  },
  {           
  "plantName": "Apple",           
  "plantType": "Fruit",           
  "plantDescription": "One of the most widely cultivated tree fruits, available in many varieties.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["NSW", "VIC", "TAS", "SA", "WA", "QLD", "ACT"]         
  },         
  {           
  "plantName": "Beetroot",           
  "plantType": "Vegetable",           
  "plantDescription": "Root vegetable known for its dark red color and sweet flavor.",           
  "plantSeason": ["Autumn", "Winter"],           
  "plantLocation": ["VIC", "TAS", "SA", "WA", "NSW", "QLD", "ACT"]         
  },         
  {           
  "plantName": "Grevillea",           
  "plantType": "Tree",           
  "plantDescription": "Native Australian plant known for its striking flowers and ability to attract wildlife.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["QLD", "NSW", "VIC", "SA", "WA", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Coriander",           
  "plantType": "Herb",           
  "plantDescription": "Culinary herb with a distinctive, strong flavor used in dishes worldwide.",           
  "plantSeason": ["Autumn", "Winter", "Spring"],           
  "plantLocation": ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Tulip",           
  "plantType": "Flower",           
  "plantDescription": "Bulbous spring-flowering plant with bold colors and a variety of shapes.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["TAS", "VIC", "SA", "NSW", "ACT"]         
  },         
  {           
  "plantName": "Peach",           
  "plantType": "Fruit",           
  "plantDescription": "Deciduous tree producing juicy fruits with velvety skin and sweet flesh.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["NSW", "VIC", "SA", "WA", "QLD", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Lettuce",           
  "plantType": "Vegetable",           
  "plantDescription": "Leaf vegetable commonly used in salads and sandwiches.",           
  "plantSeason": ["Spring", "Autumn"],           
  "plantLocation": ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Acacia",           
  "plantType": "Tree",           
  "plantDescription": "Known as wattle, these trees or shrubs are significant in the Australian landscape for their yellow fluffy flowers.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Parsley",           
  "plantType": "Herb",           
  "plantDescription": "Popular herb used for its curly or flat leaves, offering a mild, fresh flavor and garnish.",           
  "plantSeason": ["Spring", "Autumn"],           
  "plantLocation": ["SA", "VIC", "NSW", "QLD", "WA", "TAS", "ACT"]         
  },
  {           
  "plantName": "Chrysanthemum",           
  "plantType": "Flower",           
  "plantDescription": "Popular ornamental flower with a variety of colors and forms, traditionally used in teas and medicines.",           
  "plantSeason": ["Autumn", "Spring"],           
  "plantLocation": ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Cucumber",           
  "plantType": "Vegetable",           
  "plantDescription": "Long, green-skinned fruit with watery flesh, commonly used in salads and pickles.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Kangaroo Paw",           
  "plantType": "Flower",           
  "plantDescription": "Native Australian plant known for its unique bird-attracting flowers.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["WA", "SA", "VIC", "NSW", "QLD", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Capsicum",           
  "plantType": "Vegetable",           
  "plantDescription": "Also known as bell pepper, comes in various colors and is sweet and crunchy.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["QLD", "NSW", "VIC", "SA", "WA", "NT", "ACT"]         
  },         
  {           
  "plantName": "Waratah",           
  "plantType": "Flower",           
  "plantDescription": "Iconic Australian plant with striking red flowers, native to southeastern regions.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["NSW", "VIC", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Avocado",           
  "plantType": "Fruit",           
  "plantDescription": "Pear-shaped fruit with a creamy texture and rich flavor, popular in salads and spreads.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["NSW", "QLD", "WA", "NT", "SA"]         
  },         
  {           
  "plantName": "Potato",           
  "plantType": "Vegetable",           
  "plantDescription": "Starchy tuber popular worldwide, versatile in cooking.",           
  "plantSeason": ["Autumn", "Winter"],           
  "plantLocation": ["TAS", "VIC", "SA", "NSW", "QLD", "WA", "ACT"]         
  },         
  {           
  "plantName": "Bottlebrush",           
  "plantType": "Tree",           
  "plantDescription": "Australian native known for its cylindrical, brush-like flowers.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["QLD", "NSW", "VIC", "SA", "WA", "NT", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Rosemary",           
  "plantType": "Herb",           
  "plantDescription": "Aromatic herb with needle-like leaves, used in cooking, perfumery, and medicine.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["SA", "VIC", "NSW", "QLD", "WA", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Orchid",           
  "plantType": "Flower",           
  "plantDescription": "Diverse and widespread family of flowers with complex, often colorful and fragrant blooms.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT"]         
  },         
  {           
  "plantName": "Blueberry",           
  "plantType": "Fruit",           
  "plantDescription": "Small, blue-purple berries known for their antioxidant properties.",           
  "plantSeason": ["Winter", "Spring"],           
  "plantLocation": ["NSW", "VIC", "TAS", "SA", "QLD", "WA", "ACT"]         
  },
  {           
  "plantName": "Cauliflower",           
  "plantType": "Vegetable",           
  "plantDescription": "Edible flower head of a plant in the brassica family, often eaten as a vegetable.",           
  "plantSeason": ["Autumn", "Winter"],           
  "plantLocation": ["SA", "VIC", "TAS", "NSW", "QLD", "WA", "ACT"]         
  },         
  {           
  "plantName": "Frangipani",           
  "plantType": "Tree",           
  "plantDescription": "Tropical tree known for its distinctive fragrant flowers, ranging in color from white to pink and yellow.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["QLD", "NSW", "WA", "NT", "ACT"]         
  },         
  {           
  "plantName": "Basil",           
  "plantType": "Herb",           
  "plantDescription": "Aromatic herb used in various cuisines, particularly Italian, for its fresh or dried leaves.",           
  "plantSeason": ["Spring", "Summer"],           
  "plantLocation": ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT"]         
  },         
  {           
    "plantName": "Daffodil",           
    "plantType": "Flower",           
    "plantDescription": "Spring-blooming perennial with bright yellow flowers, symbolizing rebirth and new beginnings.",           
    "plantSeason": ["Winter", "Spring"],           
    "plantLocation": ["TAS", "VIC", "NSW", "SA", "ACT"]         
  },         
  {           
    "plantName": "Tomato",           
    "plantType": "Fruit",           
    "plantDescription": "Versatile fruit used in various dishes for its juicy texture and sweet to tangy flavor.",           
    "plantSeason": ["Spring", "Summer"],           
    "plantLocation": ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS", "ACT"]         
  },         
  {           
    "plantName": "Grevillea",           
    "plantType": "Tree",           
    "plantDescription": "Native Australian shrub or tree with distinctive flowers, attracting birds and insects.",           
    "plantSeason": ["Winter", "Spring"],           
    "plantLocation": ["NSW", "QLD", "VIC", "SA", "WA", "TAS", "ACT"]         
  }
];

const seedPlant = () => Plant.bulkCreate(plantData);

module.exports = seedPlant;