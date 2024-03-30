import "@testing-library/jest-dom";
import userLogIn from "@/libs/userLogIn";
import getUserProfile from "@/libs/getUserProfile";
import { screen, render, waitFor } from "@testing-library/react";
import TopMenu from "@/components/Nav";
import Home from "@/app/page";

describe("User Log-In test", () => {
  var logInPromise: any;
  var JsonResult: any;

  beforeAll(async () => {
    const email = "n@email.com";
    const password = "123456";
    logInPromise = userLogIn(email, password);
    JsonResult = await logInPromise;
  });

  it("userLogIn must return correct results", () => {
    expect(JsonResult.success).toBeTruthy();
    console.log(JsonResult);
  });

  it("Data of user Should be correct ", async () => {
    const profile = await getUserProfile(JsonResult.token);
    expect(profile.data.name).toEqual("Nonthapan");
    expect(profile.data.email).toEqual("n@email.com");
    expect(profile.data.role).toEqual("user");
  });
});
