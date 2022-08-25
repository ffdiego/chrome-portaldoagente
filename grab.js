function grabData() {
  //const table = document.getElementById("table_aereo_disponibilidade_i");
  const rows = document.querySelectorAll(
    "#table_aereo_disponibilidade_i > tbody > tr"
  );
  let flights = [];

  rows.forEach((row) => {
    let flight = {
      cia: [],
      num: [],
      saida: [],
      chegada: [],
      origem: [],
      destino: [],
      modelo_aviao: [],
      preco: {
        tipo: [],
        base: [],
        familia: [],
        valor: [],
      },
      preco_bag: {
        tipo: [],
        base: [],
        familia: [],
        valor: [],
      },
    };
    td = row.querySelectorAll("td");
    //0 book button (discarded)
    //1 flight company

    td[1].querySelectorAll("div>span").forEach((span) => {
      flight.cia.push(span.innerText);
    });

    //2 flight number
    td[2].querySelectorAll("span").forEach((span) => {
      flight.num.push(span.innerText);
    });

    //3 departure time
    td[3].querySelectorAll("span").forEach((span) => {
      flight.saida.push(span.innerText);
    });

    //4 arrival time
    td[4].querySelectorAll("span").forEach((span) => {
      if (span.innerText) flight.chegada.push(span.innerText);
    });

    //5 departure airport
    td[5].querySelectorAll("span").forEach((span) => {
      if (span.innerText) flight.origem.push(span.innerText);
    });

    //6 arrival airport
    td[6].querySelectorAll("span").forEach((span) => {
      flight.destino.push(span.innerText);
    });

    //7 escala (discarded)

    //8 plane model
    td[8].querySelectorAll("span").forEach((span) => {
      flight.modelo_aviao.push(span.innerText);
    });

    //9 info buttons (discarded)
    //10 space (discarded)

    //11 fare type
    td[11].querySelectorAll("span").forEach((span) => {
      flight.preco.tipo.push(span.innerText);
    });
    //12 fare base
    td[12].querySelectorAll("div > a").forEach((span) => {
      flight.preco.base.push(span.innerText);
    });

    //13 price
    td[13]
      .querySelectorAll("div > div:nth-child(1) > span:nth-child(1)")
      .forEach((span) => {
        flight.preco.familia.push(span.innerText);
      });
    td[13]
      .querySelectorAll("div > div:nth-child(2) > span:nth-child(2)")
      .forEach((span) => {
        if (span.innerText) flight.preco.valor.push(span.innerText);
      });

    //14 space2 (discarded)

    //15 fare type L
    td[15].querySelectorAll("span").forEach((span) => {
      flight.preco_bag.tipo.push(span.innerText);
    });

    //16 fare base L
    td[16].querySelectorAll("div > a").forEach((span) => {
      flight.preco_bag.base.push(span.innerText);
    });

    //17 price L
    td[17]
      .querySelectorAll("div > div:nth-child(1) > span:nth-child(1)")
      .forEach((span) => {
        flight.preco_bag.familia.push(span.innerText);
      });
    td[17]
      .querySelectorAll("div > div:nth-child(2) > span:nth-child(2)")
      .forEach((span) => {
        if (span.innerText) flight.preco_bag.valor.push(span.innerText);
      });

    flights.push(flight);
  });
  const data = flights;
  chrome.storage.local.set({ voos: flights }, (result) => {
    console.log("capturei voos:", result);
  });
  chrome.runtime.sendMessage("OpenTab!");
}
grabData();
