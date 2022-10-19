import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import Card from '../Component/Card'
import CardHome from '../Component/CardHome'
import SmallCard from '../Component/SmallCard'
import { store } from './Details'

const Home = () => {

  const [detail] = useContext(store);
  return (

    <div>
    <div  className='Home'>
      
        <div className="home__container">
      <div className="home__first">
        <h1></h1>
      </div>
      <div className="home__sec">
       <Link to="/fitness" > <img src="https://th.bing.com/th/id/R.89e5904c81ba7235df4d829ab11f4bb5?rik=bcX4ApDrUIisjg&riu=http%3a%2f%2f3.bp.blogspot.com%2f-oitJuqPJVuU%2fUAjxRB580iI%2fAAAAAAAAPdY%2f7jGoZt0wvd8%2fs1600%2fThe-Dark-Knight-Rises-the-dark-knight-rises-30989933-1600-1200.jpg&ehk=9cZB9LzoS9IVlIHkdA8khR0o9AcvKjjDtLBgqzjA6mo%3d&risl=&pid=ImgRaw&r=0" alt="not foun" /></Link>
       
      </div>
      </div>
      <div className="home__thir">
       <Link to='/technology'>   <img src="https://th.bing.com/th/id/R.41638ebd9ecc8d847b1e144912c6bb99?rik=p3H%2bGqsesZLklA&riu=http%3a%2f%2fwww.joylesscreatures.com%2fuploads%2f2%2f4%2f0%2f6%2f24065305%2f9894632_orig.jpg&ehk=ywaxSkJH9txBLsk6H7z%2fuC6UZHKF8n0m%2ftCaUK6L26I%3d&risl=&pid=ImgRaw&r=0" alt="not found" /></Link>
          </div>
          <h1 style={{marginTop:"40px"}}>The Latest</h1>
          <hr style={{width:"200px",  thickness:"20px"}} />
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "bollywood" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "technology" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
          <div className='home__left left1'>
                    {
                        detail.filter((article) => { return article.category === "food" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Articles</h1>
                
                <h1 className='Top' >Top Posts</h1>
                <hr style={{width:"200px",  thickness:"20px",}} />
                

                <div className='rightbar2'>
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <Card
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                <div className="sidebar2">
                    {
                        detail.filter((article) => { return article.category === "mix" }).map((n) => (
                            <SmallCard
                                articleid={n.id}
                                imgUrl={n.Image}
                                description={n.description.slice(0, 200)}
                                title={n.title.slice(0, 25)}
                                author={n.author}
                            />
                        ))
                    }

                    <div className='advertisement'>
                       <p>Advertisement</p>
                    </div>
                </div>
                <h1 style={{marginTop:"40px", display : "inline-block"}}>Latest Stories</h1>
                <hr />

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer1" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer2" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>

                <div className='home__left'>
                    {
                        detail.filter((article) => { return article.category === "footer3" }).map((n) => (
                            <CardHome
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                author={n.author}
                            />
                        ))
                    }
                </div>
                    
    </div>
  
    </div>
  )
}

export default Home