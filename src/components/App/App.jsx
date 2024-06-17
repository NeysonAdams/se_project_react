import { useState, useEffect  } from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import ModalWithForm from '../ModalWithForm/ModalWithForm'
import ItemModal from '../ItemModal/ItemModal'
import GarmentForm from '../Forms/GarmentForm'
import { defaultClothingItems, optionsValidation } from '../../utils/constants'
import { getWeather } from '../../utils/weatherApi'
import { FormValidator } from '../../utils/FormValidator'
import "./App.css"

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [clothingItems, setClothingItems] = useState(defaultClothingItems);
  const [isModalFormOpen, setIsModalFormOpen] = useState(false);
  const [isModalImageOpen, setIsModalImageOpen] = useState(false);
  const [imageModalData, setModalImageData] = useState([]);
  const [formValidators, setFormValidators] = useState([]);

  useEffect(() => {
    getWeather()
      .then(data => {
        setWeatherData(data);
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

  const onSubmit = (data)=>{
    data._id=clothingItems.length+1;
    setClothingItems(prevItems => [...prevItems, data]);
  }

  return (
    <div className='root'>
      <Header weatherData={weatherData} onOpenModal={openFormModal}/>
      <Main  cardsData={clothingItems} weatherData={weatherData} onItemModalOpen={openImageModal}/>
      <Footer/>
      {isModalFormOpen && (
        <ModalWithForm
          title="New garment"
          name="add-garment"
          buttonText="Add garment"
          onClose={closeFormModal}
          onSubmit={onSubmit}
        >
          <GarmentForm />
        </ModalWithForm>
      )}
      {isModalImageOpen && (
        <ItemModal data={imageModalData} onClose={closeImageModal}/>
      )}
    </div>
  )
}

export default App
