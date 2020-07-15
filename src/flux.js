const getState = ({ getStore, getActions, setStore }) => {
  return {
    // base datos Angel
    store: {
      /////URL
      baseURL: "https://app.fakejson.com/q",
      // baseURL: "http://jarb29.pythonanywhere.com",
      baseUURL: "http://jarb29.pythonanywhere.com",
      // baseURL: 'http://127.0.0.1:5000',

      // claves de usuario
      nombre: "",
      apellido: "",
      email: "",
      telefono: "",
      clave: "",
      currentUser: null,
      isAuthenticated: false,
      error: null,
      // Nombre Producto

      avatar: "",
      nombreProducto: "",
      precio: "",
      categoria: "",
      descripcion: "",
      // Productos para la tienda
      tiendaSeleccionada: [],
      tiendatotal: [],
      tiendaSalsa: [],
      tiendatotalsalsa: [],

      // Carrito
      carrito: [],
      totalCarrito: [],

      // Productos comprados
      ItemProductoCompradoId: [],
      CantidaProductoComprado: [],
      precioProductoSeleccionado: [],
      cantidadProductoSeleccionado: [],
      // retorno productos comprados
      productosActualizados: [],

      // datos del retorno para el admintrador
      factura: [],
      detalleFactura: [],
      // Variables profile Page
      profile: [],
      // values contacto
      name: "",
      number: "",
      message: ""
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
        const store = getStore();

        let data = {
          token: "slS5hrWNux44dVW9LnfMUA",
          data: {
            id: "personNickname",
            email: "internetEmail",
            gender: "personGender",
            street: "addressStreetName",
            last_login: {
              date_time: "dateTime|UNIX",
              ip4: "internetIP4"
            },
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
            productosActualizados: dato
          });
        } else {
          setStore({
            error: dato
          });
        }
      }
    }
  };
};

export default getState;
