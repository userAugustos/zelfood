import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadFood, showFood } from '../../store/Reducers/actions';
import { FoodSection } from './styles';
import { Link } from 'react-router-dom';

export default function ShowFood(params) {
    const dispatch = useDispatch();
    const data = useSelector(state => state.foodAdder.data);

    useEffect(() => {
        dispatch(loadFood());
        dispatch(showFood());
    }, [dispatch]);

    return (
        <FoodSection>
            <h2> Nossos Alimentos </h2>
            <ul>
                {
                    data?.map((food) => (
                        <li key={food.id}>
                        <img src={food.imageUrl} alt={food.name} />
                        <p> {food.name} </p>
                      </li>
                    ))
                }
            </ul>
            <Link to="/"> Você pode contruibuir com um alimento </Link>
        </FoodSection>
    );
}
