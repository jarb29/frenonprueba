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
      // imagen
      handleChangeFile: e => {
        e.preventDefault();
        setStore({
          avatar: e.target.files[0]
        });
      },

      // Registro usuario

      registroUsuario: (e, history) => {
        e.preventDefault();
        const store = getStore();

        let data = {
          nombre: store.nombre,
          email: store.email,
          clave: store.clave,
          apellido: store.apellido,
          telefono: store.telefono
        };
        getActions().registroUsuarioEmpresa(
          "/api/tienda/register",
          data,
          history
        );
      },

      registroUsuarioEmpresa: async (url, data, history) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
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
            currentUser: dato,
            isAuthenticated: true,
            error: null
          });
          sessionStorage.setItem("currentUser", JSON.stringify(dato));
          sessionStorage.setItem("isAuthenticated", true);
          history.push("/tortas");
        }
      },

      // Login usuario
      logingUsuario: (e, history) => {
        //e.preventDefault();

        const store = getStore();
        let data = {
          email: store.email,
          clave: store.clave
        };

        getActions().loging("/api/tienda/loging", data, history);
      },

      loging: async (url, data, history) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
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
            currentUser: dato,
            isAuthenticated: true,
            error: null
          });
          sessionStorage.setItem("currentUser", JSON.stringify(dato));
          sessionStorage.setItem("isAuthenticated", true);
          history.push("/tortas");
        }
      },

      // Login out
      logout: (e, history) => {
        sessionStorage.removeItem("currentUser");
        sessionStorage.removeItem("isAuthenticated");
        setStore({
          currentUser: null,
          isAuthenticated: false,
          carrito: [],
          totalCarrito: [],
          CantidaProductoComprado: [],
          ItemCarrito: [],
          ItemProductoCompradoId: [],
          precioProductoSeleccionado: []
        });
        history.push("/Home");
      },

      // Agregando Productos

      handleSubmitProducto: (e, history) => {
        e.preventDefault();
        const store = getStore();
        let formData = new FormData();
        formData.append("nombreProducto", store.nombreProducto);
        formData.append("descripcion", store.descripcion);
        formData.append("precio", store.precio);
        formData.append("categoria", store.categoria);
        if (store.avatar !== " ") {
          formData.append("avatar", store.avatar);
        } else {
          setStore({ error: { msg: "Por favor agregar foto" } });
        }

        getActions().register("/api/admi/administrador", formData, history);
      },

      register: async (url, data, history) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "POST",
          body: data
        });
        const info = await resp.json();

        if (info.msg) {
          setStore({
            error: null,
            productoAgregado: info.msg,
            isAuthenticated: true
          });
          sessionStorage.getItem("isAuthenticated", true);
        }
        history.push("/administrador");
      },

      // Tienda salsas
      store: (e, id) => {
        getActions().tienda(`/api/tienda/tienda`);
      },

      tienda: async url => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "GET",
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
            tiendaSeleccionada: dato,
            tiendatotal: dato
          });
        }
      },

      salsas: (e, id) => {
        getActions().tiendaSalsa(`/api/tienda/salsas`);
      },

      tiendaSalsa: async url => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "GET",
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
            tiendaSalsa: dato,
            tiendatotalsalsa: dato
          });
        }
      },

      // Logica para el carrito

      addToCart: producto => {
        const store = getStore();

        let { carrito } = store;
        let existe = false;
        let newtotalCarrito = 0;
        let newCarrito = carrito.map(item => {
          if (JSON.stringify(item.producto) === JSON.stringify(producto)) {
            item.cantidad += 1;
            existe = true;
            return item;
          }
          return item;
        });
        if (!existe) {
          newCarrito.push({
            id: carrito.length + 1,
            producto: producto,
            cantidad: 1
          });
        }
        newCarrito.map(item => {
          return (newtotalCarrito =
            newtotalCarrito + item.cantidad * item.producto.precio);
        });
        setStore({
          carrito: newCarrito,
          totalCarrito: newtotalCarrito
        });
      },
      // Agregando items desde el carrito

      addToCartI: producto => {
        const store = getStore();

        let { carrito } = store;
        let existe = false;
        let newtotalCarrito = 0;

        let newCarrito = carrito.map(item => {
          if (
            JSON.stringify(item.producto) === JSON.stringify(producto.producto)
          ) {
            item.cantidad += 1;
            existe = true;
            return item;
          }
          return item;
        });
        if (!existe) {
          newCarrito.push({
            id: carrito.length + 1,
            producto: producto,
            cantidad: 1
          });
        }
        newCarrito.map(item => {
          return (newtotalCarrito =
            newtotalCarrito + item.cantidad * item.producto.precio);
        });
        setStore({
          carrito: newCarrito,
          totalCarrito: newtotalCarrito
        });
      },

      // Borrando itenes desde el carrito

      addToCartII: producto => {
        const store = getStore();

        let { carrito } = store;
        let existe = false;
        let newtotalCarrito = 0;
        let newCarrito = carrito.map(item => {
          if (
            JSON.stringify(item.producto) === JSON.stringify(producto.producto)
          ) {
            item.cantidad -= 1;
            existe = true;
            return item;
          }
          return item;
        });
        const isCero = element => element.cantidad === 0;
        let index = carrito.findIndex(isCero);

        if (index !== -1) {
          newCarrito.splice(index, 1);
        }
        newCarrito.map(item => {
          return (newtotalCarrito =
            newtotalCarrito + item.cantidad * item.producto.precio);
        });
        setStore({
          carrito: newCarrito,
          totalCarrito: newtotalCarrito
        });
      },

      // Compra de Productos

      productoComprado: (e, history) => {
        console.log(e, 'la e')
        const store = getStore()

        let data = {
          "token": "slS5hrWNux44dVW9LnfMUA",
          "data": {
            "id": "personNickname",
            "email": "internetEmail",
            "gender": "personGender",
           "street": "addressStreetName",
            "last_login": {
              "date_time": "dateTime|UNIX",
              "ip4": "internetIP4"
            }
          }
        };
        getActions().productosComprados(data);
      },

      productosComprados: async (data) => {
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
        console.log(dato, "para ver que llega")
        if (dato.msg) {
          setStore({
            productosActualizados: dato
          });
        } else {
          setStore({
            error: dato
          });
        }
      },

      // Login administrador
      logingAdministrador: (e, history) => {
        //e.preventDefault();

        const store = getStore();
        let data = {
          email: store.email,
          clave: store.clave
        };

        getActions().logingAdmi("/api/admini/loging", data, history);
      },

      logingAdmi: async (url, data, history) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
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
            currentUser: dato,
            isAuthenticated: true,
            error: null
          });
          sessionStorage.setItem("currentUser", JSON.stringify(dato));
          sessionStorage.setItem("isAuthenticated", true);
          history.push("/administrador");
        }
      },

      // Registro usuario

      registroAdministrador: (e, history) => {
        e.preventDefault();
        const store = getStore();

        let data = {
          nombre: store.nombre,
          email: store.email,
          clave: store.clave,
          apellido: store.apellido,
          telefono: store.telefono
        };

        getActions().registroUsuarioAdminidtrador(
          data,
          history
        );
      },

      registroUsuarioAdminidtrador: async (data) => {
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
            currentUser: dato,
          });
        }
      },

      orders: (e, id) => {
        getActions().tiendaOrders(`/api/admi/orders`);
      },

      tiendaOrders: async url => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
          method: "GET",
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
            factura: dato[0],
            detalleFactura: dato[1]
          });
        }
      },

      activarDesactivarProducto: async (e, id, status, history) => {
        e.preventDefault();
        const store = getStore();
        if (status === "active") {
          status = "desactive";
        } else {
          status = "active";
        }
        let data = {
          newStatus: status
        };

        const { baseURL } = store;
        const resp = await fetch(baseURL + `/api/editar/producto/${id}`, {
          method: "PUT",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const dato = await resp.json();
        if (dato.msg) {
          setStore({
            productoEditado: dato.msg
          });
          //history.push("/administrador");
          getActions().store();
          getActions().salsas();
        }
      },

      profilePage: async url => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(
          baseURL + `/api/admin/${store.currentUser.Usuario.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
        const dato = await resp.json();

        if (dato.msg) {
          setStore({
            error: dato
          });
        } else {
          setStore({
            profile: dato[1]
          });
        }
      },

      //////////
      submitcontact: (e, history) => {
        e.preventDefault();
        const store = getStore();

        let data = {
          nombre: store.name,
          email: store.email,
          celular: store.number,
          mensaje: store.message
        };

        getActions().submitcontacto("/api/contacto", data, history);
      },

      submitcontacto: async (url, data, history) => {
        const store = getStore();
        const { baseURL } = store;
        const resp = await fetch(baseURL + url, {
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
            currentUser: dato
          });
          history.push("/Home");
        }
      }
    }
  };
};

export default getState;
