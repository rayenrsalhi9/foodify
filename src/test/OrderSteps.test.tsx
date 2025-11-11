import { screen, render } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import OrderSteps from "@/pages/orderSteps";

describe("OrderSteps", () => {

    test("Displays appropriate title and paragraph", () => {
        render(<OrderSteps />)
        expect(screen.getByText('How To Order?')).toBeTruthy()
        expect(screen.getByText('Follow these three simple steps to enjoy your favorite meals delivered fresh to your door-fast, secure, and hassle-free.')).toBeTruthy()
    })

})