import ContactForm from "./ContactForm";
import { H1, P } from "../../common.styles/DisplayText";
import Section from "../../common.styles/Section";

const Contact = () => {
  return (
    <>
      <Section backgroundColorLight>
        <H1 title="Contact us" />
        <P paragraph="If you have any questions or want to be 
a part of our Holidaze family please 
get in touch with us. Use our contact 
form on this page or send us an email."/>
      </Section>
      <Section>
        <ContactForm />
      </Section>
    </>
  )
}

export default Contact;