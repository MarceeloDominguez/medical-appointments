import { createContext, useContext, useState } from "react";

type AppointmentContextType = {
  selectedDate: string | null;
  selectedTime: string | null;
  setSelectedDate: (date: string | null) => void;
  setSelectedTime: (time: string | null) => void;
  handleConfirm: () => void;
  dateConfirmed: string | null;
};

const AppointmentContext = createContext<AppointmentContextType>({
  selectedDate: null,
  selectedTime: null,
  setSelectedDate: () => {},
  setSelectedTime: () => {},
  handleConfirm: () => {},
  dateConfirmed: null,
});

export const AppoinmentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [dateConfirmed, setDateConfirmed] = useState<string | null>(null);

  const handleConfirm = () => {
    if (!selectedDate || !selectedTime) return;

    const combined = new Date(`${selectedDate}T${selectedTime}:00Z`);
    const isoString = combined.toISOString();
    setDateConfirmed(isoString);
  };

  return (
    <AppointmentContext.Provider
      value={{
        selectedDate,
        selectedTime,
        setSelectedDate,
        setSelectedTime,
        handleConfirm,
        dateConfirmed,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointment = () => useContext(AppointmentContext);
