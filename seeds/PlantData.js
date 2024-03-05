const { Plant } = require('../models');
const plantData = [
        {
          "plant_name": "Tomato",
          "plant_type": "Fruit",
          "plant_description": "A versatile and popular garden fruit with a wide range of varieties.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["QLD", "NSW", "VIC", "SA", "WA", "NT", "TAS", "ACT"]
        },
        {
          "plant_name": "Carrot",
          "plant_type": "Vegetable",
          "plant_description": "Root vegetable, typically orange in color, though purple, black, red, white, and yellow varieties exist.",
          "plant_season": ["Autumn", "Winter"],
          "plant_location": ["VIC", "TAS", "SA", "WA", "NSW", "QLD"]
        },
        {
          "plant_name": "Eucalyptus",
          "plant_type": "Tree",
          "plant_description": "Iconic Australian tree known for its aromatic leaves and used for oils, koala food, and timber.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS", "ACT"]
        },
        {
          "plant_name": "Lavender",
          "plant_type": "Herb",
          "plant_description": "Fragrant herb used in cooking, cosmetics, and for its relaxing properties.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["TAS", "VIC", "SA", "NSW", "WA"]
        },
        {
          "plant_name": "Rose",
          "plant_type": "Flower",
          "plant_description": "Popular flowering plant known for its beauty and fragrance.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["SA", "VIC", "NSW", "QLD", "TAS", "WA"]
        },
        {
          "plant_name": "Lemon",
          "plant_type": "Fruit",
          "plant_description": "Citrus fruit known for its distinctive sour taste and culinary versatility.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["QLD", "NSW", "VIC", "SA", "WA", "NT", "ACT"]
        },
        {
          "plant_name": "Spinach",
          "plant_type": "Vegetable",
          "plant_description": "Leafy green vegetable rich in vitamins and minerals.",
          "plant_season": ["Autumn", "Winter", "Spring"],
          "plant_location": ["VIC", "TAS", "SA", "WA", "NSW", "QLD", "ACT"]
        },
        {
          "plant_name": "Wattle",
          "plant_type": "Tree",
          "plant_description": "Australian native plant known for its distinctive golden flowers.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["WA", "SA", "NSW", "VIC", "QLD", "NT", "TAS", "ACT"]
        },
        {
          "plant_name": "Mint",
          "plant_type": "Herb",
          "plant_description": "Aromatic herb used in both culinary and medicinal applications.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["ACT", "NSW", "VIC", "QLD", "SA", "WA", "TAS"]
        },
        {
          "plant_name": "Sunflower",
          "plant_type": "Flower",
          "plant_description": "Tall plant with a large flowering head, known for its seeds and oil.",
          "plant_season": ["Summer"],
          "plant_location": ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS"]
        },
        {
          "plant_name": "Strawberry",
          "plant_type": "Fruit",
          "plant_description": "Sweet, red, heart-shaped fruit popular in desserts and as a fresh snack.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["QLD", "NSW", "VIC", "SA", "WA", "TAS", "ACT"]
        },
        {
          "plant_name": "Zucchini",
          "plant_type": "Vegetable",
          "plant_description": "A type of summer squash that can grow to nearly a meter in length.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT"]
        },
        {
          "plant_name": "Banksia",
          "plant_type": "Tree",
          "plant_description": "Australian native plant known for its unique flower spikes and fruit cones.",
          "plant_season": ["Autumn", "Winter", "Spring"],
          "plant_location": ["WA", "SA", "NSW", "VIC", "QLD", "TAS"]
        },
        {
          "plant_name": "Basil",
          "plant_type": "Herb",
          "plant_description": "Culinary herb known for its fragrant leaves, used in a variety of cuisines.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["SA", "VIC", "NSW", "QLD", "WA", "TAS", "ACT"]
        },
        {
          "plant_name": "Daffodil",
          "plant_type": "Flower",
          "plant_description": "Spring-blooming perennial with bright yellow flowers.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["TAS", "VIC", "SA", "NSW", "ACT"]
        },
        {
          "plant_name": "Apple",
          "plant_type": "Fruit",
          "plant_description": "One of the most widely cultivated tree fruits, available in many varieties.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["NSW", "VIC", "TAS", "SA", "WA", "QLD", "ACT"]
        },
        {
          "plant_name": "Beetroot",
          "plant_type": "Vegetable",
          "plant_description": "Root vegetable known for its dark red color and sweet flavor.",
          "plant_season": ["Autumn", "Winter"],
          "plant_location": ["VIC", "TAS", "SA", "WA", "NSW", "QLD", "ACT"]
        },
        {
          "plant_name": "Grevillea",
          "plant_type": "Tree",
          "plant_description": "Native Australian plant known for its striking flowers and ability to attract wildlife.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["QLD", "NSW", "VIC", "SA", "WA", "TAS", "ACT"]
        },
        {
          "plant_name": "Coriander",
          "plant_type": "Herb",
          "plant_description": "Culinary herb with a distinctive, strong flavor used in dishes worldwide.",
          "plant_season": ["Autumn", "Winter", "Spring"],
          "plant_location": ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "ACT"]
        },
        {
          "plant_name": "Tulip",
          "plant_type": "Flower",
          "plant_description": "Bulbous spring-flowering plant with bold colors and a variety of shapes.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["TAS", "VIC", "SA", "NSW", "ACT"]
        },
        {
          "plant_name": "Peach",
          "plant_type": "Fruit",
          "plant_description": "Deciduous tree producing juicy fruits with velvety skin and sweet flesh.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["NSW", "VIC", "SA", "WA", "QLD", "TAS", "ACT"]
        },
        {
          "plant_name": "Lettuce",
          "plant_type": "Vegetable",
          "plant_description": "Leaf vegetable commonly used in salads and sandwiches.",
          "plant_season": ["Spring", "Autumn"],
          "plant_location": ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT"]
        },
        {
          "plant_name": "Acacia",
          "plant_type": "Tree",
          "plant_description": "Known as wattle, these trees or shrubs are significant in the Australian landscape for their yellow fluffy flowers.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS", "ACT"]
        },
        {
          "plant_name": "Parsley",
          "plant_type": "Herb",
          "plant_description": "Popular herb used for its curly or flat leaves, offering a mild, fresh flavor and garnish.",
          "plant_season": ["Spring", "Autumn"],
          "plant_location": ["SA", "VIC", "NSW", "QLD", "WA", "TAS", "ACT"]
        },
        {
          "plant_name": "Chrysanthemum",
          "plant_type": "Flower",
          "plant_description": "Popular ornamental flower with a variety of colors and forms, traditionally used in teas and medicines.",
          "plant_season": ["Autumn", "Spring"],
          "plant_location": ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT"]
        },
        {
          "plant_name": "Cucumber",
          "plant_type": "Vegetable",
          "plant_description": "Long, green-skinned fruit with watery flesh, commonly used in salads and pickles.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS", "ACT"]
        },
        {
          "plant_name": "Kangaroo Paw",
          "plant_type": "Flower",
          "plant_description": "Native Australian plant known for its unique bird-attracting flowers.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["WA", "SA", "VIC", "NSW", "QLD", "TAS", "ACT"]
        },
        {
          "plant_name": "Capsicum",
          "plant_type": "Vegetable",
          "plant_description": "Also known as bell pepper, comes in various colors and is sweet and crunchy.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["QLD", "NSW", "VIC", "SA", "WA", "NT", "ACT"]
        },
        {
          "plant_name": "Waratah",
          "plant_type": "Flower",
          "plant_description": "Iconic Australian plant with striking red flowers, native to southeastern regions.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["NSW", "VIC", "TAS", "ACT"]
        },
        {
          "plant_name": "Avocado",
          "plant_type": "Fruit",
          "plant_description": "Pear-shaped fruit with a creamy texture and rich flavor, popular in salads and spreads.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["NSW", "QLD", "WA", "NT", "SA"]
        },
        {
          "plant_name": "Potato",
          "plant_type": "Vegetable",
          "plant_description": "Starchy tuber popular worldwide, versatile in cooking.",
          "plant_season": ["Autumn", "Winter"],
          "plant_location": ["TAS", "VIC", "SA", "NSW", "QLD", "WA", "ACT"]
        },
        {
          "plant_name": "Bottlebrush",
          "plant_type": "Tree",
          "plant_description": "Australian native known for its cylindrical, brush-like flowers.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["QLD", "NSW", "VIC", "SA", "WA", "NT", "TAS", "ACT"]
        },
        {
          "plant_name": "Rosemary",
          "plant_type": "Herb",
          "plant_description": "Aromatic herb with needle-like leaves, used in cooking, perfumery, and medicine.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["SA", "VIC", "NSW", "QLD", "WA", "TAS", "ACT"]
        },
        {
          "plant_name": "Orchid",
          "plant_type": "Flower",
          "plant_description": "Diverse and widespread family of flowers with complex, often colorful and fragrant blooms.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT"]
        },
        {
          "plant_name": "Blueberry",
          "plant_type": "Fruit",
          "plant_description": "Small, blue-purple berries known for their antioxidant properties.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["NSW", "VIC", "TAS", "SA", "QLD", "WA", "ACT"]
        },
        {
          "plant_name": "Cauliflower",
          "plant_type": "Vegetable",
          "plant_description": "Edible flower head of a plant in the brassica family, often eaten as a vegetable.",
          "plant_season": ["Autumn", "Winter"],
          "plant_location": ["SA", "VIC", "TAS", "NSW", "QLD", "WA", "ACT"]
        },
        {
          "plant_name": "Frangipani",
          "plant_type": "Tree",
          "plant_description": "Tropical tree known for its distinctive fragrant flowers, ranging in color from white to pink and yellow.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["QLD", "NSW", "WA", "NT", "ACT"]
        },
        {
          "plant_name": "Basil",
          "plant_type": "Herb",
          "plant_description": "Aromatic herb used in various cuisines, particularly Italian, for its fresh or dried leaves.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["VIC", "NSW", "QLD", "SA", "WA", "TAS", "ACT"]
        },
        {
          "plant_name": "Daffodil",
          "plant_type": "Flower",
          "plant_description": "Spring-blooming perennial with bright yellow flowers, symbolizing rebirth and new beginnings.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["TAS", "VIC", "NSW", "SA", "ACT"]
        },
        {
          "plant_name": "Tomato",
          "plant_type": "Fruit",
          "plant_description": "Versatile fruit used in various dishes for its juicy texture and sweet to tangy flavor.",
          "plant_season": ["Spring", "Summer"],
          "plant_location": ["NSW", "QLD", "VIC", "SA", "WA", "NT", "TAS", "ACT"]
        },
        {
          "plant_name": "Grevillea",
          "plant_type": "Tree",
          "plant_description": "Native Australian shrub or tree with distinctive flowers, attracting birds and insects.",
          "plant_season": ["Winter", "Spring"],
          "plant_location": ["NSW", "QLD", "VIC", "SA", "WA", "TAS", "ACT"]
        }     
];

const seedPlant = () => Plant.bulkCreate(plantData);

module.exports = seedPlant;