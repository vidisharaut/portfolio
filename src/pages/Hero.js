import React from 'react'
// import ProfilePhoto from '../components/ProfilePhoto'
import Introduction from '../components/Introduction'
import ProfilePhoto from "../components/ProfilePhoto"
import SocialLinks from '../components/SocialLinks'

const Hero = () => {
  return (
    <div>
        {/* <ProfilePhoto/> */}
        <ProfilePhoto/>
        <SocialLinks/>
        <Introduction/>
    </div>
  )
}

export default Hero