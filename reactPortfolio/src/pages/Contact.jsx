export default function Contact() {
    return (
      <div>
        <h1>Contact</h1>
       <section>
          <div className="container mb-3">
            <form className="form-control card flex-center dir-column p-1">
              <input type="text" placeholder="Full Name" name="user_name" className="m-1" required />
              <input type="text" placeholder="Email" name="user_email" className="m-1" required />
              <input type="text" placeholder="Subject" name="user_subject" className="m-1" required />
              <textarea name="message" cols="30" rows="10" className="m-1"></textarea>
              <button type="submit" className="--btn--btn-primary m-1">Send Message</button>
            </form>
          </div>
   
       </section>
      </div>
    );
  }
  