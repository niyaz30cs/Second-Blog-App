import { useContext } from "react";
import { Store } from "../ContextApi/ContextApi";
import "../App.css";
import {NavLink} from "react-router-dom"
function Home() {
  const [received] = useContext(Store);
  console.log(received)
  return (
    <>
      {/* Title 3 images */}

      <div className="Titleimages">
        <div className="bigimage">
          <img
            src="https://static.toiimg.com/thumb/msid-96546364,imgsize-94840,width-400,resizemode-4/96546364.jpg"
            alt="not found"
          ></img>
        </div>

        <div className="smallimage">
          <img
            src="https://3dcoil.grupopremo.com/wp-content/uploads/2017/09/Fotolia_147130183_Subscription_Monthly_M.jpg"
            alt="not found"
            height="240px"
            width="500px"
          ></img>

          <img
            src="https://res.cloudinary.com/dt84tw7zr/image/fetch/f_auto,g_auto,q_auto/https://www.gameplan-a.com/wp-content/uploads/fly-images/11787/Fitness_Class_Strenghtening_Focus-640x9999.jpg"
            alt="not found"
            height="240px"
            width="500px"
          ></img>
        </div>
      </div>

      {/* 3 horizontal div */}
      <div className="borderbottom">
      <h1 className="side">Latest</h1>
      </div>
   

      <div className="middlecontainer">
        {received.filter((item) =>  item.id >= 76 && item.id <= 79 && item.Category === "Home"  )
          .map((item, index) => {
            return (
              <div className="middlecontainerimage" key={index}>
                   <NavLink to={`/detailpage/${item.id}`} className="linkdes linkdes2">
                <img
                  src={item.image}
                  alt="not found"
                  height="250px"
                  width="390px"
                  id="boximg"
                />
                <div id="Description2">
                <h2>{item.Title}</h2>
                  <p>{item.Description.slice(0,110)+"..."}</p>
                </div>
                </NavLink>
              </div>
            );
          })}
      </div>


      <div className="maincontainer">
        {/* left side parent */}

        <div id="Lparent1">
          <h1 className="side">Latest Articles</h1>
          {received.filter((item) => item.id >= 76 && item.id <= 84 &&item.Category === "Home")

            .map((item, index) => {
              return (
                <div key={index}>
                     <NavLink to={`/detailpage/${item.id}`} className="linkdes">
                
                  <div id="parent2">
                    
                    <img
                      id="leftsideimage "
                      className="imageleftside"
                      src={item.image}
                      alt="not found"
                      height="100px"
                      width="180px"
                    />
                   
                    <div id="Description2 " className="home-left-description">
                    <h4>{item.Title}</h4> 
                    <p>{item.Description.slice(0,140)+"..."}</p>
                    </div>
                  </div>
                  </NavLink>
                </div>
              );
            })}
              <div className="bigimage2">
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202306/617f7444-525e-4d9d-8cd6-11987e43ce86_1-sixteen_nine.jpg?VersionId=Rj0w2RAz3_O4kUSaNrRJeYcUqYUWrkWV&size=690:388"
            alt="not found"
           ></img>
                </div>
        </div>

    <div className="middlecontainerright">
      <div className="Advertise"><h2 className="Adtext">Advertisement</h2></div>
        {/* popular right side parent */}
      
        <div className="Rparent1">
          <h1 className="side">Top Post</h1>
          {received
            .filter(
              (item) => item.id === 80 && item.Category === "Home"
            )
            .map((item, index) => {
              console.log(item)
              return (
                <div id="parent2"  key={index}>
                <NavLink to={`/detailpage/${item.id}`} className="linkdes special-div">
              <img
              id="special-img"
                src={item.image}
                alt="not found"
                height="240px"
                width="390px"
              />
            <div className="rightsidetitle-decription">
              <h3 className="center">{item.Title}</h3>
              <div  className="special-description special-description2">
               
                <p>{item.Description.slice(0,140)+"..."}</p>
                <h3 id="number">{index+1}</h3>
              </div>
              </div>
             
              </NavLink>
            </div>
              );
            })}
          {received
            .filter(
              (item) => item.id >= 81 && item.id <= 83 && item.Category === "Home"
            )
            .map((item, index) => {
              return (
                <div id="parent2" className="parent2-top-post" key={index}>
                     <NavLink to={`/detailpage/${item.id}`} className="linkdes">
                  <img
                    src={item.image}
                    alt="not found"
                    height="130px"
                    width="210px"
                    id="rightsideimage"
                    className="homerightsideimage"
                  />
                  <div className="rightsidetitle-decription">
              <h3 className="center">{item.Title}</h3>
                  <div id="Description"  className="home-right-description">
                    <p>{item.Description.slice(0,90)}</p>
                    <h3 id="number">{index+2}</h3>
                  </div>
                  </div>
                  </NavLink>
                </div>
              );
            })}
        </div>
    </div>
      </div>

      <div className="borderbottom">
      <h1 className="side">Story</h1>
      </div>
      <div className="middlecontainer">
        {received.filter((item) =>   item.id >= 80 && item.id <= 84 && item.Category === "Home"   )
          .map((item, index) => {
            return (
              <div className="middlecontainerimage" key={index}>
                   <NavLink to={`/detailpage/${item.id}`} className="linkdes linkdes2">
                <img
                  src={item.image}
                  alt="not found"
                  height="200px"
                  width="350px"
                  id="boximg"
                />
                <div id="Description2">
                 <h2>{item.Title}</h2>
                  <p>{item.Description.slice(0,90)+"..."}</p>
                </div>
                </NavLink>
              </div>
            );
          })}
      </div>
    </>
  );
}
export default Home;