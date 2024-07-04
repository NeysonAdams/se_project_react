import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import ItemModal from "../ItemModal/ItemModal";
import { optionsValidation } from "../../utils/constants";
import { getWeather } from "../../utils/weatherApi";
import { FormValidator } from "../../utils/FormValidator";
import {
  getItems,
  addItem,
  removeItem,
  signUp,
  signin,
  getCurrentUser,
  updateCurrentUser,
  addCardLike,
  removeCardLike,
} from "../../utils/api";
import CurrentTemperatureUnitContext from "../../context/CurrentTemperatureUnitContext";
import CurrentUserContext from "../../context/CurrentUserContext";
import ProtectedRoute from "../../utils/ProtectedRoute";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [clothingItems, setClothingItems] = useState([]);
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);

  const [isModalRegistraionOpen, setIsModalRegistraionOpen] = useState(false);
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalEditOpen, setIsModalEdtiOpen] = useState(false);

  const [imageModalData, setModalImageData] = useState([]);
  const [formValidators, setFormValidators] = useState([]);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      getCurrentUser()
        .then((res) => {
          setCurrentUser(res);

          setLoggedIn(true);
        })
        .catch(console.error);
    }
  }, [isLoggedIn]);

  useEffect(() => {
    getWeather()
      .then((data) => {
        setWeatherData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  useEffect(() => {
    if (isModalFormOpen) {
      const modalsForms = document.querySelectorAll(".modal__form");
      const newValidators = Array.from(modalsForms).map((form) => {
        const formValidator = new FormValidator(optionsValidation, form);
        formValidator.enableValidation();
        return formValidator;
      });
      setFormValidators(newValidators);
    } else {
      formValidators.forEach((validator) => validator.removeValidation());
      setFormValidators([]);
    }
  }, [isModalFormOpen]);

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const openImageModal = (data) => {
    setModalImageData(data);
    setIsModalImageOpen(true);
  };

  const closeImageModal = () => {
    setIsModalImageOpen(false);
  };

  const openFormModal = () => {
    setIsModalFormOpen(true);
  };

  const closeFormModal = () => {
    setIsModalFormOpen(false);
  };

  const handleAddItem = (item) => {
    const maxId = clothingItems.reduce(
      (max, current) => (current._id > max ? current._id : max),
      0
    );
    addItem(item)
      .then((newitem) => {
        setClothingItems((prevItems) => [newitem, ...prevItems]);
        closeFormModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const openConfirmationModal = (d_item) => {
    setConfirmationModalOpen(true);
  };

  const handleCardDelete = () => {
    removeItem(imageModalData._id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== imageModalData._id)
        );
        handleCloseConfirmModal();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleCloseConfirmModal = () => {
    setConfirmationModalOpen(false);
  };

  const handleRegistrationModalOpen = () => {
    setIsModalRegistraionOpen(true);
  };

  const handleRegistrartionModalClose = () => {
    setIsModalRegistraionOpen(false);
  };

  const handleLoginModalOpen = () => {
    setIsModalLoginOpen(true);
  };

  const handleLoginModalClose = () => {
    setIsModalLoginOpen(false);
  };

  const handleEditModalOpen = () => {
    setIsModalEdtiOpen(true);
  };
  const handleEditModalClose = () => {
    setIsModalEdtiOpen(false);
  };

  const handleSwitchToSignUp = ()=>{
    handleLoginModalClose();
    handleRegistrationModalOpen();
  }

  const handleSwitchToLogin = ()=>{
    handleRegistrartionModalClose();
    handleLoginModalOpen();
  }

  const handleOnSignUp = (data) => {
    signUp(data)
      .then((res) => {
        handleOnLogin({ email: data.email, password: data.password });
        handleRegistrartionModalClose();
      })
      .catch(console.error);
  };

  const handleUserDataUpdate = (data) => {
    updateCurrentUser(data)
      .then((res) => {
        handleEditModalClose();
        setCurrentUser(res);
      })
      .catch(console.error);
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setCurrentUser({});
    navigate("/");
  };

  const handleOnLogin = (data) => {
    signin(data)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        handleLoginModalClose();
        setLoggedIn(true);
      })
      .catch(console.error);
  };

  const handleCardLike = ({ id, isLiked }) => {
    !isLiked
      ? addCardLike({ id })
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : removeCardLike({ id })
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <div className="root">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            weatherData={weatherData}
            onOpenModal={openFormModal}
            isSignIn={isLoggedIn}
            onRegistrationOpen={handleRegistrationModalOpen}
            onLoginOpen={handleLoginModalOpen}
          />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Main
                  cardsData={clothingItems}
                  weatherData={weatherData}
                  onItemModalOpen={openImageModal}
                  onLike={handleCardLike}
                />
              }
            />
            <Route
              exact
              path="/profile"
              element={
                <ProtectedRoute
                  isLoggedIn={isLoggedIn}
                  element={
                    <Profile
                      cardsData={clothingItems}
                      onItemModalOpen={openImageModal}
                      onModalFormOpen={openFormModal}
                      onEditOpen={handleEditModalOpen}
                      onLogOut={handleLogOut}
                      onLike={handleCardLike}
                    />
                  }
                />
              }
            />
          </Routes>
          <Footer />
          <AddItemModal
            isOpen={isModalFormOpen}
            onCloseModal={closeFormModal}
            onAddItem={handleAddItem}
          />
          <RegisterModal
            isOpen={isModalRegistraionOpen}
            onSighUp={handleOnSignUp}
            onCloseModal={handleRegistrartionModalClose}
            onSwitchToLogin={handleSwitchToLogin}
          />
          <LoginModal
            isOpen={isModalLoginOpen}
            onCloseModal={handleLoginModalClose}
            onSignIn={handleOnLogin}
            onSingUpOpen={handleSwitchToSignUp}
          />
          <EditProfileModal
            isOpen={isModalEditOpen}
            onCloseModal={handleEditModalClose}
            onUpdate={handleUserDataUpdate}
          />
          {isModalImageOpen && (
            <ItemModal
              data={imageModalData}
              onClose={closeImageModal}
              onDelete={openConfirmationModal}
            />
          )}
          <ConfirmationModal
            isOpen={isConfirmationModalOpen}
            onConfirm={handleCardDelete}
            onClose={handleCloseConfirmModal}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
