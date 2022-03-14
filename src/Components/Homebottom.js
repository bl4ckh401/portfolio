import React, { useEffect, useState } from 'react';

function Homebottom() {
    const [projects, setProjects] = useState([])

    const onLoad = () => {
        const requestOptions = { 
            method:"GET",
            headers: { 'Content-Type': "application/json"},
            }
            fetch('https://pavsportfolio.herokuapp.com/api/work/', requestOptions)
            .then(response => response.json())
            .then((data) => {
                setProjects(data)
                console.log(data)}
            )}

    useEffect(() => {
        onLoad()    
    }, []);
     
  return <div className='homebottom'>
      <div className='card_holder'>
            {
                projects.map((project) => {
                    return(
                    <div className="catalogue_card" key={project.id}>
                        <div className="catalogue_org">
                            <div className="catalogue_main">
                            <div className="item_desc">
                                <div className="catalogue_img">
                                    <img className="catalogue_img" src={project.cover_image} alt="alternative project image" ></img>
                                </div>
                                <div className="item_div">
                                    <h3>Title : <span className="item_name">{project.project_title}</span></h3>
                                </div>
                                <div className="item_div">
                                    <h3>Languages : <span className="item_name">{project.languages}</span></h3>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

      </div>
</div>;
}

export default Homebottom;