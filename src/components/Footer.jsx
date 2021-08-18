import styled from "styled-components"

const Footer = () => {
  return (
    <SFooterSection >
      <h2>CONTACT ME</h2>
      <a href="https://github.com/Sh11ntar0"><i className="fab fa-github" /></a>
      <a href="mailto:sh11ntar0h@gmail.com">sh11ntar0h@gmail.com</a>

    </SFooterSection>
  )
}

const SFooterSection = styled.section`
  min-width:320px;
  width:100%;
  height: 300px;
  background:#fff;
  color:#222;
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  line-height:3rem;
  font-size:1.5rem;
  font-family: "Knewave", cursive;


  @media screen and (max-width: 480px){
    line-height:2rem;
    font-size:1rem;
  }

`


export default Footer