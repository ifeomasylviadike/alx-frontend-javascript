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

// Define the interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Define the function (using destructuring and named function)
function printTeacher({ firstName, lastName }: { firstName: string; lastName: string }): string {
  return `${firstName.charAt(0)}. ${lastName}`;
}




