import { COLORFUL_TEXT } from '../../utils/constant'
import Tag from '../tag';

function Card({ data }: { data: IDataItem }) {
    return (
        <a key={data.name}
            href={data.url}
            target='_blank'
            className='flex flex-col w-[200px] rounded overflow-hidden shadow transition-all duration-200 hover:shadow-md' rel="noreferrer">
            <div
                className={`h-[100px] bg-center bg-[length:100%_100%] hover:bg-[length:150%_150%] transition-all duration-300`}
                style={{ backgroundImage: `url(${data.poster}` }}>
                <h3 className="h-full flex justify-center items-center text-xl text-white drop-shadow-md bg-gradient-to-r from-pink-500/30 to-blue-500/30">{data.name}</h3>
            </div>
            <div className="p-3 pb-1 text-sm">
                {data.intro}
            </div>
            {data.tags && <div className='mb-1 pl-3 flex'>
                {data.tags.map(item => <Tag key={item}>{item}</Tag>)}    
            </div>}
            <div className="px-3 pb-3 text-xs text-stone-400">
                {typeof data.summary === 'string' ? data.summary : data.summary?.map(str => <div key={str}>{str}</div>)}
            </div>
        </a>
    )
}

function CardGroup({ data }: { data: IDataGroup }) {
    return <div key={data.name} className="mb-8">
        <h2 className="text-lg mb-4">
            <span className={COLORFUL_TEXT}>{data.name}</span>
        </h2>
        <div className='flex wrap gap-4'>
            {data.list.map(item => <Card key={item.name} data={item} />)}
        </div>
    </div>
}

Card.Group = CardGroup

export default Card;