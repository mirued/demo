import javabase from "./javabase";
const nav = [{
    text: 'JAVA基础',
    activeMatch: '^/javabase/',
    items: [
        ...javabase.nav,
    ]
}]
const sidebar = {
    ...javabase.sidebar,
}

export default {
    nav, sidebar
}