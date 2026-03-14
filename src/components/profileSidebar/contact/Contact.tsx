import ActionButton from "@/components/button/ActionButton";
import { Anchor, Mail, Phone } from "@/icons";
import { selectTraveler } from "@/store/selectors/applicationSelectors";
import { useSelector } from "react-redux";

function Contact() {
  const { email, phone } = useSelector(selectTraveler);

  return (
    <div className="flex flex-col gap-3 border-b border-border-default py-6">
      <div className="flex flex-col gap-2">
        <h4 className="text-sm text-text-secondary font-light leading-6 uppercase">
          Contact
        </h4>
        <p className="flex items-center gap-3 text-sm text-text-default font-light leading-6">
          <Mail width={20} height={20} /> {email}
        </p>
        <p className="flex items-center gap-3 text-sm text-text-default font-light leading-6">
          <Phone width={20} height={20} /> {phone}
        </p>
        <ActionButton
          variant="light"
          color="dark"
          className="bg-transparent"
          to="#"
          endContent={<Anchor width={20} height={20} />}
        >
          View Full Page Profile
        </ActionButton>
      </div>
    </div>
  );
}

export default Contact;
