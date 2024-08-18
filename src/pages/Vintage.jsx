
import Card from 'react-bootstrap/Card';

function Vintage() {
  return (
    <div className='containerr'>
     <h3 className='mt-3' style={{textAlign:'center', color: '#333', fontFamily: 'cursive', textDecoration: 'underline'}}>🕰️ Vintage Section Comming Soon 🕰️</h3>
      <div className ='d-flex justify-content-around mt-3'>
      <div>
    <Card className = 'shadow p-3 mb-5 bg-body-tertiary rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://vintagevehicleskerala.com/assets/images/recent-car-2.jpg" />
      <Card.Body>
        <Card.Title><h4>OHV AMBASIDOR</h4><h2 style={{fontWeight:'bold'}}>1959</h2></Card.Title>
        
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card  className = 'shadow p-3 mb-5 bg-body-tertiary rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://vintagevehicleskerala.com/assets/images/recent-car-5.jpg" />
      <Card.Body>
        <Card.Title><h4>MARUTI SS80</h4><h2 style={{fontWeight:'bold'}}>1984</h2></Card.Title>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card className = 'shadow p-3 mb-5 bg-body-tertiary rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top"   src="https://vintagevehicleskerala.com/assets/images/recent-jeep-4.jpg" />
      <Card.Body>
        <Card.Title><h4>WILLYS JEEP</h4><h2 style={{fontWeight:'bold'}}>1945</h2></Card.Title>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  );
}

export default Vintage;