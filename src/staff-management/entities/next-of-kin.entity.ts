export class NextOfKin {
    employeeId: string;
    kins: {
      name: string;
      relationship: "Spouse" | "Parent" | "Sibling" | "Child";
      phone: string;
      address: string;
      percentageAllocation?: number; // For benefit distribution
    }[];
  }