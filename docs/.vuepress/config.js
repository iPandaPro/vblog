module.exports = {
    title: '有没有那么一首歌',
    description: 'informal essay',

    base: '/vblog/',
    // head:[
    //     ['link', { rel: 'icon', href: '/logo.png' }]
    // ]
    host: '0.0.0.0',
    port: 9527,
    //默认主题配置
    themeConfig: {
        //github地址
        repo:'https://github.com/DanielMars/vblog',
        repoLabel:'My GitHub',
        //导航栏
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: '初体验',
                link: '/blog/firstBlog.md'
            },
            // {
            //     text: 'Languages',
            //     items: [{
            //             text: 'Chinese',
            //             link: '/language/Chinese'
            //         },
            //         {
            //             text: 'English',
            //             link: '/language/English'
            //         }
            //     ]
            // },
            {
                text: '百度一下',
                link: 'https://www.baidu.com'
            },
        ],
        //侧边栏
        sidebar: [
            ['/','首页'],
            ['/blog/firstBlog.md', '初次体验'],
           
        ],
        // sidebar: 'auto',
        sidebarDepth: 2,
        search: true,
        searchMaxSuggestions: 10,
        lastUpdated: 'Last Updated'
    },
    markdown: {
        lineNumbers: true
    },
    // configureWebpack: {
    //     resolve: {
    //         alias: {
    //             '@alias': 'path/to/some/dir'
    //         }
    //     }
    // }
}