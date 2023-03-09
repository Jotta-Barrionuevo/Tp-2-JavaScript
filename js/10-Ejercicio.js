const numRows = parseInt(prompt("Introduce el número de filas:"));
const numCols = parseInt(prompt("Introduce el número de columnas:"));


const maxNum = numRows * numCols;


let currentNum = maxNum;


document.write("<table>");

for (let i = 0; i < numRows; i++) {
  document.write("<tr>");

  for (let j = 0; j < numCols; j++) {
    document.write(`<td>${currentNum}</td>`);
    currentNum--;
  }

  document.write("</tr>");
}

document.write("</table>");