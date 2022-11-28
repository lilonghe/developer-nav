import { data } from '../data/tool'
import Card from "../components/card"

export default function Index() {
    return (
        <div className="m-[20px]">
            <div className="mb-1 text-stone-400 italic text-sm">
                “本页面列出项目正规对开发或者调试过程中有帮助的工具”
            </div>
            {data.map(cate => <Card.Group key={cate.name} data={cate}  />)}
        </div>
    )
}

