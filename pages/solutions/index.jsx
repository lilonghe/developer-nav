import Tag from '../../components/tag';
import { solutionList } from '../../data/solution'

export default function Solutions () {
  return (
    <div className='m-[20px]'>
      <div className="mb-1 text-stone-400 italic text-sm">
        “本页面列出项目开发中常见的一些场景解决方案，帮助实现业务场景需求”
      </div>
      <div className="flex wrap gap-4">
        {solutionList.map(item => (
          <a
            key={item.name}
            href={item.repository}
            target='_blank'
            rel='noreferrer'
            className='flex flex-col w-[300px] p-4 rounded overflow-hidden shadow transition-all duration-200 hover:shadow-md'
          >
            <h3 className="text-xl mb-2">{item.name}</h3>
            <div className='mb-2'>
                {item.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </div>
            <ul className='text-sm text-stone-400'>
              {item.featureList.map(feature => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </a>
        ))}
      </div>
    </div>
  )
}