const inputsColor = [...document.querySelectorAll("input[type=color]")];

const colors = [
  "#5f3dc4",
  "#7048e8",
  "#7950f2",
  "#845ef7",
  "#212529",
  "#495057",
  "#ced4da",
  "#f1f3f5",
  "#c92a2a",
  "#087f5b",
  "#f08c00",
  "#c6c7cd",
];

colors.forEach((style, index) => {
  inputsColor[index].value = style;
});

const criaCSS = () => {
  const form = document.querySelector('form');

  const elements = [...form];

  form.addEventListener('submit' , (e) => {
    e.preventDefault();
    const root = {};
  
    elements.forEach((elem) => {
      if (elem.tagName == "INPUT"){
        root[`--color-${elem.id}`] = elem.value;
      };
    });
    console.log(root);

    return root;
  
  })

};

criaCSS();
