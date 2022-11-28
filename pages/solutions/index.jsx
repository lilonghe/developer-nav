import { solutionList } from '../../data/solution'
import Card from '../../components/card'

export default function Solutions () {
  return (
    <div className='m-[20px]'>
      <div className="mb-1 text-stone-400 italic text-sm">
        “本页面列出项目开发中常见的一些场景解决方案，帮助实现业务场景需求”
      </div>
      <div className="flex wrap gap-4">
        {solutionList.map(cate => <Card.Group key={cate.name} data={cate}  />)}
      </div>
    </div>
  )
}