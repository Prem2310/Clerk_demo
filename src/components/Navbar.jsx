import { UserButton, useUser, useClerk } from "@clerk/clerk-react";

export default function Navbar() {
  const { isSignedIn, user } = useUser();
  const { signOut } = useClerk();

  if (isSignedIn) {
    console.log(user);
  }

  return (
    <>
      <div className="border-b-2 border-slate-600 h-16 bg-white text-black">
        <div className="flex items-center justify-between h-full px-4">
          <div className="text-black text-2xl font-bold">Logo</div>
          <div className="flex items-center">
            {user ? (
              <>
                <UserButton />
                <button
                  onClick={signOut}
                  className="text-black text-xl font-semibold ml-4"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <a
                  href="/signin"
                  className="text-black text-xl font-semibold mr-4"
                >
                  Sign In
                </a>
                <a href="/signup" className="text-black text-xl font-semibold">
                  Sign Up
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
