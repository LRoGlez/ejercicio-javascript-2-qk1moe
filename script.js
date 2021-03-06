// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);
let iterar;

function onLoad() {
  let spanSelected = document.querySelector(".selected");
  console.log(spanSelected);
  getParent = spanSelected.parentNode;
  console.log(getParent);
  goToUl = getParent.parentNode;
  console.log(goToUl);
  getAllChild = goToUl.children;
  console.log(getAllChild);

  //poner clase element-i
  for (let i = 0; i < getAllChild.length; i++) {
    getAllChild[i].classList.add("element-" + (i + 1));
  }
  let getEvens = document.querySelectorAll("#list1 :nth-child(even)");

  console.log(getEvens);

  //eliminar pares
  for (let i = 0; i < getEvens.length; i++) {
    getEvens[i].remove();
  }
  //crear lista 2
  let crearList = document.querySelector("#list2");

  console.log(crearList);

  let item = document.createElement("li");
  let item2 = document.createElement("li");
  let item3 = document.createElement("li");

  crearList.appendChild(item);
  crearList.appendChild(item2);
  crearList.appendChild(item3);

  //crear botones
  let button1 = document.createElement("button");
  button1.type = "button";
  button1.innerText = "texto ejemplo 1";

  let button3 = document.createElement("button");
  button3.type = "button";
  button3.innerText = "texto ejemplo 3";

  let button5 = document.createElement("button");
  button5.type = "button";
  button5.innerText = "texto ejemplo 5";

  //insertar botones
  firstChildList2 = crearList.firstChild;
  firstChildList2.append(button1);

  secChildList2 = firstChildList2.nextSibling;
  secChildList2.append(button3);

  thChildList2 = secChildList2.nextSibling;
  thChildList2.append(button5);

  button5.setAttribute("disabled", "");
}
