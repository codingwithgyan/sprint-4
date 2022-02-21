export function Card({url,title,desc,author,create_data,explicit,quality})
{
    return <div className="result">
             <a  style={{float:"left"}} href={url}>{url}</a><br/>
             <h4  style={{textAlign:"left"}} ><a href="#">{title}</a> | {author}</h4>
             <p  style={{textAlign:"left"}} >{desc}</p>
             <p  style={{textAlign:"left"}} >Creation Date : {create_data}</p>
             <p  style={{textAlign:"left"}} >Explicit : {explicit} } Quality : {quality}</p>
    </div>
}