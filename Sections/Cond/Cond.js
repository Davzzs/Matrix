document.addEventListener("DOMContentLoaded", function () {
    const frm = document.querySelector(".cl");
    const resp1 = frm.querySelector("h5");
    const resp2 = frm.querySelector("h6");
  
    frm.addEventListener("submit", function (e) {
      e.preventDefault();
      const nome = frm.querySelector("#inNome").value;
      const nota1 = Number(frm.querySelector("#inNota1").value);
      const nota2 = Number(frm.querySelector("#inNota2").value);
      const media = (nota1 + nota2) / 2;
      resp1.innerText = `Média das notas: ${media.toFixed(2)}`;
      if (media >= 7) {
        resp2.innerText = `Parabéns, ${nome}! Você foi aprovado`;
        resp2.style.color = "blue";
      } else {
        resp2.innerText = `Ops, ${nome}... Você foi reprovado`;
        resp2.style.color = "red";
      }
    });
  });

  