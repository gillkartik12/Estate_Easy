import { useContext } from "react";
import SearchBar from "../../components/searchBar/SearchBar";
import "./about.scss";
import { AuthContext } from "../../context/AuthContext";

function About() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="about">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">About us</h1>
          <p>
            {" "}
            EstateEase is one of Canada’s classifieds site with thousands of
            housing ads. Various new ads are posted by users every day! We’re
            proud to provide a platform that connects Canadians, helping them to
            buy great places in their community, make money of renting up
            houses, and help the country grow.
            <br />
            <br />
            <br />
            When we launched EstateEase in 2014, the idea was to offer Canadians
            a fun and easy way for people in the same area to buy, sell, rent ,
            and even help each other with housing services. That has not changed
            and now over 100 communities coast to coast are doing more for less.
            EstateEase Central is here to help you get the best experience.
            EstateEase connections are between people who live near each other,
            you can always view the place before you buy or rent it.
          </p>
          <h3 className="search-h3">You can search for places below:</h3>
          <div className="search">
            <SearchBar className="search" />
          </div>

          <div className="boxes">
            <div className="box1">
              <h1>10+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box2">
              <h1>200</h1>
              <h2>Awards Gained</h2>
            </div>
            <div className="box3">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default About;
