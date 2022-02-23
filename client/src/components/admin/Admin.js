import React from "react";
import { useEffect, useState } from "react";
import styled from "styled-components";
import FileBase64 from "react-file-base64";
import './adminStyle.css';
import MainTitle from "../main/MainTitle"
import { createItem, getItems } from "./function";
function Admin({}) {
  const [item, setItem] = useState({ image: "", title: "", description: "" });
  const [items, setItems] = useState([]);
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await createItem(item);
    setItems([...items, result]);
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await getItems();
      console.log("fetch data;m", result);
      setItems(result);
    };
    fetchData();
  }, []);
  return (
    <div>
        <MainTitle title={'Add a Card to our users'} subtitle={'Welcome To Admin Page'} />
      <form action="" onSubmit={onSubmitHandler}>
          <label>Title : </label>
        <input
          type="text"
          className="input-field"
          onChange={(e) => setItem({ ...item, title: e.target.value })}
        />
        <label>Description : </label>
        <input
        type="text"
        className="input-field"
        onChange={(e) => setItem({ ...item, description: e.target.value })}
      />
        <FileBase64
          type="file"
          multiple={false}
          onDone={({ base64 }) => setItem({ ...item, image: base64 })}
        />
        <div className="right-align">
          <button className="ctas-btn">submit</button>   
        </div>
      </form>
      {items?.map((slide) => (      
        <AdminStyled>
        <userStyled>
        <div className="gradient-cards-con" >
          <div id="g-card" key={slide._id}>
            <div className="inner-content">
              <div className="image">
                <img src={slide.image} alt="" />
                <div className="name">
                  <img src={slide.image} alt="" />
                  <p>{slide.title}</p>
                </div>
              </div>
              <div className="card-content">
                <h6 className="card-title">{slide.description}</h6>
              </div>
            </div>
          </div>  
          </div> 
          </userStyled>
        </AdminStyled>    
      ))}
    </div>
  );
}
const AdminStyled = styled.div`
border-radius: 20px;
font-size: 1rem;
display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        margin: 2rem 0;
#g-card{
    
    margin: .2rem;
    .inner-content{
        background-color: #091026;
        padding: .8rem;
        border-radius: 20px;    
        
    }
    .image{
        width: 100%;
        position: relative;
        img:first-child{
            width: 100%;
            object-fit: cover;
            height: 300px;
            border-radius: 10px;
        }
        .name{
            position: absolute;
            left: 50%;
            bottom: -26px;
            background-color: #03091f;
            display: flex;
            flex-wrap: ;
            align-items: center;
            transform: translateX(-50%);
            width: 75%;
            padding: .5rem .5rem;
            border-radius: 70px;
            border: 1px solid rgba(255,255,255, 0.8);             
            img{
                width: 45px;
                object-fit: cover;
                height: 45px;
                border-radius: 50%;
                margin-right: 2rem;
            }
        }
    }
    .card-content{
        padding-top: 3rem;
        .card-title{
            font-size: 1.3rem;
            font-weight: 500;
            padding-bottom: .6rem;
        }     
    }
    
}
`;
export default Admin;
