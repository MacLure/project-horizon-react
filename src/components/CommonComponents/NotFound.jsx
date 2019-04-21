import React from "react";
import styled from "styled-components";
import Footer from "./Footer";
import StudentNavbar from "./../StudentComponents/StudentNavbar";
import Ben from "../../assets/img/ben-pixel.png";
import Gabbi from "../../assets/img/gabbi-pixel.png";
import Malcolm from "../../assets/img/malcolm-pixel.png";

const Error404 = styled.div`
  background-color: #232f41;
  margin: auto;
  width: 35%;
  border-radius: 2px;
  padding: 10px 0px;
`;

const Text = styled.p`
  padding: 20px;
  text-align: center;
  transition: color 0.5s;
`;

const Button = styled.button`
  margin: 20px 10px;
  /* padding: 5px 10px; */
  width: 110px;
  height: 33px;
  cursor: pointer;

  background-color: #dd3d0f;
  border: none;
  opacity: 1;
  transition: opacity 0.5s;
  border-radius: 2px;
  font-size: 1.1em;
  text-align: center;

  :hover {
    opacity: 0.5;
    transition: opacity 0.45;
  }
`;

const Container = styled.div`
  display: flex;
  flex-dirextion: row;
  flex-wrap: nowrap;
  justify-content: center;
  background-color: inherit;
`;
document.body.style.backgroundColor = "#212229";

const NotFound = () => {
  return (
    <React.Fragment>
      <StudentNavbar />
      <Error404>
        <Text>404: The page you are requesting could not be found.</Text>
        <Text>Who would you like to blame?</Text>

        <Container>
          <div style={{ display: "inline-blocl", textAlign: "center" }}>
            <a
              target="_blank"
              without
              rel="noopener noreferrer"
              href="https://twitter.com/Malcolm_MacLure"
            >
              <img src={Malcolm} alt="Malcolm" />
              <Button>Malcolm</Button>
            </a>
          </div>

          <div style={{ display: "inline-blocl", textAlign: "center" }}>
            <a
              target="_blank"
              without
              rel="noopener noreferrer"
              href="https://twitter.com/macgabbi"
            >
              <img src={Gabbi} alt="Gabbi" />
              <Button>Gabriela</Button>
            </a>
          </div>
          <div style={{ display: "inline-blocl", textAlign: "center" }}>
            <a
              target="_blank"
              without
              rel="noopener noreferrer"
              href="https://twitter.com/mrbenjaminhoppe"
            >
              <img src={Ben} alt="Ben" />
              <Button>Benjamin</Button>
            </a>
          </div>
        </Container>
        <br />
      </Error404>
      <Footer />
    </React.Fragment>
  );
};

export default NotFound;
