import React from 'react';

const ContactForm: React.FC= () => {
    return (
        <div>
            <form>
                <div>
                    <label>
                        Name:
                        <input
                            type="text"
                            name="name"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Number:
                        <input
                            type="text"
                            name="number"
                            required
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            required/>
                    </label>
                </div>
                <div>
                    <label>
                        Image:
                        <input
                            type="url"
                            name="image"
                            required
                        />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;