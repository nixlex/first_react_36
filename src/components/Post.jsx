export default function Post({ title, shortDescr, tags, date }) {


    return (
        <div className="bg-white p-6">
            <h3 className="text-[26px] font-bold mb-5">{title}</h3>
            <div className="mb-5 text-[#21243D] flex gap-x-6 items-center">
                <span>{date}</span>
                |
                <span>{tags}</span>
            </div>
            <p className="text-[#21243D]">{shortDescr}</p>
        </div>
    )
}