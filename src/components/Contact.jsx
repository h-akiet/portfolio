import { useCallback, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Linkedin, Facebook, Github, Envelope, ArrowRightCircle } from 'react-bootstrap-icons';
import { useFormValidation } from '../hooks';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

const FORM_INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: ''
};

export const Contact = () => {
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  // Define validation function
  const validateContactForm = useCallback((formDetails) => {
    const tempErrors = {};

    if (!formDetails.firstName) tempErrors.firstName = "Vui lòng nhập họ";
    if (!formDetails.lastName) tempErrors.lastName = "Vui lòng nhập tên";
    if (!formDetails.email) tempErrors.email = "Email không được để trống";
    if (!formDetails.phone) tempErrors.phone = "Số điện thoại là bắt buộc";
    if (!formDetails.message) tempErrors.message = "Tin nhắn không được để trống";

    return tempErrors;
  }, []);

  const { formDetails, error, onFormUpdate, validateForm, resetForm } = useFormValidation(FORM_INITIAL_STATE, validateContactForm);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    const isValid = validateForm();

    if (!isValid) {
      setButtonText("Send");
      return;
    }

    try {
      const { data, error: supabaseError } = await supabase
        .from('Contact')
        .insert([
          {
            firstname: formDetails.firstName,
            lastname: formDetails.lastName,
            email: formDetails.email,
            phone: formDetails.phone,
            message: formDetails.message
          },
        ])
        .select();

      if (supabaseError) {
        setStatus({
          success: false,
          message: 'Lỗi: ' + supabaseError.message
        });
        console.error('Error inserting data:', supabaseError);
      } else {
        setStatus({
          success: true,
          message: 'Message sent successfully!'
        });
        resetForm();
      }
    } catch (err) {
      setStatus({
        success: false,
        message: 'An error occurred. Please try again.'
      });
      console.error('Error:', err);
    } finally {
      setButtonText("Send");
    }
  }, [formDetails, validateForm, setStatus, resetForm]);

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-self-start">
          <h2 className="title"><span className="text-grey">Contact</span> <span className="text-white">Me</span></h2>
          <Col size={12} md={6} className="">
            <div className="contact-info">
              <a href="https://web.facebook.com/share/18DSvWncLX/?mibextid=wwXIfr&_rdc=1&_rdr">
                <Facebook className="contact-icon" size={25} color="white" />
                <span>Facebook</span>
              </a>
              <a href="https://www.linkedin.com/in/nguyenhoanganhkiet">
                <Linkedin className="contact-icon" size={25} color="white" />
                <span>linkedin.com/in/nguyenhoanganhkiet</span>
              </a>
              <a href="https://github.com/h-akiet">
                <Github className="contact-icon" size={25} color="white" />
                <span>github.com/h-akiet</span>
              </a>
              <a href="mailto:nguyenhoanganhkiettg2005@gmail.com">
                <Envelope className="contact-icon" size={25} color="white" />
                <span>nguyenhoanganhkiettg2005@gmail.com</span>
              </a>
            </div>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className="">
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} md={6} className="px-1">
                        <input type="text" value={formDetails.firstName} className={error.firstName ? "shake" : ""} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                      </Col>
                      <Col size={12} md={6} className="px-1">
                        <input type="text" value={formDetails.lastName} className={error.lastName ? "shake" : ""} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                      </Col>
                      <Col size={12} md={6} className="px-1">
                        <input type="email" value={formDetails.email} className={error.email ? "shake" : ""} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} md={6} className="px-1">
                        <input type="tel" value={formDetails.phone} className={error.phone ? "shake" : ""} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" value={formDetails.message} className={error.message ? "shake" : ""} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <button type="submit"><span>{buttonText}</span></button>
                      </Col>
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
