import { useNav } from "../../Hooks/useNav";

import "./Contact.css";

const Contact = ({ activeLinkId }) => {
  const contactRef = useNav("contacts");

  return (
    <section className="contacts" id="contacts" ref={contactRef}>
      <div className="page-wrapper" id="contact-container">
        <h2>Contact</h2>
        <hr class="linebreak" />
        <h3>Plan, Book, and Relax.</h3>

        <form className="flex">
          <div className="form-detail">
            <div className="form-items">
              <label for="name">Name: </label>
              <input type="text" name="name" id="name" placeholder="Hi..."/>
            </div>
            <div className="form-items">
              <label for="email">Email: </label>
              <input type="email" name="email" id="email" placeholder="Where should I reply?" />
            </div>
            <div className="form-items">
              <label for="message">Message: </label>
              <textarea name="message" id="message" placeholder="Where would you like to go? How can I help?"></textarea>
            </div>
            <div className="form-items">
              <button>Submit</button>
            </div>
          </div>
        </form>

        <hr class="linebreak" />

        <div className='home__social'>
            <a href='/' className='home__social-icon icon' target='_blank'>
                <i class='uil uil-instagram'></i>
            </a>
        </div>
        <div className='copy'>
            <p>Powered by: NOML</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;
