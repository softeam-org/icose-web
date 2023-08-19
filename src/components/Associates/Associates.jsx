function Associates({avatar_url, name, nameFunction}){
    return(
        <div className="flex flex-col justify-self-center items-center">
                <img src={avatar_url} alt="avatar" />
                <p className="font-bold">{name}</p>
                <p className="text-base">{nameFunction}</p>
        </div>
    )
}

export default Associates;