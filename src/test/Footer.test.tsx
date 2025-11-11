import { render, screen } from "@testing-library/react"
import { test, expect, describe, beforeEach } from "vitest"
import Footer from "@/components/custom/footer"

beforeEach(() => {
    render(<Footer />)
})

describe("Footer", () => {

    test("Displays 2 footer decorative images", () => {
        expect(screen.getAllByRole("img")).toHaveLength(2)
    })

    test("Displays footer content", () => {
        expect(screen.getAllByRole('link')).toHaveLength(10)
    })

    test("Displays footer email field", () => {
        const emailInput = screen.getByRole("textbox")
        expect(screen.getAllByRole("textbox")).toHaveLength(1)
        expect(emailInput).toBeInTheDocument()
        expect(emailInput).toHaveAttribute("type", "email")
    })
})