import { 
    CURRENTLANG, 
    MODALACTIVEGALLERY, 
    MODALACTIVEBLOG, 
    CONTENTCURRENTEBLOG,
    MODALACTIVEFORM
} from "./boilerplate";

//создаем action генераторы
const currentLang = (payload) => ({
    type: CURRENTLANG,
    payload,
});

const modalActivGallery = (payload) => ({
    type: MODALACTIVEGALLERY,
    payload,
});

const modalActivBlog = (payload) => ({
    type: MODALACTIVEBLOG,
    payload,
});

const contentCurrentBlog = (payload) => ({
    type: CONTENTCURRENTEBLOG,
    payload,
});

const modalActivForm = (payload) => ({
    type: MODALACTIVEFORM,
    payload,
});

export {
    currentLang,
    modalActivGallery,
    modalActivBlog,
    contentCurrentBlog,
    modalActivForm
};