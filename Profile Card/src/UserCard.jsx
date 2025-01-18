const UserData = [
    {
        name: "James",
        city: "New York",
        description: "Front end Developer",
        skills: ["Html","CSS","JS","React","Python","Django","Flask","SQl"],
        online:true,
        profile:"https://tse2.mm.bing.net/th?id=OIP.bbEC4zuJyYZq2FwlY1w1kAHaHa&pid=Api&P=0&h=180",
    },
    {
        name: "Alice",
        city: "France",
        description: "UI/UX Designer",
        skills: ["UI/UX","CSS","JS","React","Python","HTML","Java","Mysql"],
        online:true,
        profile:"https://tse3.mm.bing.net/th?id=OIP.ixZ69lPCOZ3ZO5UqSHQGIAHaHa&pid=Api&P=0&h=180",
    },
    {
        name: "Gracy",
        city: "Paris",
        description: "Backend Devloper",
        skills: ["Html","CSS","JS","Node js","Python","Express js","Flask","MangoDB","Bootstrap"],
        online:false,
        profile:"https://tse4.mm.bing.net/th?id=OIP.WpnGIPj1DKAGo-CP64znTwHaHa&pid=Api&P=0&h=180",
    },
    
]


function User(props){
    return <div className="card-container" >
        <span className={props.online ? "pro online":"pro offline" }>
            {props.online ? "ONLINE" : "OFFLINE"}
        </span>
        <img className="img" src={props.profile} alt="user" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div  className="buttons" >
            <button className="primary" >Message</button>
            <button className="primary outline" >Following</button>
        </div>
        <div className="skills" >
            <h6>Skills</h6>
            <ul>
                {props.skills.map((skill,index)=>(
                    <li key={index} >{skill}</li>
                ))}
            </ul>
        </div>
    </div>
}

export const UserCard = () => {
  return (
    <>
        {/* <User name="John" city="NewYork" description="Front-end Developer" 
        skills={["Html","CSS","JS","React","Python","Django","Flask","SQl"]}
        online={false} profile="https://tse2.mm.bing.net/th?id=OIP.bbEC4zuJyYZq2FwlY1w1kAHaHa&pid=Api&P=0&h=180" /> */}

        {UserData.map((user,index)=>(
            <User key={index} 
            name={user.name}
            city={user.city}
            description={user.description} 
            skills={user.skills}
            online={user.online}
            profile={user.profile} />
        ))}

    </>
  )
}
