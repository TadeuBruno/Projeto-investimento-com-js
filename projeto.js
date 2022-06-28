function invest() {
    var tn1 = document.getElementById("txtn1");
    var tn2 = document.querySelector("input#txtn2"); //# pq usei o id, se fosse classe era o .
    var n1 = Number(tn1.value);
    var n2 = Number(tn2.value);
    var s = n1 * ((Math.pow(1 + 0.005, n2) - 1) / 0.005);
    var res = document.getElementById("res");
    if ((n1 == 0) | (n2 == 0)) {
      res.innerHTML += `<p>[ERRO] FALTAM DADOS</p>`;
    } else {
      res.innerHTML =
        "Ao final do prazo estabelecido você terá o total de: R$" +
        s.toFixed(2);
    }
  }