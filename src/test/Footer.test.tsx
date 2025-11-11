import { render, screen } from "@testing-library/react"
import { describe, test, expect } from "vitest"
import Footer from "@/components/custom/footer"

describe("Footer Component", () => {
  test("renders the logo and tagline", () => {
    render(<Footer />)

    expect(screen.getAllByText("Foodify")).toHaveLength(2)
    expect(screen.getByText("ORDER. FOOD. HAPPY")).toBeInTheDocument()
  })

  test("displays the essential contact information", () => {
    render(<Footer />)

    expect(screen.getByText("+1 (800) 656-5222")).toBeInTheDocument()
    expect(screen.getByText("info@foodify.com")).toBeInTheDocument()
    expect(screen.getByText("Arlington, TX")).toBeInTheDocument()
  })

  test("renders all social media links with correct aria-labels", () => {
    render(<Footer />)

    const links = [
      { label: "Follow us on Facebook", href: "https://facebook.com/foodify" },
      { label: "Follow us on Twitter", href: "https://twitter.com/foodify" },
      { label: "Follow us on Instagram", href: "https://instagram.com/foodify" },
      { label: "Subscribe to our YouTube channel", href: "https://youtube.com/foodify" },
    ]

    links.forEach(({ label, href }) => {
      const link = screen.getByLabelText(label)
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute("href", href)
      expect(link).toHaveAttribute("target", "_blank")
    })
  })

  test("renders the legal links", () => {
    render(<Footer />)

    const privacy = screen.getByLabelText("Read our Privacy Policy")
    const terms = screen.getByLabelText("Read our Terms of Service")

    expect(privacy).toBeInTheDocument()
    expect(privacy).toHaveAttribute("href", "/privacy-policy")

    expect(terms).toBeInTheDocument()
    expect(terms).toHaveAttribute("href", "/terms-of-service")
  })

  test("displays the current year dynamically", () => {
    const year = new Date().getFullYear()
    render(<Footer />)

    // Use a function matcher because the text is split into nodes
    const paragraph = screen.getByText((_, element) => {
      const text = element?.textContent
      return text === `© ${year} Foodify. All rights reserved.`
    })

    expect(paragraph).toBeInTheDocument()
  })

  test("includes the footer landmark role", () => {
    render(<Footer />)

    const footer = screen.getByRole("contentinfo")
    expect(footer).toBeInTheDocument()
  })

  test("includes a navigation role for social icons", () => {
    render(<Footer />)

    const nav = screen.getByRole("navigation", { name: "Social media links" })
    expect(nav).toBeInTheDocument()
  })
})