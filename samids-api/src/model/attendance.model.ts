export class Attendance {
  constructor(
    public attendanceID: number,
    private name: string,
    private employeeID: number,
    private date: string,
    public time: string,
    private classcode:
     number,
    private department: string,
    private remarks: string,
  ) {}

  log() {
    console.log(
      `${this.name} ${this.employeeID} ${this.date} ${this.time} ${this.classcode} ${this.department} ${this.remarks}`,
    );
  }

  toJson() {
    return {
      attendanceID: this.attendanceID,
      name: this.name,
      employeeID: this.employeeID,
      date: this.date,
      time: this.time,
      classcode: this.classcode,
      department: this.department,
      remarks: this.remarks,
    };
  }
}
