interface Park {
    name: string;
    description: string;
    designation: string;
    state: string;
    parkCode: string;
    contacts: {
        emailAddresses: {
          emailAddress: string;
        }[];
        phoneNumbers: {
          phoneNumber: string;
        }[];
      };
}