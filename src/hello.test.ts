import { describe, expect, it } from "vitest"

import { hello } from "./hello"

describe("hello()", () => {
  it('returns with a default name of "World"', () => {
    const response = hello()

    expect(response).toBe("👋 Hello World")
  })

  it('returns with a custom name of "Foo"', () => {
    const response = hello("Foo")

    expect(response).toBe("👋 Hello Foo")
  })
})
