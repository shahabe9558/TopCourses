const Filter = (props)=> {
    let category = props.category;
    let setCategory = props.setCategory;

    const filterHandler = (title) => {
        setCategory(title);
    }

    return(
        <div className="flex flex-wrap gap-5 justify-center mt-4">
            {
                props.filterData.map((data) => {
                    return (
                        <button onClick={()=> filterHandler(data.title)} className={`text-lg px-2 py-1 rounded-md bg-black border-2 bg-opacity-60 hover:bg-opacity-50 text-white transition-all duration-300 font-medium
                        ${
                            category === data.title
                            ? "bg-opacity-60 border-white"
                            : "bg-opacity-40 border-transparent"
                        }
                        `}>
                            {data.title}
                        </button>
                    )
                })
            }
        </div>
    )
}
export default Filter;