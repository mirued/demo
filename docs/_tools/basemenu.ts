/**
 * 文章菜单
 * @param basePath 请求基础路径
 * @param folder 目录名称
 * @param items 配置项
 */
const baseMenu = ({
                      basePath,
                      folder,
                      items
                  }) => {
    const sidebars = [];
    for (const i in items) {
        const child = items[i];
        const articles = [];
        for (const name in child) {
            articles.push({text: name, link: basePath + child[name]})
        }
        sidebars.push({
            text: i,
            collapsed: true,
            items: articles
        })
    }
    return {
        nav: [{text: folder, link: basePath}],
        sidebar: {
            [basePath]: sidebars
        }
    }

}
export default baseMenu;