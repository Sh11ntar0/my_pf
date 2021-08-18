import "../styles/Works.scss"
import WorksBox from "./WorksBox"
import productInfo from "../data/product.json";

const Works = () => {
  return (
    <section className="works-section">
      <h2 className="works-title">Works</h2>

      {productInfo &&
        productInfo.data.map((product) => (

          <WorksBox key={product.title} img={product.img} alt={product.alt}title={product.title} explain={product.explain}
          website={product.website} github={product.github} />
        ))}

    </section>
  )
}

export default Works