import React, { useState, useEffect } from "react"
import AddPersonForm from "./AddPersonForm"
import DeletePerson from "./DeletePerson"
import DisplayTime from "./DisplayTime"

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
}

export default function MainApp() {
  const [persons, setPersons] = useState<IJobSeeker[]>(
    JSON.parse(localStorage.getItem("persons")!) ?? []
  )

  // only run once the first time this component is rendered
  useEffect(() => {
    const getPersons = () => {
      if (localStorage.getItem("persons")) {
        setPersons(JSON.parse(localStorage.getItem("persons")!))
      }
    }
    getPersons()
  }, [])

  // run every time our person state changes
  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons))
  }, [persons])

  const handleDelete = () => {
    setPersons([])
    localStorage.removeItem("persons")
  }

  return (
    <>
      <div className="mt-2">
        <DisplayTime />
      </div>
      <div
        className="container border border-primary rounded mt-5"
        style={{
          backgroundColor: "lightgreen",
          backgroundImage: `url()`,
          backgroundAttachment: "scroll",
          // backgroundRepeat: "repeat-x repeat-y",
        }}
      >
        {" "}
        <AddPersonForm setPersons={setPersons} />
        <ul>
          {persons.length > 0 && (
            <>
              {persons.map(
                (
                  person: {
                    name: string
                    country: string
                    age: number
                    id: number
                  },
                  index: number
                ) => (
                  <ul key={person.id}>
                    <h2
                      style={{
                        color: "blue",
                        fontFamily: "cursive",
                        fontSize: "20px",
                      }}
                    >
                      Job Seeker {index + 1} Added
                    </h2>
                    <DeletePerson
                      setPersons={setPersons}
                      id={person.id}
                      name={person.name}
                      country={person.country}
                      age={person.age}
                      key={person.id}
                    />
                  </ul>
                )
              )}
            </>
          )}
        </ul>
        <div>
          {persons.length > 1 && (
            <div style={{ marginLeft: "550px" }}>
              <button
                className="btn btn-danger btn-sm rounded-0  mt-4 mb-4"
                onClick={() => handleDelete()}
              >
                {" "}
                Delete All
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
