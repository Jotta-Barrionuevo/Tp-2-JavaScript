for (let i = 1; i <= 500; i++) {
    let line = i.toString();
  
    if (i % 4 === 0) {
      line += " (Múltiplo de 4)";
    }
    if (i % 9 === 0) {
      line += " (Múltiplo de 9)";
    }
  
    document.write(line + "<br>");
  
    if (i % 5 === 0) {
      document.write("————————————————————-<br>");
    }
  }