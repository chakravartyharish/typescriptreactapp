import React, { ChangeEvent, useState } from "react"

import Header from "./Header"

const AddPersonForm = (props: any) => {
  const [name, setName] = useState<string>()
  const [country, setCountry] = useState<string>()
  const [age, setAge] = useState<number | string>()

  function handleSubmit(e: any) {
    e.preventDefault()

    if (name !== "" && country !== "" && age !== "") {
      props.setPersons((prev: any) =>
        prev.concat({ name, country, age, id: Date.now() })
      )
    }

    setName("")
    setCountry("")
    setAge("")
  }

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleAgeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value)
  }

  const handleCountryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value)
  }

  return (
    <>
      <Header /> {"  "}
      <form onSubmit={handleSubmit}>
        <h6 style={{ color: "red", fontFamily: "cursive" }}>
          {/* Note:You must Enter All the Fields: */}
        </h6>
        {"  "}
        <input
          value={name}
          onChange={handleNameChange}
          placeholder="Full Name"
        />
        {"  "}
        <input
          value={country}
          onChange={handleCountryChange}
          placeholder="Country"
        />
        {"  "}
        <input value={age} onChange={handleAgeChange} placeholder="Age" />{" "}
        {"  "}
        <button className="btn btn-primary mb-2">Add</button>
      </form>
    </>
  )
}

export default AddPersonForm
