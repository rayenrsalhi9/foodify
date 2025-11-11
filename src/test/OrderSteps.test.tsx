import { screen, render } from "@testing-library/react";
import { describe, test, expect, beforeEach } from "vitest";
import OrderSteps from "@/pages/orderSteps";

beforeEach(() => {
    render(<OrderSteps />)
})

describe("OrderSteps", () => {

    test("Displays appropriate title and paragraph", () => {    
        expect(screen.getByText('How To Order?')).toBeInTheDocument()
        expect(screen.getByText('Follow these three simple steps to enjoy your favorite meals delivered fresh to your door-fast, secure, and hassle-free.')).toBeInTheDocument()
    })

    test("Displays 3 step cards", () => {
        expect(screen.getAllByTestId("step-1")).toHaveLength(1)
        expect(screen.getAllByTestId("step-2")).toHaveLength(1)
        expect(screen.getAllByTestId("step-3")).toHaveLength(1)
    })

    test("Displays all step cards content", () => {
        expect(screen.getByText("Choose your Product")).toBeInTheDocument()
        expect(screen.getByText("Make your Order")).toBeInTheDocument()
        expect(screen.getByText("Food is on the way")).toBeInTheDocument()
    })

})