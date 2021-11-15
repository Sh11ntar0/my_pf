import styled from "styled-components"

const About = () => {
  return (
    <SAboutSection>
      <STitle>About</STitle>
      <SAbout>
        <SAboutFigure >
          <SAboutImg src="/img/profile_img.jpg" alt="profile" />
        </SAboutFigure>

        <SAboutName>Shintaro Okamoto</SAboutName>
        <SAboutText>I’m an innovative Front-end Web Developer with hands-on skills in a wide range of software, tools, and programming languages.<br />
        I'm passionate about bringing ideas to life, learning new technologies, and working with dedicated teams!
        </SAboutText>

      </SAbout>
    </SAboutSection>
  )
}

const SAboutSection = styled.section`
  width:100%;
  font-family: 'Montserrat', sans-serif;
  /* padding: 3rem; */
`;

const STitle = styled.h2`
  width:100%;
  font-family: 'Knewave', cursive;
  text-align:center;
  font-size:3rem;
  line-height:3rem;
  letter-spacing:0.1rem;
  margin-bottom:3rem;
  font-weight:100;
`;

const SAbout = styled.div`
max-width:1440px;
  /* background: orange; */
  width: 80%;
	margin: auto;
	display: grid;
  grid-column-gap: 50px;
	grid-template-areas:
		"img name"
    "img text"
    "img text";
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;



  @media screen and (max-width: 800px) {
    grid-template-areas:
    "name"
    "img"
    "text";
    padding: 1rem;

    grid-template-columns: 1fr;
    grid-template-rows: auto;

  }
  @media screen and (max-width: 500px) {
    padding: 0 0 3rem 0;

  }

`;

const SAboutFigure = styled.figure`
  max-width: 400px;
  width: 100%;
  grid-area: img;
  opacity:0.9;

  @media screen and (max-width: 800px) {
    margin: 0 auto;
    min-width: 200px;
    width:100%;
  }

`;

const SAboutImg = styled.img`
  width:100%;
  object-fit:contain;
`

const SAboutName = styled.h2`
  font-size: 2rem;
  font-weight: 600;
	grid-area: name;
	display: flex;
  align-items: center;

  @media screen and (max-width: 800px) {
    justify-content: center;
    margin-bottom: 1.5rem;
    width:100%;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
}
`;

const SAboutText = styled.p`
  font-size: 1.5rem;
	font-weight: 300;
	line-height: 2.5rem;
	grid-area: text;
  margin: 1rem 0;

  @media screen and (max-width: 800px) {
    text-align:center;
    width:100%;
    margin: 2rem 0 ;
  }

`;
export default About