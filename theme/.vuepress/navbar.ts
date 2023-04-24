import { navbar } from "vuepress-theme-hope";

export default navbar([
    { text: "必读", link: "/pay/pay.md"},
    {
        text: "大学",
        prefix: "/university",
        children:
        [
            {
                text: "转瞬即逝的四年",
                prefix: "",
                children: [
                    { text: "高考暑假：最好的暑假", link: "/1-summer/"},
                    { text: "大一：人生的新的篇章", link: "/2-freshman"},
                    { text: "大二：懵懂又快乐的每一天", link: "/1-backend/2-redis"},
                    { text: "大三：人生基调的决定", link: "/1-backend/2-redis"},
                    { text: "大四：今宵别梦寒", link: "/1-backend/2-redis"},
                ]
            },
        ]
    },
    {
        text: "研究僧",
        prefix: "/skill",
        children:
        [
            {
                text: "方向选择",
                prefix: "",
                children: [
                    { text: "保研", link: "/1-backend/1-mysql"},
                    { text: "考研", link: "/1-backend/2-redis"},
                    { text: "跨专业", link: "/1-backend/2-redis"},
                    { text: "研究生与本科生", link: "/1-backend/2-redis"},
                ]
            }
        ]
    },
    {
        text: "就业",
        prefix: "/skill",
        children:
        [
            {
                text: "校招的艺术",
                prefix: "",
                children: [
                    { text: "私企", link: "/1-backend/1-mysql"},
                    { text: "国央企", link: "/1-backend/2-redis"},
                    { text: "外企", link: "/1-backend/2-redis"},
                ]
            },
            {
                text: "行业之道",
                prefix: "",
                children: [
                    { text: "互联网", link: "/1-backend/1-mysql"},
                    { text: "游戏", link: "/1-backend/2-redis"},
                    { text: "自媒体", link: "/1-backend/2-redis"},
                    { text: "区块链", link: "/1-backend/2-redis"},
                ]
            }
        ]
    },
    {
        text: "公务员", 
        prefix: "/language",
        children: 
        [
            { text: "考公大纲", link: "/cpp"},
            { text: "公务员的潜规则", link: "/go"},
            { text: "考公流程与准备", link: "/java"},
            { text: "全国待遇汇总", link: "/java"},
            { text: "公务员知识", link: "/java"},
        ]
    },
    {
        text: "留学", 
        prefix: "/language",
        children: 
        [
            { text: "华润万家", link: "/cpp"},
            { text: "梦校的故事", link: "/go"},
            { text: "一年硕士", link: "/java"},
        ]
    },
    {
        text: "大厂高端", 
        prefix: "/language",
        children: 
        [
            { text: "大厂的那些坑部门", link: "/cpp"},
            { text: "每周内幕", link: "/go"},
            { text: "简历润色", link: "/java"},
            { text: "大厂潜规则", link: "/java"},
        ]
    },
    { text: "转码", link: "/about/1-tutorial.md"},
    { text: "关于", link: "/about/1-tutorial.md"},


//   {
//     text: "博文",
//     // icon: "edit",
//     prefix: "/posts/",
//     children: [
//         {
//             text: "目录",
//             link: ""
//         },
//       {
//         text: "文章 1-4",
//         icon: "edit",
//         prefix: "article/",
//         children: [
//           { text: "文章 1", icon: "edit", link: "article1" },
//           { text: "文章 2", icon: "edit", link: "article2" },
//           "article3",
//           "article4",
//         ],
//       },
//       {
//         text: "文章 5-12",
//         icon: "edit",
//         children: [
//           {
//             text: "文章 5",
//             icon: "edit",
//             link: "article/article5",
//           },
//           {
//             text: "文章 6",
//             icon: "edit",
//             link: "article/article6",
//           },
//           "article/article7",
//           "article/article8",
//         ],
//       },
//       { text: "文章 9", icon: "edit", link: "article9" },
//       { text: "文章 10", icon: "edit", link: "article10" },
//       "article11",
//       "article12",
//     ],
//   },

//   {
//     text: "主题文档",
//     icon: "note",
//     link: "https://vuepress-theme-hope.github.io/v2/zh/",
//   },
]);
