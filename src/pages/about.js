import React from 'react'

const AboutPage = () => (
  <div>
    <div
      className="about-top-page"
    >
      <img style={{marginBottom:'0'}} src="https://res.cloudinary.com/nhiokh/image/upload/c_scale,q_auto:good,w_300/v1517135025/Photo_e5ti7l.png" alt="Photo of Samuel Abiassi"/>
      <h1>My name is Samuel Abiassi. Father, avid reader, gamer, and music lover</h1>
    </div>
    <h2>I read books. Loads and loads of books.</h2>
    <p>
      I'm a big reader, and nothing has been as much important for my personal growth as this simple fact. From novels to essays. From science-fiction to marketing best-sellers.
      From fantasy to technical web development stuffs.
    </p>
    <p>
      I need to be surrounded by books. They give me inspiration, confidence, and most of all, they keep my curiosity as sharp as it can be.
    </p>
    <p>
      So if you need any good read, or if you know a must-have in mind, be sure to let me know.
    </p>
    <img src="https://res.cloudinary.com/nhiokh/image/upload/c_scale,q_auto:eco,w_996/v1517133913/Books-2_iwipal.png" alt="My book shelves"/>
    <h2>I love to play video games</h2>
    <p>
      I've been playing for as long as I can remember.
    </p>
    <p>
      And I sincerely enjoy a vast amout of genras. Be it the simple yet extaordinary games from Nintendo, the hardcore games like Dark Souls and BloodBorne (one of my personal favorites),
      the fast paced shooters, the old fashioned RPGs (I've been raised with Baldur's Gate) or the MOBA powerhouse that is League of Legends.
    </p>
    <p>
      By the way, I used to write some analytical pieces about the competitive LoL scene. It is still a big thing for me, so if you want to talk about it, you're more than welcome.
    </p>
    <h2>Music is very important to me</h2>
    <p>
      There's no coincidence. If I've been working in the music industry four years, it is undoubtedly because this particular medium is a big part of my life.
    </p>
    <p>
      Even though I'm not working as a music critique anymore, I still like to share my opinion and discover new musics. I enjoy metal as much as hip-hop, industrial, electro-music, pop or indies.
      It really doesn't matter.
    </p>
    <div
      style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
      }}
    >
      <p
        style={{
          marginBottom:8,
          fontWeight:700,
          color:'#5799a9'
        }}
      >Here is the playlist for my favorite tracks of 2017</p>
      <iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=false&playlist=true&width=700&height=350&color=007FEB&layout=dark&size=medium&type=playlist&id=3981000462&app_id=1" width="700" height="350"></iframe>
    </div>
  </div>
)

export default AboutPage
