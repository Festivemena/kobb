import React, { useState } from "react";
import { auth } from "../../firebaseconfig";

import { sendPasswordResetEmail } from "firebase/auth";

import Link from "next/link";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleReset(e) {
    e.preventDefault();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("password reset email sent");
        setMessage("Check your email to reset passowrd");
      })
      .catch((error) => {
        alert(error);
        setError("Email not found");
        // ..
      });
  }

  return (
    <div>
      <div className="w-2/3 mx-auto">
        <h2 className="text-center font-mono font-extrabold mt-32 text-2xl">
         Reset Your Password
        </h2>

        <form onSubmit={handleReset}>
          {message && (
            <p className="text-center text-xs mt-3 text-green-400">{message}</p>
          )}
          {error && (
            <p className="text-center text-xs mt-3 text-red-400">{error}</p>
          )}
          <div className="my-2 flex flex-col">
            <label className="text-teal-800 font-bold text-lg tracking-wide">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="E-mail"
              className="w-full px-[28px] mb-[14px] h-[48px] rounded-[8px] border-[#C4C4C4] border-[1px]"
            />
          </div>

          <input
            type="submit"
            className="bg-teal-800 w-full mt-2 tracking-wide p-1 focus:outline-none rounded-xl font-bold text-teal-50 text-center"
          />
          <p className="text-center text-xs mt-4">
            <Link href="/">
              <a className="text-blue-700">Cancel</a>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword