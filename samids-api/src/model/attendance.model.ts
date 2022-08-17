export class Attendance {
  constructor(
    public ref: number,
    private uid: number,
    private date: string,
    public time: string,
    private classcode: string,
    private remarks: string,
  ) {}

  log() {
    console.log(
      `${this.ref} ${this.uid} ${this.date} ${this.time} ${this.classcode} ${this.remarks}`,
    );
  }

  toJson() {
    return {
      ref: this.ref,
      uid: this.uid,
      date: this.date,
      time: this.time,
      classcode: this.classcode,
      remarks: this.remarks,
    };
  }
}
