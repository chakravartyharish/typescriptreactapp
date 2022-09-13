import React, { useState, useEffect } from "react"

export default function DisplayTime() {
  const [theTime, setTheTime] = useState(new Date().toLocaleString())

  useEffect(() => {
    const interval = setInterval(
      () => setTheTime(new Date().toLocaleString()),
      1000
    )

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <div
        style={{
          color: "Pink",
          fontFamily: "cursive",
          fontSize: "30px",
        }}
      >
        Today is {theTime}
      </div>
    </>
  )
}
