import React from "react"

type Props = {
  setPersons: any
  id: number
  name: string
  country: string
  age: number
}

export default function DeletePerson({
  setPersons,
  id,
  name,
  country,
  age,
}: Props) {
  function handleDelete() {
    setPersons((prev: any) => prev.filter((person: any) => person.id !== id))
  }

  return (
    <li>
      <div
        style={{
          color: "black",
          fontFamily: "cursive",
          fontSize: "20px",
        }}
      >
        {name} is from {country} and is {age} years old.
        {"  "}
        <button className="btn btn-warning" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}
