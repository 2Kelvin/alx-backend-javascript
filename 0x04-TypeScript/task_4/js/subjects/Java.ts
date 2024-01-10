namespace Subjects {
    export interface Teacher {
        experienceTeachingJava?: number;
    }
  
    export class Java extends Subjects {
      getRequirements = ():string => {
        return 'Here is the list of requirements for Java';
      }
  
      getAvailableTeacher = (): string => {
        if (this.teacher.experienceTeachingJava === 0) {
          return 'No available teacher';
        }
        return `Available Teacher: ${this.teacher.firstName}`;
      }
    }
  }
