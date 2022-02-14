import { Carousel } from 'react-carousel-minimal';

function App() {
 const data = [
    {
      image: "https://i.pinimg.com/564x/6a/d3/c7/6ad3c7b46d7d197daefbd7ab0f72cf24.jpg",
      caption: "Pool"
    },
    {
      image: "http://tecnostore.pe/wp-content/uploads/2015/03/ps4_9367.jpg",
      caption: "Play"
    },
    {
      image: "https://www.diariamenteali.com/medias/5-bebidas-saludables-perfectas-para-el-verano-1900Wx500H?context=bWFzdGVyfGltYWdlc3wxOTYxNTh8aW1hZ2UvanBlZ3xoMGMvaDJlLzkwNzQ1NTc1MTc4NTQvNS1iZWJpZGFzLXNhbHVkYWJsZXMtcGVyZmVjdGFzLXBhcmEtZWwtdmVyYW5vXzE5MDBXeDUwMEh8OTRiNTljM2YwMGE5ZGQ1OWM5MDYzNTViNTExMTQ3ZjJmMTNiYzg3ZmYyMzVlYTU1OTYzOGVmMTQ2YWIxNmM2Mw",
      caption: "Tragos"
    },
    {
      image: "https://www.hogarmania.com/archivos/201803/ver-futbol-desde-casa-668x400x80xX.jpg",
      caption: "Futbol !!"
    },
    {
      image: "https://i.pinimg.com/originals/66/78/25/667825cdc8c9927be27545b72a93c0d6.png",
      caption: "Bowling"
    },
    {
      image: "https://static.guiainfantil.com/media/2240/guardeG.jpg",
      caption: "Guarderia"
    },
    {
      image: "https://unbuendiaenbarcelona.com/wp-content/uploads/2020/03/salchicha1-785x532.jpg",
      caption: "Pet Friendly"
    },
    {
      image: "https://www.xgn.nl/images/articles/2021/202112/_970x545_crop_center-center_82_line/netflix-gbb5dd7381_1920.f1638964530.jpg",
      caption: "Tus Series Favoritas"
    },
    {
      image: "https://iot.org.ar/wp-content/uploads/2021/03/parking_privado.jpg",
      caption: "Estacionamiento Privado"
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
      <div style={{ textAlign: "center", fontSize: "1.4em", }}>
        <h1>Salas de Esperas Soñadas!!</h1>
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

export default App;
