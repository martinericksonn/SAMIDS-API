export class Account {
  constructor(
    private name: string,
    public id: number,
    private department: string,
    public collegeName: string,
    private onLeave: boolean,
    private resigned: boolean,
    private password: string,
  ) {}

  log() {
    console.log(
      `${this.name} ${this.id} ${this.department} ${this.collegeName} ${this.onLeave} ${this.resigned}`,
    );
  }

  toJson() {
    return {
      name: this.name,
      id: this.id,
      department: this.department,
      collegeName: this.collegeName,
      onLeave: this.onLeave,
      resigned: this.resigned,
      password: this.password,
    };
  }
}
