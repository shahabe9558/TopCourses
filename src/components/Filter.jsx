const Filter = (props)=> {
    let category = props.category;
    let setCategory = props.setCategory;

    const filterHandler = (title) => {
        setCategory(title);
    }

    return(
        <div>
            {
                props.filterData.map((data) => {
                    return (
                        <button onClick={()=> filterHandler(data.title)}>
                            {data.title}
                        </button>
                    )
                })
            }
        </div>
    )
}
export default Filter;