export type Specialty = {
  id: number;
  name: string;
};

export type User = {
  id?: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export type WorkingHours = {
  end: string;
  start: string;
};

export type Doctor = {
  id: string;
  userId: string;
  specialtyId: string;
  bio: string;
  hospital: string;
  location: string;
  workingHours: WorkingHours | null;
  user: User;
  specialty: Specialty;
  createdAt: string;
};
