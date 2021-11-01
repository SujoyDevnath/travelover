import React from 'react';
import GetInTouch from '../GetInTouch/GetInTouch';
import Message from '../Message/Message';
import './Contact.css'

const Contact = () => {
    return (
        <div>
            {/* this is contact header */}
            <header>
                <div className="picture" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(https://images.unsplash.com/photo-1542317854-f9596ae570f7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGxhcHRvcCUyMG9uJTIwdGFibGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60)" }}>
                    <h1>CONTACT TRAVELOVER</h1>
                    <p>While we're good with smoke signals, there are simpler ways for us to get in touch and answer your questions.</p>
                </div>
            </header>
            <main>
                <GetInTouch></GetInTouch>
                <Message></Message>
            </main>
        </div>
    );
};

export default Contact;