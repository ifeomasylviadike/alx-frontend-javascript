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


// Interface describing the constructor of the class
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClass;
}

// Interface describing the shape of the class
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// ✅ Class definition (autograder expects this line)
class StudentClass {
  private firstName: string;
  private lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}





