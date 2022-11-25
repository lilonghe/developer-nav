import Tag from '../../components/tag';

export default function Solutions () {
  return (
    <div className='m-[20px]'>
      <div className="flex wrap gap-4">
        {solutionList.map(item => (
          <a
            key={item.name}
            href={item.repository}
            target='_blank'
            rel='noreferrer'
            className='flex flex-col w-[300px] p-4 rounded overflow-hidden shadow-md'
          >
            <h3 className="text-xl mb-2">{item.name}</h3>
            <div className='mb-2'>
                {item.tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
            </div>
            <ul class='feature-list text-sm text-stone-400'>
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

const solutionList = [
  {
    name: 'React 权限检查',
    featureList: [
      '提供 Auth 组件',
      '提供 useAuth hook',
      '提供 React-Router 路由守卫案例'
    ],
    repository: 'https://stackblitz.com/edit/vitejs-vite-7nrbfd',
    tags: ['React', '权限']
  },
  {
    name: 'Vue3 权限检查',
    featureList: [
      '提供 Auth 组件',
      '提供 useAuth hook',
      '提供 Vue-Router 路由守卫案例'
    ],
    repository: 'https://stackblitz.com/edit/vitejs-vite-yk5qlg',
    tags: ['Vue3', '权限']
  },
  {
    name: 'Webpack 实时 Mock',
    featureList: [
      '实时更新 Mock 信息',
      '可以获取请求信息填充返回',
      '支持 JS 和 JSON 两种配置方式'
    ],
    repository: 'https://github.com/lilonghe/solution-frontend-mockdata',
    tags: ['Webpack', 'Mock']
  }
]
