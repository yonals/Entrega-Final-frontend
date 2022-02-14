import { Carousel } from 'react-carousel-minimal';
import "./Caroservi.css";

function Caroservi() {
 const data = [
    {
      image: "https://www.maquinilladeafeitar.com/wp-content/uploads/2018/05/afeitado-barberia.jpg",
      caption: "Perfilado de Barba"
    },
    {
      image: "https://www.barberiabravos.cl/servicios/perfilado-de-cejas-barberia-bravos.png",
      caption: "Perfilado de Cejas"
    },
    {
      image: "https://thumbs.dreamstime.com/b/spa-y-cuidado-de-la-piel-para-hombres-barber-profesional-aplica-m%C3%A1scara-carb%C3%B3n-negro-al-cliente-180654167.jpg",
      caption: "Tratamiento Facial (Black Mask)"
    },
    {
      image: "https://thumbs.dreamstime.com/z/depilaci%C3%B3n-con-cera-de-nariz-hombre-procedimientos-belleza-y-cuidado-en-peluquer%C3%ADa-212227222.jpg",
      caption: "Depilación de Nariz"
    },
    {
      image: "https://www.depilaciones.com.ar/wp-content/uploads/orejas-cera-1024x642.jpg",
      caption: "Depilación de Oido"
    },
    {
      image: "https://c8.alamy.com/compes/hh3ekt/peluqueria-comprobando-la-simetria-del-corte-de-pelo-de-su-cliente-en-la-barberia-hombre-barbado-obtencion-de-corte-de-pelo-en-la-peluqueria-de-peluqueria-hh3ekt.jpg",
      caption: "Corte de Cabello"
    },
    {
      image: "https://media.istockphoto.com/photos/little-boy-getting-haircut-by-barber-while-sitting-in-chair-at-picture-id680907176",
      caption: "Corte de Cabello Niño"
    },
    {
      image: "https://previews.123rf.com/images/zinkevych/zinkevych1504/zinkevych150400334/38605226-afeitarse-la-barba-peluquer%C3%ADa-poner-un-poco-de-crema-de-afeitar-en-un-cliente-antes-de-afeitarse-la-.jpg",
      caption: "Afeitado al Ras"
    },
    {
      image: "https://i.ytimg.com/vi/U0SZy8XNujU/maxresdefault.jpg",
      caption: "Colorimetria"
    }
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }
  return (
    <div className="App">
      <div className="title">
        <h1><i>Un Spa para el cuidado Masculino</i></h1>
        <h3>Llegaste al Siguiente Nivel en Barberia</h3>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={3000}
            width="100%"
            height="450px"
            captionStyle={captionStyle}
            radius="15px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "100%",
              maxHeight: "450px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Caroservi;
