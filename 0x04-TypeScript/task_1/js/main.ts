// Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propertyName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

// extending interface
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// function interface
interface printTeacherFunction {
  (firstName: string, lastName:string): string;
}

const printTeacher = (firstName: string, lastName:string): string => {
  return `${firstName.slice(0, 1)}. ${lastName}`;
}

console.log(printTeacher('John', 'Doe'));

// class interface
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework():string {
    return 'Currently working';
  }

  displayName():string {
    return this.firstName;
  }
}

// console.log(new StudentClass('Kev', 'Splice'));
// console.log(new StudentClass('Kev', 'Splice').displayName());
// console.log(new StudentClass('Kev', 'Splice').workOnHomework());
