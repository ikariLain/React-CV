import React, { Component } from 'react'
import SkyImg from "../assets/Sky_painting.jpg"

export class About extends Component {
  render() {
    return (
      <div class="textbox">
        <p>Hej! Jag heter Matheus och jag är en driven och nyfiken person som alltid strävar efter att lära mig nya saker. För närvarande studerar jag till Fullstack .NET-utvecklare på Chas Academy. På fritiden älskar jag att koda egna projekt och utforska nya teknologier inom webbutveckling.</p>
        <img src={SkyImg} class="painting" />
        <p>Jag har ett stort intresse för programmering och teknik och jag är alltid redo att ta mig an nya utmaningar. Som student på Chas Academy får jag möjlighet att utveckla mina kunskaper inom både front- och backend-utveckling, vilket jag är mycket entusiastisk över.</p>
        
    </div>

    )
  }
}

export default About