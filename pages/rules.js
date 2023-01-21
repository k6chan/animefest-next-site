import { Container, Row, Col } from 'react-bootstrap'
// import MyImage from "../components/myimage"


export default function Rules() {
  return (
    <>
      <Container fluid className="p-5 text-center jumbo-display">
        <h1 className="display-4 mb-0">RULES</h1>
      </Container>

      <Container fluid className="p-3 section">
        <h4 className="text-center title-text">By attending Animefest, you agree to have read and will abide by
          our detailed rules below.
        </h4>
        <h4 className="highlight text-center title-text mb-5">These rules are NOT final and will continue to update as we prepare for Animefest. Please revisit our rules the week prior to Animefest to read the most updated information.</h4>
        <ol className="mb-5">
          <li><p>Anime &amp; Manga Enthusiasts and UC San Diego reserves the right to remove anyone not in compliance with the rules to their discretion.</p></li>
          <li><p><u>All university policies and regulations apply to attendees of Animefest.</u></p>
            <ul>
              <li><p>Masking is <b>required</b> at Animefest 2023.</p></li>
            </ul>
          </li>
          <li><p>Attendees must respect common sense rules for public behavior, personal interaction, common courtesy, and respect for private property. Harassing or offensive behavior will not be tolerated. If your behavior becomes problematic,
            security will have to intervene to dispute the issue.</p></li>
          <li><p>Attendees are prohibited from directly handling the console setups. Any attendee seen tampering or otherwise damaging Animefest property are liable for repairs and/or replacements.</p></li>
          <li><p><b>Convention staff</b> may photograph and record video of the convention. By attending Animefest, you give consent to be included in these photographs and recordings by our staff.</p></li>
          <li><p>Physical contact, photography, or recordings of other individuals by non-staff is not allowed without their explicit permission.</p></li>
          <li><p>Please don&apos;t hesitate to call convention staff or campus security if you see anything suspicious or disorderly conduct.</p></li>
        </ol>
        
        <p><u>Cosplay & Prop Guidelines:</u></p>
        <ol className="mb-5">
          <li><p>No inappropriate (18+) cosplay is permitted.</p></li>
          <li><p>No weapons or props designed or made with the ability to cause death or serious bodily injury to any person or property is permitted. Misuse of a prop will result in that prop being deemed unsafe.</p></li>
          <li><p>Props resembling weapons are prohibited, including but not limited to bows, replica/toy swords, and firearms (airsoft, replica, paintball, BB guns, and Nerf guns).</p></li>
          <li><p>All props will be checked and marked with tape by our convention staff at the registration table.</p></li>
        </ol>
        
        <p><u>COVID-19 Addendum:</u> Attendees are strongly advised to adhere to CDC guidelines which include:</p>
        <ol className="mb-5">
          <li><p>Keeping fully vaccinated, and quarantine if coming in contact with an affected individual and getting tested.</p></li>
          <li><p>Staying home if an attendee feels any sickness or symptoms of COVID-19 before the convention.</p></li>
          <li><p>Maintaining 6 feet of social distancing whenever possible.</p></li>
          <li><p>Cover coughs and sneezes and wash hands.</p></li>
          <li><p>Enable contact tracing: On Android, contact tracing from Google can be enabled in your device&apos;s settings, or downloaded as an app for your state at the link <a href="https://support.google.com/android/answer/9888358?hl=en">here.</a> On iPhone, opt-in to Exposure Notifications in your device&apos;s settings.</p></li>
        </ol>
        <Row className="align-items-center">
          {/*<Col lg={4} className="d-none d-lg-block">*/}
          {/*  <MyImage src="images/hina.png" alt="Hina mascot art" className="mw-100" />*/}
          {/*</Col>*/}
          <Col lg={12}> {/* Change to lg-8 when mascot art is ready*/}
            <h4 className="text-left title-text mb-4">About Anime &amp; Manga Enthusiasts</h4>
            <p>Anime &amp; Manga Enthusiasts is the anime club at UC San Diego. We hold weekly meetings on Mondays, where we show anime or hold other fun events. We also have other socials on weekends such as karaoke, game nights, and potlucks. Membership is free and open to all!</p>
            <p>If you are interested in learning more about our club or events, please visit our website <a href="https://ucsd.moe/">ucsd.moe</a> for more information.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}
