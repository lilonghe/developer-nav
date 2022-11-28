import { data } from '../../data/package'
import Card from "../../components/card"

export default function Index() {
    return (
        <div className="m-[20px]">
            <div className="mb-1 text-stone-400 italic text-sm">
                “本页面列出项目中用到的各种库，帮助实现业务需求”
            </div>
            {data.map(cate => <Card.Group key={cate.name} data={cate}  />)}
        </div>
    )
}

