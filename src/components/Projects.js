import { Modal, Button, Card } from "react-bootstrap";
import thornbush from './img/thornbushRCscreenshot.PNG'

const Projects = () => {


  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Card className="thornbushCard">
            <img src={thornbush} className="thornbush" />
            <Card.Body className="thornCardBody">
              <Card.Title className="thornbushHeader">Thornbush RC</Card.Title>
              <Card.Text className="thornCardText">
                Hobby website built using MERN stack. JWT, bcrypt, mongoose and more for user auth and database.
              </Card.Text>
              <Button variant="outline-dark">ThornbushRC.com</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  )
};

export default Projects;
