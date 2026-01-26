
import Masonry from './Masonry';

const items = [
  // Imágenes en la raíz de imgs
  { id: '1', img: '/imgs/EVIDENCIA%20DE%20TRABAJO%202.jpeg', url: '#', height: 350 },
  { id: '2', img: '/imgs/Fachada%20en%20CRISTA.jpeg', url: '#', height: 320 },
  { id: '3', img: '/imgs/Pasamanos%20vehiculares.jpeg', url: '#', height: 400 },
  { id: '4', img: '/imgs/Pérgola%20en%20el%20Retiro.jpeg', url: '#', height: 380 },
  { id: '5', img: '/imgs/evidencia%201.jpg', url: '#', height: 300 },
  { id: '6', img: '/imgs/evidencia%202.jpeg', url: '#', height: 340 },
  { id: '7', img: '/imgs/evidencia%203.jpg', url: '#', height: 310 },

  // Subcarpeta fachada crista
  { id: '8', img: '/imgs/fachada%20crista/CRISTA.jpeg', url: '#', height: 350 },
  { id: '9', img: '/imgs/fachada%20crista/FACHADA.jpeg', url: '#', height: 320 },
  { id: '10', img: '/imgs/fachada%20crista/FachadaenCRISTA.jpeg', url: '#', height: 340 },

  // Subcarpeta pasamanos vehicular
  { id: '11', img: '/imgs/pasamanos%20vehicular/PasamanosenviaSan%20Luis.jpeg', url: '#', height: 300 },
  { id: '12', img: '/imgs/pasamanos%20vehicular/Pasamanosvehiculares.jpeg', url: '#', height: 370 },

  // Subcarpeta pergola del retiro
  { id: '13', img: '/imgs/pergola%20del%20retiro/PERGOLARETIRO.jpeg', url: '#', height: 400 },
  { id: '14', img: '/imgs/pergola%20del%20retiro/PergolaenelRetiro.jpeg', url: '#', height: 350 },
  { id: '15', img: '/imgs/pergola%20del%20retiro/pergola4.jpeg', url: '#', height: 320 },
  { id: '16', img: '/imgs/pergola%20del%20retiro/pergola5.jpeg', url: '#', height: 360 },
];

const Gallery = () => {
  return (
    <div className="px-4 py-8">
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover
        hoverScale={0.95}
        blurToFocus
        colorShiftOnHover={false}
      />
    </div>
  );
};

export default Gallery;
