import {Col, Container, Row} from 'react-bootstrap'
import MyImage from "../components/myimage"
import BackgroundImage from "../components/index/backgroundimage"
// import Prizes from "../data/prizes.json"
// import PrizeImages from "../components/prizes/prizeimages"


export default function Yugioh() {
    // const prizesInPool = Prizes["prizes"].filter((prize) => prize["pool"] === "Smash Ultimate").map((prize) => prize["image"])
    return (
        <>
            <Container fluid className="p-0 text-center">
                <BackgroundImage src="images/header.jpg" className="landing p-5">
                    <h1 className="display-4 mb-0 text-light">GAMMA GAMMA DRIVER YUGIOH</h1>
                </BackgroundImage>
            </Container>

            <Container fluid className="p-3 section">
                <h4 className="text-left mb-4 display-text">YU-GI-OH! TOURNAMENT</h4>

                <Row className="mb-4">
                    <Col xs={0} md={2} lg={3}/>
                    <Col xs={12} md={8} lg={6}>
                        <MyImage src="images/yugioh_flyer.png" alt="Yu-gi-oh Flyer"
                                 className="mw-100 border-stroke mx-auto d-block"/>
                    </Col>
                    <Col xs={0} md={2} lg={3}/>
                </Row>

                <p>Gamma Gamma Drive Yu-gi-oh will be hosting a tournament for Yu-gi-oh TCG! The tournament will be <b>free
                    to enter</b>, and open to all <b>UCSD Students and Alumni</b>.</p>
                <h4 className="text-left title-text">Register:</h4>
                <p>You can register for the event on site during Animefest</p>
                <h4 className="text-left title-text">Cost and Prizing:</h4>
                <p>The tournament will be free to enter, and will have a grand prize for the winner provided by Anime &amp;
                    Manga Enthusiasts!</p>
                <h4 className="text-left title-text">Tournament Rules:</h4>
                <p>
                    <li>Rounds will be Swiss</li>
                    <li><b>We will be using current banlist</b></li>
                    <li>TCG format only</li>
                    <li>No OCG cards or custom cards</li>
                    <li>For foreign cards, please have a translation ready</li>
                    </p>    
                <h4 className="text-left title-text">Schedule:</h4>
                    <p>Doors will open at <b>1 PM</b>, and the bracket will start at <b>1 PM.</b> Free play will begin after
                    the tournament ends, around <b>5 PM.</b></p>
                <h4 className="text-left title-text">Location:</h4>
                <p>We’ll be in the <b>Green Table Room</b>, which is inside Sun God Lounge.</p>
            </Container>

            {/*when uncommenting the below section, plus any other line with the word prizes in it, a prize*/}
            {/*section will be created displaying all the prize images for Triton Smash*/}

            {/*<Container fluid className="p-3 mt-4 section">*/}
            {/*    <h4 className="text-left mb-4 display-text">PRIZING</h4>*/}
            {/*    <PrizeImages prizes={prizesInPool}/>*/}
            {/*</Container>*/}
        </>
    )
}
