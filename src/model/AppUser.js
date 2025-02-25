class AppUser {
  constructor(data) {
    this.serial = data.serial;
    this.id = data.id;
    this.username = data.username;
    this.personName = data.personName;
    this.userFullName = data.userFullName;
    this.email = data.email;
    this.isVerified = data.isVerified;
    this.phone = data.phone;
    this.callingCode = data.callingCode;
    this.activated = data.activated;
    this.userType = data.userType;
    this.authorities = data.authorities;
    this.countryId = data.countryId;
    this.roleId = data.roleId;
    this.password = data.password;
  }
}

export default AppUser;
