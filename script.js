window.addEventListener("load", function () {
  elemekElerese1();
  elemekElerese2();
  elemekElerese3();
  elemekElerese4();
  elemekFormazasa1();
  esemenyKezeles1();
  esemenyKezeles2();
  esemenyKezeles3();
  esemenyKezeles4();
});

function elemekElerese1() {
  /**Ide jön az első feladat */
  const ELEM = $("section h2").eq(0);
  console.log("1. Feladat: ", ELEM.html());
}

function elemekElerese2() {
  /**Ide jön az 2.  feladat */
  const ELEM = $("#ide");
  return ELEM.html(`<p>Jóóó reggelt!</p>`);
}

function elemekElerese3() {
  /**Ide jön az 3. feladat */
  const ELEM = $(".ide").eq(0);
  return ELEM.html(`<p>Nagyon jó reggelt!</p>`);
}

function elemekElerese4() {
  /**Ide jön az 4. feladat */
  const ELEM = $(".lista").eq(0);

  let txt = "<ul>";
  for (let i = 0; i < 5; i++) {
    let rnd = Math.floor(Math.random() * 20) + 10;
    txt += `<li>${rnd}</li>`;
  }
  txt += `</ul>`;

  return ELEM.html(txt);
}

function elemekFormazasa1() {
  /**Ide jön az 5. feladat */
  const ELEM = $(".lista").eq(0);
  return ELEM.addClass("formazott");
}

function esemenyKezeles1() {
  /**Ide jön az 6. feladat */
  const ListaELEM = $(".lista").eq(0);
  const KattELEM = $(".kattintasutan").eq(0);

  return ListaELEM.on("click", () => {
    KattELEM.html() = ListaELEM.html();
  });
}

function esemenyKezeles2() {
  /**Ide jön az 7. feladat */
  const FeladatELEM = document.getElementsByClassName("feladat")[0];
  FeladatELEM.innerHTML = `<button>OK</button>`;
  const GombELEM = document.getElementsByTagName("button")[0];
  const KepELEM = document.querySelectorAll("html .kep img")[0];

  function Beagyazas() {
    FeladatELEM.innerHTML = KepELEM;
  }

  return GombELEM.addEventListener("click", Beagyazas);
}

function esemenyKezeles3() {
  /**Ide jön az 8. feladat */
  const KepELEM = document.querySelector(".kep img");

  function Nagyobb() {
    KepELEM.style.height = "120%";
    KepELEM.style.width = "110%";
  }

  function Normal() {
    KepELEM.style.height = "100%";
    KepELEM.style.width = "100%";
  }

  return (
    KepELEM.addEventListener("mouseenter", Nagyobb),
    KepELEM.addEventListener("mouseleave", Normal)
  );
}

// !!! Nem működik egyenlőre !!!!

function esemenyKezeles4() {
  /**Ide jön az 9. feladat */
  const ELEM = document.querySelectorAll(".elem");

  function Masolas(event) {
    ELEM.src = event.target.src;
  }

  const szamok = document.querySelectorAll(".tarolo");

  for (let i = 0; i < szamok.length; i++) {
    szamok[i].addEventListener("click", Masolas);
  }
}
