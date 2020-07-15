const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base datos Angel
    store: {
      /////URL
      baseURL: "https://app.fakejson.com/q",

      // Variables del retorno
      mensajes: [],
      hoteles: []


    },

    actions: {
      // autenticacion

      // inputs
      valoresEntrada: e => {
        e.preventDefault();
        console.log(e.target.name, "en el flux")
        console.log(e.target.value, "en el flux")
        setStore({
          [e.target.name]: e.target.value
        });
      },
  
      // Compra de Productos

      productoComprado: () => {
        let data = {
          token: "qEuV9ijUJN4sC_xFPSM7Tw",
          data: {
            id: "personNickname",
            companyName: "companyName",
            street: "addressStreetName",
            _repeat: 10
          }
        };
        getActions().productosComprados(data);
      },
      productosComprados: async data => {
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
            hoteles: dato
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
          },
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





    }
  };
};

export default getState;
