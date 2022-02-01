import React from 'react';
import {Modal,Button} from 'react-bootstrap'
import blackWidow from '../../../images/blackWidow.jpeg';

const Favourites = (props)=>{
    return(
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            FAVOURITES FILMS FROM MARVEL
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>BLACK WIDOW</h4>
          <p>
          In Marvel Studios' action-packed spy thriller "Black Widow," Natasha Romanoff aka Black Widow confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises
          </p>
          {/* <img src={blackWidow} alt="" /> */}
          <iframe style ={{display: 'flex',alignItems:'center',justifyContent: 'center',margin:'0 auto'}} width="560" height="315" src="https://www.youtube.com/embed/0k82-pGgryk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    )
}

const FavouritesState = ()=>{
    const [modalShow, setModalShow] = React.useState(false);

    return(
        <>
        <Button        style ={{marginRight:15,marginBottom:10,
       borderRadius:30,height:50,background:0,
       border: '1px solid rgba(255, 255, 255, 0.7)',
       padding: '0.5rem 1 rem',backgroundColor: 'transparent', outline: 'none',
       fontSize:18,display: 'inline-flex',alignItems: 'center',
       justifyContent: 'center', width: 150,color:'#9b9a97',marginLeft:10}} 
       variant="primary" onClick={() => setModalShow(true)}>
          Favourites
        </Button>
  
        <Favourites
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    )
}
export default FavouritesState