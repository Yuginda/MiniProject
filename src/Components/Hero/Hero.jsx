import './Hero.css'
import profile from '../../assets/profile.jpg'

function Hero(){

    return(
        <div className='hero'>
            <img src={profile} alt="" />
            <h1>Hi, I'm Yuginda Ranawaka</h1>
            <p>I am a student from SFU, learning computer engineering</p>
            <div className='action'>
                <div>Connect</div>
                <div>Resume</div>
            </div>
        </div>
    )
}

export default Hero