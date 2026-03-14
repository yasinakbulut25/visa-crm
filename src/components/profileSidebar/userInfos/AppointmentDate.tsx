import { selectApplication } from "@/store/selectors/applicationSelectors";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AppointmentDate() {
  const { appointmentDate } = useSelector(selectApplication);
  const [now, setNow] = useState(() => moment());

  useEffect(() => {
    const interval = setInterval(() => setNow(moment()), 60_000);
    return () => clearInterval(interval);
  }, []);

  const appointment = moment(appointmentDate);
  const diff = appointment.diff(now);
  const duration = moment.duration(Math.max(0, diff));

  const days = Math.floor(duration.asDays());
  const hours = duration.hours();
  const minutes = duration.minutes();

  const isUrgent = diff < 60 * 60 * 1000;

  return (
    <div
      className={`flex flex-col items-center gap-2 p-3 w-full border rounded-lg ${
        isUrgent
          ? "bg-[#EC221F] border-[#900B09]"
          : "bg-color-primary/60 border-color-secondary"
      }`}
    >
      <span
        className={`text-sm font-light uppercase ${
          isUrgent ? "text-white" : "text-text-secondary"
        }`}
      >
        Appointment Date
      </span>

      <div className="flex items-end gap-3">
        <div className="flex flex-col items-center">
          <p
            className={`text-[32px] font-bold leading-none ${isUrgent ? "text-white" : "text-text-default"}`}
          >
            {days}
          </p>
          <span
            className={`text-sm font-light ${isUrgent ? "text-white" : "text-text-default"}`}
          >
            days
          </span>
        </div>

        <span
          className={`text-[32px] font-bold leading-none mb-5 ${isUrgent ? "text-white" : "text-text-default"}`}
        >
          :
        </span>

        <div className="flex flex-col items-center">
          <span
            className={`text-[32px] font-bold leading-none ${isUrgent ? "text-white" : "text-text-default"}`}
          >
            {hours}
          </span>
          <span
            className={`text-sm font-light ${isUrgent ? "text-white" : "text-text-default"}`}
          >
            hours
          </span>
        </div>

        <span
          className={`text-[32px] font-bold leading-none mb-5 ${isUrgent ? "text-white" : "text-text-default"}`}
        >
          :
        </span>

        <div className="flex flex-col items-center">
          <span
            className={`text-[32px] font-bold leading-none ${isUrgent ? "text-white" : "text-text-default"}`}
          >
            {minutes}
          </span>
          <span
            className={`text-sm font-light ${isUrgent ? "text-white" : "text-text-default"}`}
          >
            min
          </span>
        </div>
      </div>

      <span
        className={`text-sm font-medium ${isUrgent ? "text-white" : "text-[#525B1B]"}`}
      >
        {appointment.format("MMMM D, YYYY")} | {appointment.format("HH:mm")}
      </span>
    </div>
  );
}

export default AppointmentDate;
