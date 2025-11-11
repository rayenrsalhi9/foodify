import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { BrowserRouter } from "react-router";
import Signup from "../pages/auth/signup";
import { SignupForm } from "../components/signup-form";

// Wrapper to provide router context
const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("Signup Page", () => {
  test("renders signup page with logo and form", () => {
    render(<Signup />, { wrapper: TestWrapper });
    
    // Check for brand link with Foodify text
    const brandLink = screen.getByRole("link", { name: /foodify/i });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute("href", "/");
    
    // Check for form title
    expect(screen.getByText("Create your account")).toBeInTheDocument();
  });

  test("renders signup form with all fields", () => {
    render(<SignupForm />, { wrapper: TestWrapper });
    
    // Check for form title and description
    expect(screen.getByText("Create your account")).toBeInTheDocument();
    expect(screen.getByText("Enter your details below to create your account")).toBeInTheDocument();
    
    // Check for all input fields using getByLabelText
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirm Password")).toBeInTheDocument();
    
    // Check for submit button
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("renders login link for existing users", () => {
    render(<SignupForm />, { wrapper: TestWrapper });
    
    expect(screen.getByText("Already have an account?")).toBeInTheDocument();
    const loginLink = screen.getByRole("link", { name: "Login" });
    expect(loginLink).toBeInTheDocument();
    expect(loginLink).toHaveAttribute("href", "/login");
  });

  test("SignupForm accepts custom className", () => {
    render(<SignupForm className="customClass" />, { wrapper: TestWrapper });
    
    const form = document.querySelector("form");
    expect(form).toHaveClass("customClass");
  });
});