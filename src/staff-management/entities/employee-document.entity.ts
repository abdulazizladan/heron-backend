export class EmployeeDocuments {
    employeeId: string;
    documents: {
      type: "CV" | "Appointment Letter" | "Promotion Letter" | "Certificate" | "NYSC";
      name: string;
      url: string;
      dateUploaded: Date;
    }[];
  }