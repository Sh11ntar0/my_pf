import styled from "styled-components"


const Hero = () => {
  return (
    <SHeroSection>
      <SHero>
        <STitle>Hello,</STitle>
        <STitle>&nbsp;I'm ASDFGHJ</STitle>
        <SSubtitle>A Front-end</SSubtitle>
        <SSubtitle>&nbsp;Web Developer</SSubtitle>
      </SHero>
    </SHeroSection>
  )
}

const SHeroSection = styled.section`
  min-width:320px;
  max-width:1440px;
  width:100%;
  height: 100vh;
  font-family: 'Permanent Marker', cursive;
  display:flex;
  justify-content:center;
  align-items:center;
  text-align:center;

`

const SHero = styled.div`
  width:100%;
`

const STitle = styled.h1`
  font-size:7rem;
  line-height:7rem;
  display:inline-block;


  @media screen and (max-width: 800px) {
    font-size:5rem;
    line-height:5rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 3.5rem;
    line-height: 3.5rem;

  }
`

const SSubtitle = styled.h3`
  font-size:4rem;
  line-height:6rem;
  display:inline-block;

  @media screen and (max-width: 800px) {
    font-size:2rem;
    line-height:4rem;
  }

  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
    line-height: 3rem;

  }
`

export default Hero