var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matcheen en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ
  // var selector = startEl;
//   var matchFunc = function (startEl) {
//     return el.tagName && (startEl.tagName.toLowerCase() === selector.toLowerCase());
// };
  
};

var selectorTypeMatcher = function(selector) {
// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag
// tu código aquí
  if (typeof selector !== 'string') return false;
  if (selector[0] === '#') return `id`;
  if (selector[0] === '.') return `class`;
  if (selector.slice(1).includes('.')) return `tag.class`;
  else return `tag`;
  
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") {
    matchFunction = true;
  } else if (selectorType === "class") {
    matchFunction = true;
  } else if (selectorType === "tag.class") {
    matchFunction = true;
  } else if (selectorType === "tag") {
    matchFunction = true;
  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
