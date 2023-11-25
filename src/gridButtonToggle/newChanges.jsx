
const LayOuting = () => {

    const Shape4Layout = [
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 1, 1, 1],
        [1, 0, 1, 1],
    ]


    console.log("This is the layouts : ", Shape4Layout.flat())
    return (
        <>
            <div className="wrapper flex justify-center items-center w-full">
                <div className={`container grid gap-5`} style={{ gridTemplateColumns: `repeat(${Shape4Layout[0].length}, 200px)` }}>
                    {Shape4Layout.flat().map((val, ind) => {
                        return (
                            <>
                                {val ? <div className="h-[200px] bg-red-500">{ind}</div> : <span>ind</span>}
                            </>)
                    })}
                </div>
            </div>
        </>)

}

export default LayOuting;