import React, { useState, useEffect, useRef } from 'react'
import NET from 'vanta/dist/vanta.net.min'

import {Typography, Container, Fade, Grid, Link} from "@material-ui/core"
import {motion} from "framer-motion"

import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

import profile from "./chris-profile.jpeg"

const TopHalf = (props) => {

  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(null)

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: myRef.current,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 420.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x9369db,
          backgroundColor: 0x31,
          spacing: 26.00,
          maxDistance: 20.00,
          points: 4
        })
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  const titles = [
    'Student',
    'Developer',
    'Musician'
  ]

  const links = [
    {Name: 'Projects', Scroll: "#projects"},
    {Name: 'Resume', Scroll: "#resume"},
    {Name: 'More', Scroll: "#more"}
  ]

  const contactLinks = [
    {Name: "Mail", Icon: <MailOutlineIcon />, Link: "mailto:cgeraldfarber@icloud.com"},
    {Name: "LinkedIn", Icon: <LinkedInIcon />, Link: "https://www.linkedin.com/in/chris-farber-ba90181a4/"},
    {Name: "GitHub", Icon: <GitHubIcon />, Link: "https://github.com/farbs03"},
    {Name: "Instagram", Icon: <InstagramIcon />, Link: "https://www.instagram.com/cfarbs03/"}
  ]

  return (
    <div ref={myRef}>
      <br></br>
      <Container maxWidth="xl" style={{textAlign: "right", color: "white", paddingTop: "10px"}}>
        {links.map((link) => (
          <motion.div
              initial={{y: 0}}
              whileHover={{
                  y: -1,
                  color: "#9369db"
              }}
              transition={{ duration: 0.2 }}
              style={{display: "inline-block", marginRight: "20px"}}
          >
            <Link 
              href={link.Scroll}
              style={{
                textDecoration: "none",
                color: "inherit",
                fontSize: "18px",
              }}
            >
              {link.Name}
            </Link>
          </motion.div>
        ))}
        </Container>
        <Container maxWidth="md" justifyContent="center" style={{textAlign: "center", color: "white", padding: "10px"}}>
            
            <br></br>
            <br></br>
            <motion.div style={{width: "150px", height: "150px", borderRadius: "50%", background:"white", marginLeft: "auto", marginRight: "auto", border: "2px solid"}} initial={{opacity: 0}} animate={{opacity: 1}}>
                <img src={profile} style={{width: "100%", height: "100%", borderRadius: "50%"}} alt="profile-pic"/>
            </motion.div>
            <br></br>
            <br></br>
            <Fade in mountOnEnter unmountOnExit style={{transitionDelay: "100ms", transitionDuration: "1000ms"}}>
                <div>
                    <Typography variant="h4" style={{fontWeight: "bold", marginBottom: "5px", fontSize: "40px"}}>Chris Farber</Typography>
                </div>
            </Fade>
            {titles.map((title, idx) => (
                <Fade in mountOnEnter unmountOnExit style={{transitionDelay: `${200 + 100 * idx}ms`, transitionDuration: "1000ms"}}>
                    <div style={{display: "inline-block"}}>
                    <Typography style={{marginRight: "15px", fontSize: "20px", borderBottom: "2px solid"}}>{title}</Typography>
                    </div>
                </Fade>
            ))}
            <br></br>
            <br></br>
            <div style={{width: "280px", margin: "10px auto", textAlign: 'center'}}>
                {contactLinks.map((contact) => (
                    <a href={contact.Link} target="_blank">
                        <motion.div 
                            style={{
                                width: "50px", 
                                height: "50px", 
                                display: "inline-block", 
                                margin: "0px 8px", 
                                color: "#9369db", 
                                borderRadius: "50%", 
                                border: "2px solid #9369db"
                            }}
                            initial={{y: 0}}
                            whileHover={{y: -5}}
                        >
                            <div style={{marginTop: "12px"}}>{contact.Icon}</div>
                        </motion.div>
                    </a>
                ))}
            </div>
            <br></br>
            <Typography style={{fontSize: "18px", marginTop: "5px"}}>Hi, welcome to my website! Here, you can take a look at some of the projects I've done, contact me, and check out some of my other hobbies apart from coding.</Typography>
            <br></br>
        </Container>
        <br></br>
        
    </div>
  )
}

export default TopHalf;
