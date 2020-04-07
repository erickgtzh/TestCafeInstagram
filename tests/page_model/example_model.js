import { Selector, t } from "testcafe";

export default class ExamplePage {
  constructor() {
    this.inputUsername = Selector("input[name=username]");
    this.inputPassword = Selector("input[name=password]");
    this.enterButton = "enter";
  }
}
