
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <div>
      <h3 className='mt-3' style={{textAlign:'center'}}>FEATURED VEHICLES</h3>
    <div className ='d-flex justify-content-around mt-3'>

      <div>
    <Card className = 'shadow p-3 mb-5 bg-body-tertiary rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.evmwheels.com/front-theme/images/tabImg1.png" />
      <Card.Body>
        <Card.Title><h4>SKODA</h4><h2 style={{fontWeight:'bold'}}>SLAVIA</h2></Card.Title>
        
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card  className = 'shadow p-3 mb-5 bg-body-tertiary rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.evmwheels.com/front-theme/images/tabImg2.png" />
      <Card.Body>
        <Card.Title><h4>MG</h4><h2 style={{fontWeight:'bold'}}>HECTOR</h2></Card.Title>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card className = 'shadow p-3 mb-4 bg-body-tertiary rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:"130px"}} src="https://www.evmwheels.com/front-theme/images/tabImg3.png" />
      <Card.Body>
        <Card.Title><h4>VW</h4><h2 style={{fontWeight:'bold'}}>POLO</h2></Card.Title>
      </Card.Body>
    </Card>
    </div>
    <div>
    <Card className = 'shadow p-3 mb-5 bg-body-tertiary rounded' style={{ width: '18rem' }}>
      <Card.Img variant="top" style={{height:"130px"}}  src="https://www.evmwheels.com/front-theme/images/tabImg4.png" />
      <Card.Body>
        <Card.Title><h4>TOYOTA</h4><h2 style={{fontWeight:'bold'}}>INNOVA</h2></Card.Title>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
  );
}

export default BasicExample;