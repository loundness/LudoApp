import React from 'react'
import '../App.css'
import Image from 'react-bootstrap/Image'
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
                <Carousel>
                    <Carousel.Item>
                        <img
                        className="carouselHome"
                        src="../img/velov.jpg"
                        alt="First slide"
                        rounded 
                        />
                        <Carousel.Caption>
                        <h3>Premier Slide</h3>
                        <p>Velov à Lyon</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="carouselHome"
                        src="../img/velib.jpg"
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Deuxiemes slide</h3>
                        <p>Velib à Paris.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="carouselHome"
                        src="../img/indigo.jpg"
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Troisieme slide</h3>
                        <p>Indigo en France.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
           
        )
    }
}

export default HomePage