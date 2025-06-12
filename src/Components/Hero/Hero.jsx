import './Hero.css'
import profile from '../../assets/profile.jpg'

function Hero(){

    return(
        <div className='hero'>
            <img src={profile} alt="Picture of me when I went rock climbing" />
            <h1>Hi, I'm Yuginda Ranawaka</h1>
            <p>I am a student from SFU, learning computer engineering</p>
            <div className='action'>
                <div className='connect'>Connect</div>
                <div className='resume'>Resume</div>
            </div>
        </div>
    )
}

export default Hero

