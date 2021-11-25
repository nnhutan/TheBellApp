import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import API from "./API/api";

const Data = createContext();

function ContextProvider(props) {
  const [currPage, setCurrage] = useState("home");

  const [state, setState] = useState({
    isLoading: true,
    isLoggedIn: false,
    user: {},
  });

  const logoutHandler = () => {
    axios
      .post(API + "authentication.php/logout", {}, { withCredentials: true })
      .then((res) => {
        setState((prev) => ({ ...prev, isLoggedIn: false, user: {} }));
        setOrdId("");
      })
      .catch((res) => console.log(res));
  };

  // USER
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);

  const getRoles = () => {
    axios
      .post(API + "authentication.php/getRole", {}, { withCredentials: true })
      .then((response) => setRoles(response.data))
      .catch((res) => console.log(res));
  };

  const getUsers = () => {
    axios
      .post(API + "authentication.php/userList", {}, { withCredentials: true })
      .then((response) => setUsers(response.data))
      .catch((res) => console.log(res));
  };

  const addUser = (user) => {
    axios
      .post(API + "authentication.php", { ...user }, { withCredentials: true })
      .then((response) => getUsers());
  };

  const editUserAdminSide = (id, user) => {
    axios
      .post(
        API + "authentication.php/editUser",
        {
          id: id,
          ...user,
        },
        { withCredentials: true }
      )
      .then((response) =>
        setUsers((prev) => {
          const idx = prev.findIndex((item) => item.id === id);
          prev[idx] = { ...prev[idx], ...user };
          return [...prev];
        })
      )
      .catch((res) => alert(res));
  };

  const deleteUser = (id) => {
    axios
      .post(
        API + "authentication.php/deleteUser",
        { id: id },
        { withCredentials: true }
      )
      .then((response) =>
        setUsers((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };

  const editUser = (user) => {
    axios
      .post(
        API + "authentication.php/editUser",
        {
          ...user,
        },
        { withCredentials: true }
      )
      .then((res) => setState((prev) => ({ ...prev, user: user })))
      .catch((res, status) => console.log(res, status));
  };

  // END USER
  // =============================================================
  //CONTACT
  const [publicContact, setPublicContact] = useState([]);
  const [customerContact, setCustomerContact] = useState([]);

  const getPublicContact = () => {
    axios
      .post(API + "public-contact.php/listContact")
      .then((res) => setPublicContact(res.data))
      .catch((res) => alert(res));
  };

  const addPublicContact = (contact) => {
    axios
      .post(API + "public-contact.php/addContact", { ...contact })
      .then((response) => getPublicContact())
      .catch((res) => alert(res));
  };

  const editPublicContact = (id, contact) => {
    axios
      .post(API + "public-contact.php/editContact", {
        id: id,
        ...contact,
      })
      .then((response) =>
        setPublicContact((prev) => {
          prev[prev.findIndex((item) => item.id === id)] = contact;
          return [...prev];
        })
      )
      .catch((res) => alert(res));
  };

  const deletePublicContact = (id) => {
    axios
      .post(API + "public-contact.php/deleteContact", { id: id })
      .then((response) =>
        setPublicContact((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };

  const getCustomerContact = () => {
    axios
      .post(API + "customer-contact.php/listCustomerContact")
      .then((response) => {
        setCustomerContact(response.data);
      })
      .catch((res) => {
        alert(res);
      });
  };

  const deleteCustomerContact = (id) => {
    axios
      .post(API + "customer-contact.php/deleteCustomerContact", { id: id })
      .then((response) =>
        setCustomerContact((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };
  // END CONTACT
  // =============================================================
  //PRODUCT
  const [products, setProducts] = useState([]);
  const [numProductInCart, setNumProductInCart] = useState();

  const getProducts = async () => {
    axios
      .post(API + "product.php/listProduct")
      .then((response) => setProducts(response.data))
      .catch((res) => {
        alert(res);
      });
  };

  const addProduct = (product) => {
    axios
      .post(API + "product.php/addProduct", { ...product })
      .then((response) => getProducts())
      .catch((res) => alert(res));
  };

  const editProduct = (id, product) => {
    axios
      .post(API + "product.php/editProduct", {
        id: id,
        ...product,
      })
      .then((response) =>
        setProducts((prev) => {
          const idx = prev.findIndex((item) => item.id === id);
          prev[idx] = { ...prev[idx], ...product };
          return [...prev];
        })
      )
      .catch((res) => alert(res));
  };

  const deleteProduct = (id) => {
    axios
      .post(API + "product.php/deleteProduct", { id: id })
      .then((response) =>
        setProducts((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };
  //END PRODUCT
  // =============================================================
  // CATEGORY
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    axios
      .post(API + "category.php/listCategory")
      .then((response) => setCategories(response.data));
  };

  const addCategory = (category) => {
    axios
      .post(API + "category.php/addCategory", { ...category })
      .then((response) => {
        getCategories();
      })
      .catch((res) => {
        alert(res);
      });
  };

  const editCategory = (id, category) => {
    axios
      .post(API + "category.php/editCategory", {
        id: id,
        ...category,
      })
      .then((response) =>
        setCategories((prev) => {
          prev[prev.findIndex((item) => item.id === id)].name = category.name;
          return [...prev];
        })
      )
      .catch((res) => alert(res));
  };

  const deleteCategory = (id) => {
    axios
      .post(API + "category.php/deleteCategory", { id: id })
      .then((response) =>
        setCategories((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };
  // END CATEGORY
  // =============================================================
  // CART
  const [ordId, setOrdId] = useState("");
  const [productsInCart, setProductsInCart] = useState([]);

  const addToCart = (productId) => {
    if (ordId !== "") {
      axios
        .post(API + "order-detail.php/addOrderDetail", {
          order_id: ordId,
          product_id: productId,
          num: 1,
        })
        .then((res) => {
          getCart(true, state.user.id);
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      axios
        .post(
          API + "cart.php/addToCart",
          {
            id: productId,
            num: 1,
          },
          { withCredentials: true }
        )
        .then((res) => {
          getCart(false, "");
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  const getCart = async (flag, id) => {
    if (flag) {
      axios
        .post(API + "order.php/listOrder")
        .then((res) => {
          const orderId =
            res.data[res.data.findIndex((item) => item.user_id === id)].id;
          setOrdId(orderId);
          axios
            .post(API + "order-detail.php/listOrderDetail", {
              order_id: orderId,
            })
            .then((res) => {
              setProductsInCart(res.data);
              setNumProductInCart(res.data.length);
            })
            .catch((res) => {
              console.log(res);
            });
        })
        .catch((res) => console.log(res));
    } else {
      axios
        .post(API + "cart.php/listCart", {}, { withCredentials: true })
        .then((res) => {
          setProductsInCart(res.data);
          setNumProductInCart(res.data.length);
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  const deleteProductInCart = (id) => {
    if (ordId !== "") {
      axios
        .post(API + "order-detail.php/deleteOrderDetail", {
          id: id,
        })
        .then((res) => {
          setProductsInCart((prev) => prev.filter((item) => item.id !== id));
          setNumProductInCart((prev) => prev - 1);
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      axios
        .post(
          API + "cart.php/updateCart",
          { id: id, num: 0 },
          { withCredentials: true }
        )
        .then((res) => {
          setProductsInCart((prev) => prev.filter((item) => item.id !== id));
          setNumProductInCart((prev) => prev - 1);
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };

  const changeNumOfProductInCart = (e, index, id) => {
    if (ordId !== "") {
      axios
        .post(API + "order-detail.php/editOrderDetail", {
          id: id,
          num: e.target.value,
        })
        .then((res) => {
          setProductsInCart((prev) => {
            prev[index].num = e.target.value;
            return [...prev];
          });
        })
        .catch((res) => {
          console.log(res);
        });
    } else {
      axios
        .post(
          API + "cart.php/updateCart",
          { id: id, num: e.target.value },
          { withCredentials: true }
        )
        .then((res) => {
          setProductsInCart((prev) => {
            prev[index].num = e.target.value;
            return [...prev];
          });
        })
        .catch((res) => {
          console.log(res);
        });
    }
  };
  // END CART
  // =============================================================
  //COMMENT
  const [comments, setComments] = useState([]);

  const getComments = () => {
    axios
      .post(API + "comment.php/listComment")
      .then((res) => setComments(res.data))
      .catch((res) => console.log(res));
  };

  const addComment = (product_id, content) => {
    axios
      .post(API + "comment.php/addComment", {
        user_id: state.user.id,
        product_id: product_id,
        content: content,
      })
      .then((res) => getComments())
      .catch((res) => console.log(res));
  };

  const deleteComment = (id) => {
    axios
      .post(API + "comment.php/deleteComment", {
        id: id,
      })
      .then((res) =>
        setComments((prev) => [...prev.filter((item) => item.id !== id)])
      )
      .catch((res) => console.log(res));
  };

  const editComment = (commentEdit) => {
    axios
      .post(API + "comment.php/editComment", {
        ...commentEdit,
      })
      .then((res) => getComments())
      .catch((res) => console.log(res));
  };
  //END COMMENT
  // =============================================================
  // NEWS
  const [newsList, setNewsList] = useState([]);

  const getNewsList = async () => {
    axios
      .post(API + "news.php/listNews")
      .then((response) => setNewsList(response.data))
      .catch((res) => alert(res));
  };

  const addNews = (news) => {
    axios
      .post(API + "news.php/addNews", { ...news })
      .then((response) => getNewsList())
      .catch((res) => alert(res));
  };

  const editNews = (id, news) => {
    axios
      .post(API + "news.php/editNews", {
        id: id,
        ...news,
      })
      .then((response) =>
        setNewsList((prev) => {
          prev[prev.findIndex((item) => item.id === id)] = news;
          return [...prev];
        })
      );
  };

  const deleteNews = (id) => {
    axios
      .post(API + "news.php/deleteNews", { id: id })
      .then((response) =>
        setNewsList((prev) => prev.filter((item) => item.id !== id))
      )
      .catch((res) => alert(res));
  };
  // END NEWS
  // =============================================================
  useEffect(() => {
    const authen = async () => {
      axios
        .post(API + "authentication.php/login", {}, { withCredentials: true })
        .then((res) => {
          setState({ isLoggedIn: true, user: res.data });
          getCart(true, res.data.id);
          getUsers();
          getRoles();
          getCustomerContact();
        })
        .catch((res) => {
          getCart(false, "");
          console.log(res);
        });
    };
    authen();
    getPublicContact();
    getProducts();
    getCategories();
    getComments();
    getNewsList();
  }, [state.isLoggedIn]);

  return (
    <Data.Provider
      value={{
        state,
        setState,
        currPage,
        setCurrage,
        roles,
        users,
        addUser,
        editUserAdminSide,
        deleteUser,
        editUser,
        logoutHandler,
        publicContact,
        customerContact,
        addPublicContact,
        editPublicContact,
        deletePublicContact,
        deleteCustomerContact,
        products,
        addProduct,
        editProduct,
        deleteProduct,
        categories,
        addCategory,
        editCategory,
        deleteCategory,
        numProductInCart,
        productsInCart,
        addToCart,
        changeNumOfProductInCart,
        deleteProductInCart,
        comments,
        editComment,
        addComment,
        deleteComment,
        newsList,
        addNews,
        editNews,
        deleteNews,
      }}
    >
      {props.children}
    </Data.Provider>
  );
}

export { Data, ContextProvider };
