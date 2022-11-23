export class SystemMessage {
  private isSuccess: boolean;
  private data: string;

  private systemMessage(code: number): string {
    switch (code) {
      case 101:
        return 'Account has been successfully registered';
      case 102:
        return 'Account credentials has been updated successfully';
      case 103:
        return 'Account has been successfully deleted';
      case 104:
        return 'Login Successful';
      case 501:
        return 'The email address or password is incorrect.';
      case 502:
        return 'Sorry Invalid or Missing credentials, please try again';
      case 503:
        return 'This Email is already registered, try logging in';
      case 504:
        return 'This Email is already registered, cannot update credentials';
      case 505:
        return 'The email address or password is incorrect';
      case 506:
        return 'This ID does not exist';
      case 507:
        return "Sorry we couldn't find any results";
      case 508:
        return 'Sorry this email is not a valid email';
      case 509:
        return 'Sorry this age is not a valid age';
      case 510:
        return 'Sorry this name is not a valid name';
      case 511:
        return 'Password should be at least 6 characters';
      case 512:
        return 'No result found';
      default:
        return 'Unknown request';
    }
  }

  custom(data: any) {
    return data;
  }

  success(code: number | any): any {
    if (isNaN(code)) {
      console.log(true);
      this.isSuccess = true;
      this.data = code;
      console.log('success');
      return this.toJson();
    }
    
    console.log(true, true);
    this.isSuccess = true;
    this.data = this.systemMessage(code);
    return this.toJson();
  }

  error(code: number | any): any {
    if (isNaN(code)) {
      this.isSuccess = false;
      this.data = code;
      return this.toJson();
    }

    this.isSuccess = false;
    this.data = this.systemMessage(code);

    return this.toJson();
  }

  private toJson() {
    return {
      success: this.isSuccess,
      data: this.data,
    };
  }
}
