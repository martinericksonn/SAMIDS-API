import { throws } from 'assert';

export class Account {
  constructor(
    private firstName: string,
    private lastName: string,
    public uid: number,
    private email: string,
    private profile: string[] = [],
  ) {}

  log() {
    console.log(
      `${this.firstName}  ${this.lastName} ${this.uid} ${this.email} ${this.profile}`,
    );
  }

  toJson() {
    return {
      firstName: this.firstName,
      lastName: this.lastName,
      uid: this.uid,
      email: this.email,
      profile: this.profile,
    };
  }
}
