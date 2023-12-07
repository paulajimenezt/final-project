export class Horse {
  name: string;
  gender?: string;
  color?: string;
  owner: string;
  birthDate?: Date;
  lastCheckedDate?: Date;
  weight?: number;
  height?: number;
  status: "healthy" | "triage" | "hospitalized" | "on recovery";
  pregnancyDate?: Date | null;

  constructor(
    name: string,
    owner: string,
    status: "healthy" | "triage" | "hospitalized" | "on recovery"
  ) {
    this.name = name;
    this.owner = owner;
    this.status = status;
  }
}




