import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container-fluid bg-light ">
        <div className="row">
          <div className="col-11">
            <section className="mb-5">
              <h2 className="h1-responsive font-weight-bold text-center my-4">
                Contact us
              </h2>

              <p className="text-center w-responsive mx-auto mb-5">
                Do you have any questions? Please do not hesitate to contact us
                directly. Our team will come back to you within a matter of
                hours to help you.
              </p>

              <div className="row">
                <div className="col-md-9 mb-md-0 mb-5">
                  <form
                    id="contact-form"
                    name="contact-form"
                    // action="mail.php"
                    method="POST"
                  >
                    <div className="row">
                      <div className="col-md-6">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            className="form-control"
                          />
                          <label for="name" className="">
                            Your name
                          </label>
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="md-form mb-1">
                          <input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control"
                          />
                          <label for="email" className="">
                            Your email
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form mb-0">
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            className="form-control"
                          />
                          <label for="subject" className="">
                            Subject
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="md-form">
                          <textarea
                            type="text"
                            id="message"
                            name="message"
                            rows="2"
                            className="form-control md-textarea"
                          ></textarea>
                          <label for="message">Your message</label>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div className="text-center text-md-left">
                    <a
                      className="btn btn-primary"
                      onclick="document.getElementById('contact-form').submit();"
                    >
                      Send
                    </a>
                  </div>
                  <div className="status"></div>
                </div>

                <div className="col-md-3 text-center">
                  <ul className="list-unstyled mb-0">
                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-geo-alt-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                      <p>San Francisco, CA 94126, USA</p>
                    </li>

                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-person-lines-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z" />
                      </svg>
                      <p>+ 01 234 567 89</p>
                    </li>

                    <li>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-envelope-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                      </svg>
                      <p>contact demo@gmail.com</p>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
