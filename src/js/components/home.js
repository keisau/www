import React from 'react'
import {
  Container,
  Row,
  Col
} from 'reactstrap'

import '../../assets/images/propic.jpg'
import '../../assets/images/thumb.jpg'

export default function homeComponent(props) {
  document.title = 'Home | pierresaux'

  return (
    <div id='home'>
      <Container>
        <Row>
          <Col xs='4'>
              <a href='/assets/images/propic.jpg' >
                <img src='/assets/images/thumb.jpg' className='img-thumbnail' ></img>
              </a>
          </Col>
          <Col xs='8'>
              <h1>Background</h1>

              <ul>
                <li>Hong Kong based</li>
                <li>I am a software engineer :)</li>
                <li>I specialize at Javascript(es2015 - 2017), NodeJS (up to 6), and Amazon Web Service.</li>
              </ul>

              <h1>My hobbies</h1>

              <ul>
                <li>Chinese calligraphy</li>
                <li>IPSC Action air</li>
                <li>Thinking (Philosophy) :)</li>
              </ul>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
