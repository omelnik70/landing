import { 
    CURRENTLANG, 
    MODALACTIVEGALLERY, 
    MODALACTIVEBLOG,
    MODALACTIVEMENU,
    CONTENTCURRENTEBLOG,
    MODALACTIVEFORM,
    CURRENTSCROLL,
    ISTOP,
    ISBLOG,
    ISCONTACT,
    ISABOUT,
    ISHOTELS,
    ISGALLERY,
    SCREENWIDTH,
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

        case CURRENTSCROLL: 
        return {
            ...state,
            currentScroll: action.payload,
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

        case ISTOP: 
        return {
            ...state,
            top: action.payload,
        };

        case ISBLOG: 
        return {
            ...state,
            blog: action.payload,
        };

        case ISCONTACT: 
        return {
            ...state,
            contact: action.payload,
        };

        case ISABOUT: 
        return {
            ...state,
            about: action.payload,
        };

        case ISHOTELS: 
        return {
            ...state,
            hotels: action.payload,
        };

        case ISGALLERY: 
        return {
            ...state,
            gallery: action.payload,
        };

        case SCREENWIDTH: 
        return {
            ...state,
            screenwidth: action.payload,
        };

        case MODALACTIVEMENU: 
        return {
            ...state,
            modalMenu: action.payload,
        };

        //по умолчанию 
        default: 
        return { ...state }; //возвращаем старый объект сосотояния
        //throw new Error(); возвращаем ошибку
    }
};

export default reducer;
