import '../style/Contact.css';
import { BsTelephoneFill } from 'react-icons/bs';
import { IoMdMail } from 'react-icons/io';

function Contact() {
    return (
        <div className="Contact">
            <p className='contact-titre'>Contact</p>
            <article className='contact'>
                <p className='contact-nom'>JEAN-MICHEL DUPONT</p>
                <BsTelephoneFill />
                <p>03.21.23.45.67</p>
                <IoMdMail />
                <p>jeanmichel@veto.fr</p>
                <p className='infos-contact'>Du lundi au vendredi de 8h à 19h</p>
            </article>
        </div>
    );
}

export default Contact;