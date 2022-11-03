import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const Cards = () => {
  return (
    <>
      <div class="container">
        <div class="row">
          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Courses</Card.Title>

                <Button variant="primary">Count</Button>{' '}
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Courses</Card.Title>

                <Button variant="primary">Count</Button>{' '}
              </Card.Body>
            </Card>
          </div>

          <div className='col-lg-4'>
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Courses</Card.Title>

                <Button variant="primary">Count</Button>{' '}
              </Card.Body>
            </Card>
          </div>
        </div>


      </div>





    </>
  )
}

export default Cards;