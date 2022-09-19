import { 
    CURRENTLANG, 
    MODALACTIVEGALLERY, 
    MODALACTIVEBLOG,
    CONTENTCURRENTEBLOG,
    MODALACTIVEFORM
} from "./boilerplate";

//создаем кейсы по изменению состояния
const reducer = (state, action) => {
    switch (action.type) {
        //кейс изменяет состояние
        case CURRENTLANG: 
        return {
            //производим действие по изменению старого состояния
            ...state,
            lang: action.payload,
        };

        case MODALACTIVEGALLERY: 
        return {
            ...state,
            modalGallery: action.payload,
        };

        case MODALACTIVEBLOG: 
        return {
            ...state,
            modalBlog: action.payload,
        };

        case CONTENTCURRENTEBLOG: 
        return {
            ...state,
            contentCurrentBlog: action.payload,
        };

        case MODALACTIVEFORM: 
        return {
            ...state,
            modalForm: action.payload,
        };

        //по умолчанию 
        default: 
        return { ...state }; //возвращаем старый объект сосотояния
        //throw new Error(); возвращаем ошибку
    }
};

export default reducer;
