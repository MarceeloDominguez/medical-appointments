import { Ionicons } from "@expo/vector-icons";

export type ServiceOption = {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof Ionicons.glyphMap;
  color: string;
  iconColor: string;
  backgroundIcon: string;
  borderColor: string;
  route?: string;
};

export const serviceOptions: ServiceOption[] = [
  {
    id: 1,
    title: "Reservar una cita",
    description: "Encontrar un doctor o un especialista",
    icon: "calendar-clear-outline",
    color: "rgba(202, 201, 230, 0.2)",
    iconColor: "#254edb",
    backgroundIcon: "rgba(72, 69, 219, 0.2)",
    borderColor: "#254edb",
    route: "/searchappointment",
  },
  {
    id: 2,
    title: "Hospitales y clínicas",
    description: "Encuentra un hospital cercano",
    icon: "business-outline",
    color: "rgba(153, 228, 159, 0.2)",
    iconColor: "#209c05",
    backgroundIcon: "rgba(12, 136, 22, 0.2)",
    borderColor: "#209c05",
    route: "/searchhospitals",
  },
  {
    id: 3,
    title: "Solicitar una \nconsulta",
    description: "Habla con un especialista",
    icon: "chatbox-ellipses-outline",
    color: "rgba(231, 173, 139, 0.2)",
    iconColor: "#db2525",
    backgroundIcon: "rgba(194, 79, 13, 0.2)",
    borderColor: "#db2525",
    route: "/requestconsultation",
  },
  {
    id: 4,
    title: "Encontra una farmacia cercana",
    description: "Compra tus medicamentos",
    icon: "medkit-outline",
    color: "rgba(235, 133, 133, 0.2)",
    iconColor: "#db2525",
    backgroundIcon: "rgba(180, 12, 12, 0.2)",
    borderColor: "#db2525",
    route: "/findpharmacy",
  },
];
