import Tilt from 'react-parallax-tilt';
import './Logo.css'
import brain from './brain.png';
const Logo = () => {
    return (

        <div className="Logoc ma4 mt0">
            <Tilt>
                <div className='Tilt pa2 br2 shadow-2' style={{
                    height: '120px',
                    backgroundColor: '',
                    tiltMaxAngleX: 40,
                    tiltMaxAngleY: 40
                }}>
                    <img style={{ paddingTop: '18px' }} alt='logo' src={brain} />
                </div>
            </Tilt>
        </div>

    );
}

export default Logo;