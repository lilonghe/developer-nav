import { COLORFUL_TEXT } from "../utils/constant"

export default function Index() {
    return (
        <div className="m-[20px]">
            <h2 className="text-lg mb-4">
                <span className={COLORFUL_TEXT}>Visualization</span>
            </h2>
            <div className='flex wrap gap-4'>
                {data.map(item => <a key={item.name}
                    href={item.url}
                    target='_blank'
                    className='flex flex-col w-[200px] rounded overflow-hidden shadow-md' rel="noreferrer">
                    <div
                        className={`h-[100px] bg-center bg-[length:100%_100%] hover:bg-[length:150%_150%] transition-all duration-300`}
                        style={{ backgroundImage: `url(${item.poster}` }}>
                        <h3 className="h-full flex justify-center items-center text-xl text-white drop-shadow-md bg-gradient-to-r from-stone-500/30 to-blue-500/30">{item.name}</h3>
                    </div>
                    <div className="p-3 text-sm">
                        {item.intro}
                    </div>
                    <div className="px-3 pb-3 text-xs text-stone-400">
                        {item.summary}
                    </div>
                </a>)}
            </div>
        </div>
    )
}

const data = [
    {
        name: 'D2',
        tags: ['DSL'],
        url: 'https://d2lang.com/',
        intro: '声明式 DSL 绘图工具',
        poster: '/assets/images/D2.png',
        summary: '使用声明式方式描述 DSL，最终生成 SVG，适用于制作宣讲资料，或项目流程文档中'
    },
    {
        name: 'JSON Crack',
        tags: [],
        url: 'https://jsoncrack.com/',
        intro: 'JSON 转成可视化树形结构',
        poster: '/assets/images/jsoncrack.webp',
        summary: '将 JSON 转成类似思维导图的属性结构，开发调试时比较方便查看数据结构'
    },
]