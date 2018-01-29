import React from 'react'
import Link from 'gatsby-link'

import Contact from '../components/Contact/index'

const UxPage = () => (
  <div>
    <h1>
      Let's talk about UX Design
    </h1>
    <p>
      First thing first, if you have no idea of what UX Design is, let me kindly suggest you to watch this video, made by the talented folks at <a href='https://www.fiverr.com/'>Fiverr</a> :
    </p>
    <div
      style={{
        display:'flex',
        justifyContent:'center'
      }}
    >
      <iframe width="916" height="515" src="https://www.youtube.com/embed/75bSXlIEsho?rel=0" frameBorder="0" allow="encrypted-media" allowFullScreen></iframe>
    </div>
    <p>
      Are we good now?
    </p>
    <p>
      Ok!
    </p>
    <h2>
      I've spent a lot of time around customers, in various markets and fields.
    </h2>
    <p>
      I created ad campaigns for them. I created print and digital tools for them. I listened to them to provide the best service I could. And I learned.
    </p>
    <p>
      A lot!
    </p>
    <p>
      More often than not, you can hear CEOs and Managers say something that goes like:'I know my customers. I know what they want.' Here is the thing: you may probably have a good idea of who they are
      and what they think they need (If not, you REALLY need to schedule a meeting with your marketing team...).
    </p>
    <p>
      But do you know how to tailor an app to that audience only based on that knowledge, right out of the blue? An app so compeling it will drive your users to check it over and over again with excitement?
    </p>
    <p>
      My bet is that you likely do not know how to achieve such a magic trick... and neither do I. (if you do, then what are you here for anyway?)
    </p>
    <p>
      That's what interviews, mock-ups, usability tests and UX Design tools are made for.
    </p>
    <h2>
      Investigate, Ideate, Prototype, Test, Repeat
    </h2>
    <h3>
      How do I detect users habits?
    </h3>
    <p>
      That is one thing to assume you know who your audience is. It is an other to actually spend time with real people to learn what they're used to, and where their comfort zone is.
    </p>
    <p>
      I usually spend as much time as I can chatting with and observing end-users, in their own environment. Through this process, I usually detect what drives them, as well as their fears and 'no-goes'.
      This lays a pretty good foundation to extrapolate on what the app I'm working on might need or surely does not. I also find out there are more end-users targets than what would be pre-defined.
      It is indeed very important to no close my mind on all the surrounding aspects that might show up in this phase.
    </p>
    <p>
      To help visualize and schematize every informations gathered, I'm using tools like storyboards, experience maps, and personas.
    </p>
    <h3>
      How do WE create the best solutions?
    </h3>
    <p>
      Once all these informations are well represented, the whole team invested in the project (ideally) shoud then meet around theses and brainstorm on the best solutions to solve the users problematics uncovered.
    </p>
    <p>
      There are many ways to do so, but never lost sight on the objective by making the team ask itself: 'does it answer their problematics in the most efficient and pleasing way?'
    </p>
    <img src="https://res.cloudinary.com/nhiokh/image/upload/c_scale,f_auto,q_auto:eco,w_996/v1517133922/UX-2_lfqvi2.png" alt="UX design books"/>
    <h3>
      How do I create a solid UI?
    </h3>
    <p>
      Chances are we have gathered enough datas to start prototyping UI mock-ups. That is when <a target="_blank" href='https://www.adobe.com/fr/products/xd.html'>Adobe Experience Design</a> comes into play.
      Notice that I could as well use <a target="_blank" href='https://balsamiq.com/'>Balsamiq</a>, or <a target="_blank" href='https://www.invisionapp.com/'>inVision</a> for the matter.
    </p>
    <p>
      I am using most of the best practice applied in the ergonomy and visual design fields, and constantly read, listen and watch pieces on these subjects.
    </p>
    <p>
      Note that, if I've got enough time, I may also consider creating a functional prototype using React or Vue.
    </p>
    <h3>
      How do I validate these prototypes?
    </h3>
    <p>
      Once the prototypes are ready to use comes the testing phase.
    </p>
    <p>
      Usually, I return to the users previously interviewed and see if the product is getting close to what they would be satisfied to use/work with everyday.
      If it does, then everything is fine! But usually, it takes some adjustments to really come close to a good version of the product. One that they would feel they always 'have been dreaming about.'
    </p>
    <p>
      If you do not have a pool of beta-testers ready to give a hand, fear not. It may be unconventionnal, but guerilla-testing have also been a pretty effective way to test my previous works.
      I usually hang around cafés and bars and ask people close to the target-users profile if they are willing to help me on the project I'm working on. Of course, free coffees/beers help a lot!
    </p>
    <h3>
      What if your project is already online?
    </h3>
    <p>
      There are tons of tools to help an app or a website past the production state.
    </p>
    <p>
      One might start with the infos that Google Analytics is providing to detect where said app/website is lacking in good UX.
    </p>
    <p>
      I have already worked with tools like Hotjar, and deployed A/B testing (you're currently being A/B tested by the way). These are excellent tools to test how your users are using what you presented to them.
      However, it does not replace face-to-face interviews and observations phase.
    </p>
    <h2
      style={{
        textAlign:'center',
        borderTop: '1px solid #aaa',
        paddingTop:'24px'
      }}
    >
      Convinced? Want to know more? Contact me!
    </h2>
    <Contact/>
  </div>
)

export default UxPage
