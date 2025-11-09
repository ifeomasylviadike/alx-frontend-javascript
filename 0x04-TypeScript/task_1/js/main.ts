interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // allows additional dynamic properties like "contract"
}

interface Director extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

function printTeacher( { firstName, lastName }: { firstName: string, lastName: string}): string { 
  firstName = firstName.charAt(0); 
  return `${firstName}. ${lastName}`; }




