import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Profile from '../Profile/Profile';
import Footer from '../Footer/Footer'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import AddItemModal from '../AddItemModal/AddItemModal';
import ConfirmationModal from '../ConfirmationModal/ConfirmationModal';
import ItemModal from '../ItemModal/ItemModal'
import GarmentForm from '../Forms/GarmentForm'
import { optionsValidation } from '../../utils/constants'
import { getWeather } from '../../utils/weatherApi'
import { FormValidator } from '../../utils/FormValidator'
import { getItems, addItem, removeItem } from '../../utils/api';
import CurrentTemperatureUnitContext from '../../context/CurrentTemperatureUnitContext'
import "./App.css"

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [clothingItems, setClothingItems] = useState([]);
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);
  const [imageModalData, setModalImageData] = useState([]);
  const [formValidators, setFormValidators] = useState([]);
  const [currentTemperatureUnit,setCurrentTemperatureUnit] = useState('F');
  const [isConfirmationModalOpen, setConfirmationModalOpen] = useState(false);

  useEffect(() => {
    getWeather()
      .then(data => {
        setWeatherData(data);
      })
      .catch(err => {
        console.error(err);
      });
  },[])

  useEffect(() => {
    getItems()
      .then(data => {
        setClothingItems(data);
      })
      .catch(err => {
        console.error(err);
      });
  },[])

  useEffect(()=>{
    if(isModalFormOpen){
      const modalsForms = document.querySelectorAll(".modal__form");
      const newValidators = Array.from(modalsForms).map((form) => {
        const formValidator = new FormValidator(optionsValidation, form);
        formValidator.enableValidation();
        return formValidator;
      });
      setFormValidators(newValidators);
    }else{
      formValidators.forEach(validator => validator.removeValidation());
      setFormValidators([]);
    }
  },[isModalFormOpen])

  const handleToggleSwitchChange = ()=>{
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  }

  const openImageModal = (data)=>{
    setModalImageData(data);
    setIsModalImageOpen(true);
  }

  const closeImageModal = ()=>{
    setIsModalImageOpen(false);
  }

  const openFormModal = () => {
    setIsModalFormOpen(true);
  };

  const closeFormModal = () => {
    setIsModalFormOpen(false);
  };

  const handleAddItem  = (item)=>{
    item._id=clothingItems.length+1;
    addItem(item)
    .then(() => {
      setClothingItems(prevItems => [item, ...prevItems]);
    })
    .catch(err => {
      console.error(err);
    });
  }

  const openConfirmationModal = (d_item)=>{
    setConfirmationModalOpen(true);
  }

  const handleCardDelete = ()=>{
    removeItem(imageModalData._id)
      .then(() => {
        setClothingItems(prevItems => prevItems.filter(item => item._id !== imageModalData._id));
      })
      .catch(err => {
        console.error(err);
      });
    setConfirmationModalOpen(false);

  }

  const handleCloseConfirmModal = ()=>{
    setConfirmationModalOpen(false);
  }

  return (
    <div className='root'>
      <CurrentTemperatureUnitContext.Provider 
      value={{currentTemperatureUnit, handleToggleSwitchChange}}>
        <Header weatherData={weatherData} onOpenModal={openFormModal}/>
        <Routes>
          <Route exact path="/se_project_react" element={
            <Main  
            cardsData={clothingItems} 
            weatherData={weatherData} 
            onItemModalOpen={openImageModal}/>
            }/>
          <Route exact path="/se_project_react/profile" element={
            <Profile  
            cardsData={clothingItems}
            onItemModalOpen={openFormModal}/>
            }/>
        </Routes>
        <Footer/>
        <AddItemModal
            isOpen={isModalFormOpen}
            onCloseModal={closeFormModal}
            onAddItem={handleAddItem }
          />
        {isModalImageOpen && (
          <ItemModal 
          data={imageModalData} 
          onClose={closeImageModal}
          onDelete={openConfirmationModal}/>
        )}
        <ConfirmationModal
          isOpen={isConfirmationModalOpen}
          onConfirm={handleCardDelete}
          onClose={handleCloseConfirmModal}
          />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  )
}

export default App