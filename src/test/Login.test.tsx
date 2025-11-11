import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { describe, test, expect } from "vitest";
import Login from "@/pages/auth/login";
import { LoginForm } from "@/components/login-form";

const TestWrapper = ({ children }: { children: React.ReactNode }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe("Login Page", () => {
  test("renders login page with logo and form", () => {
    render(<Login />, { wrapper: TestWrapper });
    
    // Check for brand link with Foodify text
    const brandLink = screen.getByRole("link", { name: /foodify/i });
    expect(brandLink).toBeInTheDocument();
    expect(brandLink).toHaveAttribute("href", "/");
    
    // Check for form title
    expect(screen.getByText("Login to your account")).toBeInTheDocument();
  });

  test("renders login form with email and password fields", () => {
    render(<LoginForm />, { wrapper: TestWrapper });
    
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("renders forgot password link", () => {
    render(<LoginForm />, { wrapper: TestWrapper });
    
    const forgotLink = screen.getByText("Forgot your password?");
    expect(forgotLink).toBeInTheDocument();
    expect(forgotLink).toHaveAttribute("href", "#");
  });

  test("renders signup link", () => {
    render(<LoginForm />, { wrapper: TestWrapper });
    
    const signupLink = screen.getByText("Sign up");
    expect(signupLink).toBeInTheDocument();
    expect(signupLink).toHaveAttribute("href", "/signup");
  });

  test("LoginForm accepts custom className", () => {
    const customClass = "custom-login-form";
    render(<LoginForm className={customClass} />, { wrapper: TestWrapper });
    
    const form = screen.getByTestId("login-form");
    expect(form).toHaveClass(customClass);
  });
});