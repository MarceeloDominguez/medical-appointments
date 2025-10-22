export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "America/Argentina/Buenos_Aires",
  };

  let formatted = date.toLocaleString("es-ES", options);

  formatted = formatted
    .replace(/\sde\s/g, " de ")
    .replace(/,\s(?=\d)/, ", ")
    .replace(/\s(\d{1,2}):(\d{2})/, ", $1:$2 hs.")
    .replace(/\.$/, "")
    .trim();

  formatted = formatted.charAt(0).toUpperCase() + formatted.slice(1);

  return formatted;
};
