# angular-certification

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/ng-certification)
    if (localStorage.getItem("salim") == null) {
      this.listzipcodeEntred.push(this.form.value.zipCode),
        localStorage.setItem("salim", this.listzipcodeEntred);
    } 
    else {
      const xx = localStorage.getItem("salim");
      const bbb = xx?.split(",");
      this.listzipcodeEntred = bbb;
      this.listzipcodeEntred.push(this.form.value.zipCode),
        localStorage.setItem("salim", this.listzipcodeEntred);
    }