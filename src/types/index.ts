export interface EventInfo {
  date: string;
  time: string;
  location: string;
}

export interface RegistrationData {
  name: string;
  email: string;
  cpf: string;
  phone: string;
}

export interface Organizer {
  name: string;
  photo?: string;
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
  };
}
