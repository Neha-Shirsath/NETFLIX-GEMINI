const VideoTitle = ({title, overview}) => {
    return (
        <div className=" w-screen aspect-video pt-[20%] px-12  absolute text-white bg-gradient-to-r from-black">
            <h1 className="  text-5xl font-bold">{ title }</h1>
            <p className="py-6 text-lg w-1/4">{ overview }</p>
            <div className="">
                <button className="m-1 p-2 px-6 rounded-sm bg-white text-black font-bold hover:bg-opacity-80">
                    ▶︎ Play
                </button>
                <button className="m-1 p-2 px-6 rounded-sm bg-zinc-300 text-white font-bold bg-opacity-40">
                    ⓘ More Info
                </button>

            </div>
        </div>
    )
}

export default VideoTitle;