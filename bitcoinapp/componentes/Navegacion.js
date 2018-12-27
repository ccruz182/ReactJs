import Link from "next/link"

const Navegacion = () => (  
  <nav style={{backgroundColor: "#5D675B", padding: "1em"}}>
    <Link href="/"><a style={{color: "white", textDecoration: "none"}}>Todo bitcoin</a></Link>    
  </nav>
);

export default Navegacion;