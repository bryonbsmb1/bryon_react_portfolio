function Contact() {
    return (
        <div className="contact">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-7">
                        <h1>Contact Me</h1>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="input" className="form-control" id="exampleFormControlInput1" placeholder="John Doe"  required/>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" required/>
                            </div>
                                
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
                            </div>

                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary mb-3">Submit</button>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Contact;