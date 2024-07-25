import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';



export default function Contact() {

  const form = useRef();

  // Email Function
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_g1hqmlj', 'template_qexml4u', form.current, 'sK88DBx3PdafeLl3C')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
  };
  // Contact Page
  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card p-1 mt-5" style={{ width: '100%', maxWidth: '500px', height: 'auto', minHeight: '400px' }}>
        <h1 className="mb-2 text-dark text-center">Contact Me</h1>
        <section>
          <div>
            <form ref={form} onSubmit={sendEmail} className="form-control card flex-center dir-column p-1">
              {/* Name */}
              <input type="text" placeholder="Full Name" name="user_name" className="m-1" required />
              <input type="text" placeholder="Email" name="user_email" className="m-1" required />
              {/* Subject */}
              <input type="text" placeholder="Subject" name="user_subject" className="m-1" required />
              {/* Text Area */}
              <textarea name="message" cols="30" rows="10" className="m-1" ></textarea>
              {/* Submit Button */}
              <button type="submit" value="Send" className="--btn--btn-primary m-1">Send Message</button>
            </form>
          </div>
        </section>
      </div>
    </div>

  );
}

