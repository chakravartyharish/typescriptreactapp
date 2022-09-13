import React, { useState, useEffect, ChangeEvent } from "react"

interface IJobSeeker {
  id: number
  name: string
  country: string
  person: {
    name: string
    country: string
    age: number
  }
  age: number
  key: string
  setPersons: () => void
  persons: { name: string; country: string; age: number; id: number }[]
  setName: () => void
  setAge: () => void
  setCountry: () => void
}

export default function UpdatePerson() {
  const [persons, setPersons] = useState<IJobSeeker[]>(
    JSON.parse(localStorage.getItem("persons")!) ?? []
  )

  const [name, setName] = React.useState<string>()
  const [country, setCountry] = React.useState<string>()
  const [age, setAge] = React.useState<number | string>()

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value)

  const handleChangeCountry = (event: ChangeEvent<HTMLInputElement>) =>
    setCountry(event.target.value)

  const handleChangeAge = (event: ChangeEvent<HTMLInputElement>) =>
    setAge(event.target.value)

  const onUpdate = (person: any) => {
    let index = persons.indexOf(person)
    let x = JSON.parse(localStorage.getItem("persons")!)

    x[index].name = name
    x[index].age = age
    x[index].country = country

    if (name !== "" && age !== "" && country !== "") {
      localStorage.setItem("persons", JSON.stringify(x))

      setPersons(JSON.parse(localStorage.getItem("persons")!))
    }
  }

  // run every time our person data changes
  useEffect(() => {
    setAge("")
    setName("")
    setCountry("")
  }, [persons])

  function refreshPage() {
    setInterval(() => {
      window.location.reload()
    }, 100)
  }

  return (
    <>
      <div>
        <h6 style={{ color: "Blue", fontFamily: "cursive" }}>
          Note:You must Enter All the Fields:
        </h6>
      </div>

      {persons !== null &&
        persons.length > 0 &&
        persons.map((person: any, index: number) => (
          <ul key={person.id}>
            <li>
              <h2
                style={{
                  color: "green",
                  fontFamily: "cursive",
                  fontSize: "20px",
                }}
              >
                {"  "}
                Update Job Seeker {index + 1} Details{" "}
              </h2>
              {"  "}
              <input onChange={handleChangeName} placeholder={person.name} />
              {"  "}
              <input
                onChange={handleChangeCountry}
                placeholder={person.country}
              />
              <input onChange={handleChangeAge} placeholder={person.age} />
              {"  "}
              <button
                className="btn btn-secondary mb-2"
                onClick={() => {
                  onUpdate(person)
                  refreshPage()
                }}
              >
                Update
              </button>
            </li>
          </ul>
        ))}
    </>
  )
}
