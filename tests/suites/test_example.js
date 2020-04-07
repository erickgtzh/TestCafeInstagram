import ExamplePage from "../page_model/example_model";

const page = new ExamplePage();

fixture`Instagram Login`.page`https://www.instagram.com/`;

test("input name", async (t) => {
  await t
    .typeText(page.inputUsername, "fofawam582@smlmail.com")
    .wait(1000)
    .typeText(page.inputPassword, "GenericPassword1")
    .wait(1000)
    .pressKey(page.enterButton)
    .wait(1000);

  /*
    .expect(Selector(".gmFkV").innerText)
    .eql("Welcome!")
    .wait(5000);*/
});
