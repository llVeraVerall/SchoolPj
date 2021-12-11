import axios from "axios";
import { createAction } from "redux-actions";

export const getCards = createAction("GET_CARDS");

export const fetchGetCards = () => {
    return async (dispatch: any) => {
        console.log("func ");
        await axios
            .get("https://ruprogrammer.ru/api/RestfullTest/")
            .then((res) => dispatch(getCards(res?.data)));
    };
};

export const createCard = createAction("CREATE_CARD");

export const fetchPostCard = (data: any) => {
    return async (dispatch: any) => {
        console.log(data);
        await axios
            .post("https://ruprogrammer.ru/api/RestfullTest/", data)
            .then((res) => dispatch(createCard(res?.data)));
    };
};

export const updateCard = createAction("UPDATE_CARD");

export const fetchPutCard = (data: any) => {
    return async (dispatch: any) => {
        console.log(data);
        await axios
            .put("https://ruprogrammer.ru/api/RestfullTest/", data)
            .then((res) => dispatch(updateCard(res?.data)));
    };
};

export const deleteCard = createAction("DELETE_CARD");

export const fetchDeleteCard = (id: any) => {
    return async (dispatch: any) => {
        console.log(id);
        await axios
            .delete(`https://ruprogrammer.ru/api/RestfullTest/${id}`)
            .then(() => dispatch(deleteCard(id)));
    };
};