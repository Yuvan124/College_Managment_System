interface Student {
    rollNo: number;
    name: string;
    branch: string;
    marks: number[];
  }
  
  class StudentInformation implements Student {
    rollNo: number;
    name: string;
    branch: string;
    marks: number[];
  
    constructor(rollNo: number, name: string, branch: string, marks: number[]) {
      this.rollNo = rollNo;
      this.name = name;
      this.branch = branch;
      this.marks = marks;
    }
  
    calculateAverage(): number {
      const totalMarks = this.marks.reduce((sum, mark) => sum + mark, 0);
      const average = totalMarks / this.marks.length;
      return average;
    }
  }
  
  // Usage example
  
  const student1 = new StudentInformation(1, "John Doe", "Computer Science", [85, 90, 92, 88, 95]);
  console.log(`Student Roll No: ${student1.rollNo}`);
  console.log(`Student Name: ${student1.name}`);
  console.log(`Student Branch: ${student1.branch}`);
  console.log(`Subject Marks: ${student1.marks}`);
  console.log(`Average Marks: ${student1.calculateAverage()}`);
  