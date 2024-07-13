import { SignIn } from "@clerk/clerk-react";
export default function Signin() {
  return (
    <div>
      <SignIn path="/signin" routing="path" />
    </div>
  );
}
