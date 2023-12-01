const colors = ["синий", "черный", "зеленый", "красный", "желтый", "зеленый"];

function createColorString() {
  const filteredColors = colors
    .filter((color) => {
      if (color === "черный" || color === "красный" || color === "желтый")
        return color;
    })
    .join("-");

  return filteredColors;
}

console.log(createColorString());
