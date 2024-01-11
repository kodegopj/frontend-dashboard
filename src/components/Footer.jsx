import React from 'react';
import '../Styles/Footer.css';
import { FaEnvelopeOpenText } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TiSocialTwitterCircular } from "react-icons/ti";
import { IoLogoWhatsapp } from "react-icons/io5";




function Footer() {
  return (
    <footer>
    <div className={'rows'}>
        <div className={'col1 p-'}>
            
            <div className='flex gap-6 '>
                <div className={"footer-logo "}></div>
                <div><b className='centercode-name py-10'>Center Code</b></div>
            </div>
            <h6>The easiest reporting solution for your needs</h6>
        </div>
        <div className={'col1'}>
            <h3 className={'officenews'}>Office</h3>
            <p>Libid, Binangonan</p>
            <p>Rizal, Philippines</p>
            <p className={'email-id'}>Centercode@gmail.com</p>
            <h5>+63 - 9563879647</h5>
        </div>
        <div className={'col1'}>
            <h3 className={'officenews'}>Newsletter</h3>
            <div className='for'>
                <i ><FaEnvelopeOpenText className={'fa-solid fa-envelope'} /></i>
                <input type="email" placeholder={'Enter your email-id'} />
                <button type='submit'> 
                <i >
                    <FaArrowRight className={'fa-sharp fa-solid fa-arrow-right'}/>
                </i> </button>
            </div>
            <div className={'social-icons flex'}>
                <a href="https://web.facebook.com/pauljohn.cunanan.14"><i><FaFacebook  className={'fa-brands fa-facebook'}/></i></a>
                <a href="https://github.com/kodegopj"><i><FaGithub className={'fa-brands fa-github'}/></i></a>
                <i ><TiSocialTwitterCircular className={'fa-brands fa-twitter'}/></i>
                <i><IoLogoWhatsapp  className={'fa-brands fa-whatsapp'}/></i>
            </div>
        </div>
    </div>
    <hr />
    <p className={'copyrights'}>Center Code Copyrights 2023 -All Rights Reserved</p>
</footer>
  )
}

export default Footer