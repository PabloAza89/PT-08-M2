var traverseDomAndCollectElements = function(matchFunc, startEl) {
  matchFunc = matchFunctionMaker();
  var resultSet = [startEl[2]];

  if (typeof startEl === "undefined") {
    startEl = document.documentElement.childNodes;
  }
  // var nodeList = startEl.childNodes;
  // for (let i = 0 ; i < nodeList.length ; i++) {
  //     resultSet.push(nodeList[i])
  // }
  return resultSet;

  // recorre el árbol del DOM y recolecta elementos que matcheen en resultSet
  // usa matchFunc para identificar elementos que matchien
  // TU CÓDIGO AQUÍ
};

// var $ = function(selector) {
//   var elements;
//   var selectorMatchFunc = matchFunctionMaker(selector);
//   elements = traverseDomAndCollectElements(selectorMatchFunc);
//   return elements;
// };

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
    matchFunction = function (el) {
      if (`#${el.id}` === selector) return true;
      return false;
    };
  } else if (selectorType === "class") {
    matchFunction = function(el) {
        if (el.classList.contains(selector.slice(1))) return true;
        return false;
    };
  }  else if (selectorType === "tag") {
    matchFunction = function (el) {
      if (el.tagName.toLowerCase() === selector) return true;
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = function (el) {
      const arr = el.classList;
      var [tagBuscado, classBuscado] = selector.split(".");
      for (let i = 0 ; i < arr.length ; i++) {
        if (tagBuscado + '.' + classBuscado === el.tagName.toLowerCase() + "." + el.classList[i]) return true;
        return false;
      }
    }
  }  
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};