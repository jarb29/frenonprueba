const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base
    store: {
      /////URL
      baseURL: "https://app.fakejson.com/q",

      // El token solo permite 10000 hit per dar, cada uso de la pagina web suma 70 hit. 
      token: "L9bg6PhqeyyhuLBUB6WZHg",
      

      // Variables del retorno
      mensajes: [],
      hoteles: [],
      hotelesII: [],


      // Errores del retorno
      errorhoteles: [],
      errorMensaje: []

    },

    actions: {

  // funcion que obtienes los Hoteles
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
            errorhoteles: dato
          });
        } else {
          setStore({
            hoteles: dato,
            hotelesII: dato
          });
        }
      },

// funcion que obtiene los mensajes
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
            errorMensaje: dato
          });
        } else {
          setStore({
            mensajes: dato
          });
        }
      },

// Funcion para filtrar los hoteles
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
