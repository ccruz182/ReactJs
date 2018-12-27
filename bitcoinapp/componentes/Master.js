import Head from "next/head";

import Navegacion from "../componentes/Navegacion";

const Master = props => (
  <div>
    <Head>
      <title>App Bitcoin</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css"
      />

      <script
        src="https://code.jquery.com/jquery-3.3.1.js"
        integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
        crossorigin="anonymous"
      />

      <script src="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.js" />
    </Head>
    <Navegacion />

    <div>{props.children}</div>
  </div>
);

export default Master;
