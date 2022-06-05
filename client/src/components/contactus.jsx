import React from 'react'

const ContactUs = () => {
    return (
        <div>
            <h1 className="heading"><span>contact</span> us</h1>

            <div className="row">

                <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29377.52082772077!2d76.70488161732983!3d23.016791186422694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397cc4b009806707%3A0x6268c8eb24800dc1!2sAshta%2C%20Madhya%20Pradesh%20466116!5e0!3m2!1sen!2sin!4v1648571247767!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <form action="https://formspree.io/f/myyobgvy" method="POST">
                    <h3>Feedback form</h3>
                    <input type="text" placeholder="your name" className="box" name='name'/>
                        <input type="email" placeholder="your email" className="box" name='email'/>
                            <input type="tel" placeholder="subject" className="box" name='tel'/>
                                <textarea placeholder="your feedback" className="box" cols="30" rows="10" name='feedback'></textarea>
                                <input type="submit" value="send feed" className="btn" name='submit'/>
                </form>

            </div>
        </div>
        )
}

export default ContactUs