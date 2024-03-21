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
  const ELEM = document.querySelectorAll("section h2")[0];
  console.log("1. Feladat: ", ELEM.innerHTML);
}

function elemekElerese2() {
  /**Ide jön az 2.  feladat */
  const ELEM = document.getElementById("ide");
  return (ELEM.innerHTML = `<p>Jó reggelt!</p>`);
}

function elemekElerese3() {
  /**Ide jön az 3. feladat */
  const ELEM = document.getElementsByClassName("ide")[0];
  return (ELEM.innerHTML = `<p>Jó reggelt!</p>`);
}

function elemekElerese4() {
  /**Ide jön az 4. feladat */
  const ELEM = document.getElementsByClassName("lista")[0];

  let txt = "<ul>";
  for (let i = 0; i < 5; i++) {
    let rnd = Math.floor(Math.random() * 20) + 10;
    txt += `<li>${rnd}</li>`;
  }
  txt += `</ul>`;

  return (ELEM.innerHTML = txt);
}

function elemekFormazasa1() {
  /**Ide jön az 5. feladat */
  const ELEM = document.getElementsByClassName("lista")[0];
  return ELEM.classList.add("formazott");
}

function esemenyKezeles1() {
  /**Ide jön az 6. feladat */
  const ListaELEM = document.getElementsByClassName("lista")[0];
  const KattELEM = document.getElementsByClassName("kattintasutan")[0];

  function KattUtan() {
    KattELEM.innerHTML = ListaELEM.innerHTML;
  }

  return ListaELEM.addEventListener("click", KattUtan);
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
