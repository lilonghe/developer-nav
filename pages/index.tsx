import { data } from '../data/tool'
import Card from "../components/card"

export default function Index() {
    return (
        <div className="m-[20px] flex gap-5 flex-wrap">
            {data.map(cate => <Card.Group key={cate.name} data={cate}  />)}
        </div>
    )
}

