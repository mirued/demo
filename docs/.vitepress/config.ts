import javabase from "../javabase"

export default {
    title: 'DEMO',
    description: 'DEMO',
    head: [['link', {rel: 'icon', href: '/_static/imgs/favicon/favicon.svg'}]],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        search: {
            provider: 'local'
        },
        lastUpdatedText: 'Updated Date',
        smoothScroll: true,
        logo: '/_static/imgs/favicon/favicon.svg',
        outline: {
            label: '目录',
            level: [2, 4]
        },
        nav: [
            ...javabase.nav,
        ],
        sidebar: {
            ...javabase.sidebar,
        }
    },
    plugins: [
        '@vuepress/active-header-links',
        '@vuepress/back-to-top',
        '@vuepress/medium-zoom',
        '@vuepress/nprogress',
        ['@vuepress/search', {
            searchMaxSuggestions: 10
        }]
    ]
}