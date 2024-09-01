export const volunteers_details = [
  {
    school_Clg: "A&N Island",
    number: 1600,
  },
  {
    school_Clg: "Andhra Pradesh",
    number: 1600,
  },
  {
    school_Clg: "Arunachal Pradesh",
    number: 1600,
  },
  {
    school_Clg: "Assam",
    number: 1600,
  },
  {
    school_Clg: "Bihar",
    number: 1600,
  },
  {
    school_Clg: "Chandigarh",
    number: 1600,
  },
  {
    school_Clg: "Daman and Diu and D & N Haveli",
    number: 1600,
  },
  {
    school_Clg: "Delhi",
    number: 1600,
  },
];

let total = 0;

for (let i = 0; i < volunteers_details.length; i++) {
  total += volunteers_details[i].number;
}

export { total };
