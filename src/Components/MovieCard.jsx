import React from 'react'
import Card from 'react-bootstrap/Card';
import imagePoster from "../Assets/Images/imagePoster.jpg"
import { FaGreaterThan } from 'react-icons/fa';

const MovieCard = () => {
  return (
    <div className='movie_card'>
        <div className='movie_cards_title'>
            <h4>Featured</h4>
            <h5>See More <span><FaGreaterThan size={20}/></span></h5>
        </div>
        <div className='movie_cards_container'>  
          
       
            <Card style={{ width: '18rem' }} className="movie_card" data-testid="movie-card">
                <Card.Img variant="top" src={imagePoster} data-testid="movie-poster"/>
                <Card.Body>
                    <Card.Title data-testid="movie-title">Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.    
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="movie_card">
                <Card.Img variant="top" src={imagePoster} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="movie_card">
                <Card.Img variant="top" src={imagePoster} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }} className="movie_card">
                <Card.Img variant="top" src={imagePoster} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    
                </Card.Body>
            </Card>
           
        </div>
    </div>
  )
}

export default MovieCard