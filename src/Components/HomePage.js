import React from 'react'
import '../App.css'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Carousel from 'react-bootstrap/Carousel'


class HomePage extends React.Component {
    render() {
        return (
            <div className="Home-page">
                <Jumbotron fluid id="jumbotronHome">
                <Container>
                    <h1>City App</h1>
                    <p>
                    Bienvenue sur l'application City App pour retrouver des stations de vélos libre.
                    </p>
                </Container>
                </Jumbotron>
            </div>
        )
    }
}

export default HomePage