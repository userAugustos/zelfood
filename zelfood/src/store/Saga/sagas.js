import { all, put, takeLatest } from 'redux-saga/effects';
import {types} from '../types';

function* loadingData() {
    try {
        const result = yield fetch('http://localhost:3004/').then(response => response.json());
        yield put({
            type: types.SHOW_FOOD,
            payload: result.food
        })
        // console.log(result.food)
    } catch (error) {
        // throw new error(error)
        window.alert(error);
    }
}

function* uploadingFood(food){
    const {name, imageUrl} = food.payload;

    try {
        const response = yield fetch('http://localhost:3004/insert', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify({ name, imageUrl })
        }).then(response => response);

        window.alert("Alimento cadastrado com sucesso!");
        // console.log(response);
    } catch (error) {
        throw new error(error) 
        // console.log(error);
    }
}

function* watchUploadFood(){
    yield takeLatest(types.INSERT_FOOD, uploadingFood);
}
function* watchLoadFood() {
    yield takeLatest(types.LOADING_FOOD, loadingData);
}

export function* rootSaga() {
    yield all([
        watchLoadFood(),
        watchUploadFood()
      ])
}