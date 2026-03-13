import { selectApplication } from "@/store/selectors/applicationSelectors";
import moment from "moment";
import { useSelector } from "react-redux";

function AppointmentDate() {
  const { appointmentDate } = useSelector(selectApplication);

  return (
    <div className="flex flex-col items-center gap-2 p-3 w-full bg-color-primary/60 border border-color-secondary rounded-lg">
      <span className="text-sm text-text-secondary font-light uppercase">
        Appointment Date
      </span>

      <div className="flex items gap-3">
        <div className="flex flex-col items-center leading-none">
          <p className="text-[32px] font-bold text-text-default">10</p>
          <span className="text-sm font-light text-text-default">days</span>
        </div>

        <span className="text-[32px] font-bold text-text-default">:</span>

        <div className="flex flex-col items-center leading-none">
          <span className="text-[32px] font-bold text-text-default">12</span>
          <span className="text-sm font-light text-text-default">hours</span>
        </div>

        <span className="text-[32px] font-bold text-text-default">:</span>

        <div className="flex flex-col items-center leading-none">
          <span className="text-[32px] font-bold text-text-default">15</span>
          <span className="text-sm font-light text-text-default">min</span>
        </div>
      </div>

      <span className="text-sm font-medium text-[#525B1B]">
        {moment(appointmentDate).format("MMMM D, YYYY")} |{" "}
        {moment(appointmentDate).format("HH:mm")}
      </span>
    </div>
  );
}

export default AppointmentDate;
