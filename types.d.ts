interface IDataItem {
    name: string
    tags?: string[]
    language?: string
    url: string
    intro: string
    poster?: string
    summary?: string | string[]
}

interface IDataGroup {
    name: string
    list: IDataItem[]
}