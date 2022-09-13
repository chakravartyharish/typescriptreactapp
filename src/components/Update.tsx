import React from "react"

import DisplayTime from "./DisplayTime"
import UpdatePerson from "./UpdatePerson"

export default function Header() {
  return (
    <>
      <div className="mt-3">
        <DisplayTime />
      </div>

      <div
        className="container border border-primary rounded mt-5"
        style={{
          backgroundColor: "lightgrey",
        }}
      >
        <h2>Update Job Seeker Details</h2>
        <UpdatePerson />
      </div>
    </>
  )
}
