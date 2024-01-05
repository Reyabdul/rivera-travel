import { useNav } from "../../Hooks/useNav";

import "./Contact.css";

const Contact = ({ activeLinkId }) => {
  const contactRef = useNav("contacts");

  return (
    <section className="contacts" id="contacts" ref={contactRef}>
      <div className="page-wrapper" id="contact-container">
        <h2>Contact</h2>
        <hr class="linebreak" />
        <h3>Plan, book, and relax.</h3>

        <form className="flex">
          <div className="form-detail">
            <div className="form-items">
              <label for="name">Name: </label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="form-items">
              <label for="email">Email: </label>
              <input type="email" name="email" id="email" />
            </div>
            <div className="form-items">
              <label for="message">Message: </label>
              <textarea name="message" id="message"></textarea>
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

      </div>
    </section>
  );
};

export default Contact;
