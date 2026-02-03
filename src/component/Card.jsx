




const Card=(props)=>{



    return(<>
    <a href={props.el.url} target="_blank">
            <div className="h-40 w-100  bg-white rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover "
                src={props.el.download_url}
                alt=""
              />
            </div>
            <h2 className="font-bold text-lg">{props.el.author}</h2>
          </a>
    </>)
}



export default Card;