import React from 'react'

const Tracker = ({ position }: any) => {
  return (
    <div
      className={`pointer-events-none fixed inset-0 z-30 hidden transition duration-300 dark:block lg:absolute`}
      style={{
        background: `radial-gradient(350px at ${position.x}px ${position.y}px,rgba(29, 78, 216, 0.15) 3%, transparent)`,
      }}
    ></div>
  )
}

export default Tracker
