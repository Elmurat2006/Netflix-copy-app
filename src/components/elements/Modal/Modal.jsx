import {useState} from 'react'
import {Button,Modal} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalWindow = ()=>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <>
      <Button className ="btn-btn-component"
       style ={{marginRight:15,marginBottom:10,
       borderRadius:30,height:50,background:0,
       border: '1px solid rgba(255, 255, 255, 0.7)',
       padding: '0.5rem 1 rem',backgroundColor: 'transparent', outline: 'none',
       fontSize:18,display: 'inline-flex',alignItems: 'center',
       justifyContent: 'center', width: 150,color:'#9b9a97',marginLeft:40}} 
       onClick={handleShow}>
      <i  style = {{fontSize:18}}className="bx bx-play" style={{color: '#c62e21'}}></i>
            <span>Play</span>
      </Button>

      <Modal  width="100%"show={show} onHide={handleClose}>
        <Modal.Header>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/bxwt6TvNxas" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Modal.Header>
        <Modal.Body>Avengers Final Film</Modal.Body>
        <Modal.Footer>
          <Button className = "modal-button" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalWindow
