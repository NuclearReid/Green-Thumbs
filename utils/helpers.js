module.exports = {
  plantEmoji: (plantType) => {
    if (plantType === "Tree") {
      return "🌲"; // Tree emoji
    } else if (plantType === "Fruit") {
      return "🍒"; // Fruit emoji
    } else if (plantType === "Vegetable") {
      return "🥦";
    } else if (plantType === "Flower") {
      return "🌺";
    } else if (plantType === "Herb") {
      return "🌿";
    }
  },
};
