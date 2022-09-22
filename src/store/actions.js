import { 
    ISTOP,
    ISCONTACT,
    ISABOUT,
    ISNUMBERS,
    ISGALLERY,
    CURRENTLANG, 
    MODALACTIVEGALLERY, 
    MODALACTIVEBLOG, 
    MODALACTIVEMENU,
    CONTENTCURRENTEBLOG,
    MODALACTIVEFORM,
    CURRENTSCROLL,
    SCREENWIDTH,
} from "./boilerplate";

//создаем action генераторы
const currentLang = (payload) => ({
    type: CURRENTLANG,
    payload,
});

const currentActionScroll = (payload) => ({
    type: CURRENTSCROLL,
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

const isTop = (payload) => ({
    type: ISTOP,
    payload,
});

const isContact = (payload) => ({
    type: ISCONTACT,
    payload,
});

const isAbout = (payload) => ({
    type: ISABOUT,
    payload,
});

const isNumbers = (payload) => ({
    type: ISNUMBERS,
    payload,
});

const isGallery = (payload) => ({
    type: ISGALLERY,
    payload,
});

const screenWidth = (payload) => ({
    type: SCREENWIDTH,
    payload,
});

const modalActivMenu = (payload) => ({
    type: MODALACTIVEMENU,
    payload,
});

export {
    isTop,
    screenWidth,
    isContact,
    isAbout,
    isNumbers,
    isGallery,
    currentLang,
    modalActivGallery,
    modalActivBlog,
    modalActivMenu,
    contentCurrentBlog,
    modalActivForm,
    currentActionScroll
};