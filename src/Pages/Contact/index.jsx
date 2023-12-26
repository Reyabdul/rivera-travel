import './Contact.css';

const Contact = () => {
    return (
        <section className='contact'>
            <div className='page-wrapper' id='contact-container'>
                <h2>Contact</h2>
                <form className='flex'>
                    <div className='form-items'>
                        <label for='name'>Name: </label>
                        <input type='text' name='name' id='name'/>
                    </div>
                    <div className='form-items'>
                        <label for='email'>Email: </label>
                        <input type='email' name='email' id='email'/>
                    </div>
                    <div className='form-items'>
                        <label for='message'>Message: </label>
                        <textarea name='message' id='message'></textarea>
                    </div>
                    <div className='form-items'>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;