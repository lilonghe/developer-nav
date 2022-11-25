import { COLORFUL_TEXT } from "../utils/constant"
import { data } from '../data/tool'

export default function Index() {
    return (
        <div className="m-[20px]">
            {data.map(cate =>
                <div key={cate.name} className="mb-8">
                    <h2 className="text-lg mb-4">
                        <span className={COLORFUL_TEXT}>{cate.name}</span>
                    </h2>
                    <div className='flex wrap gap-4'>
                        {cate.list.map(item => <a key={item.name}
                            href={item.url}
                            target='_blank'
                            className='flex flex-col w-[200px] rounded overflow-hidden shadow transition-all duration-200 hover:shadow-md' rel="noreferrer">
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
            )}
        </div>
    )
}

