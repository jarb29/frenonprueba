const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base datos Angel
    store: {
      /////URL
      baseURL: "https://app.fakejson.com/q",

      // Variables del retorno
      mensajes: [],
      hoteles: [],
      hotelesII: []
    },

    actions: {
      // autenticacion

      // inputs
      valoresEntrada: e => {
        e.preventDefault();
        console.log(e.target.name, "en el flux");
        console.log(e.target.value, "en el flux");
        setStore({
          [e.target.name]: e.target.value
        });
      },

      // Compra de Productos

      hoteles: () => {
        let data = {
          token: "qEuV9ijUJN4sC_xFPSM7Tw",
          data: {
            id: "personNickname",
            companyName: "companyName",
            street: "addressStreetName",
            _repeat: 10
          }
        };
        getActions().hotelesRetorno(data);
      },
      hotelesRetorno: async data => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato, "para ver que llega");
        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            hoteles: dato,
            hotelesII: dato
          });
        }
      },

      mensajes: () => {
        let data = {
          token: "qEuV9ijUJN4sC_xFPSM7Tw",
          data: {
            id: "personNickname",
            name: "name",
            date_time: "dateTime|UNIX",
            message: "It is a long established fact that a reader will",
            _repeat: 10
          }
        };
        getActions().retornomensajes(data);
      },

      retornomensajes: async data => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL, {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        console.log(dato, "para ver que llega");
        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            mensajes: dato
          });
        }
      },

      filtro: e => {
        const store = getStore();
        console.log(e.target.name);
        console.log(store.hoteles, "hoteles");
        console.log(e.target.value.length);
        if (e.target.value.length === 0) {
          setStore({ hoteles: store.hotelesII });
        } else {
          setStore({
            hoteles: store.hotelesII.filter(
              hotel => hotel.companyName.toLowerCase().slice(0, e.target.value.length) === e.target.value.toLowerCase()
            )
          });
        }
      }
    }
  };
};

export default getState;
