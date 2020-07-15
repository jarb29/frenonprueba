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
      isAuthenticated: () => {
        if (sessionStorage.getItem("currentUser")) {
          // Restaura el contenido al campo de texto
          let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
          let isAuthenticated = sessionStorage.getItem("isAuthenticated");
          setStore({
            currentUser: currentUser,
            isAuthenticated: isAuthenticated
          });
        }
      },

      // inputs
      handlingInputs: e => {
        e.preventDefault();
        setStore({
          [e.target.name]: e.target.value
        });
      },
  
      // Compra de Productos

      productoComprado: () => {
        let data = {
          token: "slS5hrWNux44dVW9LnfMUA",
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
          token: "slS5hrWNux44dVW9LnfMUA",
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
