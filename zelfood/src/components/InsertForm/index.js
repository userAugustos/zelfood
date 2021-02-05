import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addFood } from '../../store/Reducers/actions';
import { FoodForm, FormInput, FormButton } from './styles';
import { Link } from 'react-router-dom';


export default function InsertForm() {
    const dispatch = useDispatch(); 
    const [foodName, setFoodName] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const foodObject = {
        name: foodName,
        imageUrl: imageUrl
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addFood(foodObject));
        setFoodName('');
        setImageUrl('');
    }

    return(
            <FoodForm onSubmit={handleSubmit}>
                <h2> Cadastre um alimento </h2>
                <FormInput type="text" value={foodName} placeholder="Nome do Alimento" onChange={e => setFoodName(e.target.value)}></FormInput>
                <FormInput type="text" value={imageUrl} placeholder="Link da Imagem" onChange={e => setImageUrl(e.target.value)}></FormInput>

                <FormButton> Cadastrar Alimento </FormButton>
                <Link to="/foods"> Ver Alimentos </Link>
            </FoodForm>
    );
}
