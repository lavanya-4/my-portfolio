import React from 'react'

type Props = {
  id: string
  children: React.ReactNode
}

export default function Page({ id, children }: Props) {
  return (
    <section
      id={id}
      className="mx-auto max-w-6xl px-6 py-24 md:px-10"
    >
      {children}
    </section>
  )
}