import { solutionList } from '../../data/solution'
import Card from '../../components/card'

export default function Solutions () {
  return (
    <div className='m-[20px] flex gap-5 flex-wrap'>
      <div className="flex wrap gap-4">
        {solutionList.map(cate => <Card.Group key={cate.name} data={cate}  />)}
      </div>
    </div>
  )
}