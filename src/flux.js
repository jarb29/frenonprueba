const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base
    store: {
      /////URL
      baseURL: "https://app.fakejson.com/q",
      token: "L9bg6PhqeyyhuLBUB6WZHg",

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
        setStore({
          [e.target.name]: e.target.value
        });
      },

      // Compra de Productos

      hoteles: () => {
        const store = getStore();
        const { token } = store;
        let data = {
          token: token,
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
        const store = getStore();
        const { token } = store;
        let data = {
          token: token,
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
        if (e.target.value.length === 0) {
          setStore({ hoteles: store.hotelesII });
        } else {
          setStore({
            hoteles: store.hotelesII.filter(
              hotel =>
                hotel.companyName
                  .toLowerCase()
                  .slice(0, e.target.value.length) ===
                e.target.value.toLowerCase()
            )
          });
        }
      }
    }
  };
};

export default getState;
