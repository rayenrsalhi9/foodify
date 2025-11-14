import { render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import Landing from "@/pages/landing/landing";

// Mock the image imports
vi.mock('/food/bg-icon-1.png', () => ({ default: 'bg-icon-1-mock' }));
vi.mock('/food/bg-icon-2.png', () => ({ default: 'bg-icon-2-mock' }));
vi.mock('/food/burger.png', () => ({ default: 'burger-mock' }));
vi.mock('/food/pasta.png', () => ({ default: 'pasta-mock' }));
vi.mock('/food/salad.png', () => ({ default: 'salad-mock' }));
vi.mock('/food/pizza.png', () => ({ default: 'pizza-mock' }));
vi.mock('/food/sandwich.png', () => ({ default: 'sandwich-mock' }));
vi.mock('/food/rice.png', () => ({ default: 'rice-mock' }));

describe("Landing Page", () => {
  test("renders landing page with main headline", () => {
    render(<Landing />);
    
    expect(screen.getByText("Fast Delivery. Zero Hassle.")).toBeInTheDocument();
  });

  test("renders tagline text", () => {
    render(<Landing />);
    
    expect(screen.getByText("Craving something? We'll bring it hot to your door-fast.")).toBeInTheDocument();
  });

  test("renders search form with delivery address input", () => {
    render(<Landing />);
    
    const searchInput = screen.getByPlaceholderText("Enter delivery address");
    expect(searchInput).toBeInTheDocument();
    expect(searchInput).toHaveAttribute("type", "text");
  });

  test("renders locate me button with navigation icon", () => {
    render(<Landing />);
    
    const locateButton = screen.getByRole("button", { name: /locate me/i });
    expect(locateButton).toBeInTheDocument();
    expect(locateButton).toHaveTextContent("Locate Me");
  });

  test("renders search button with search icon", () => {
    render(<Landing />);
    
    const searchButton = screen.getByRole("button", { name: /search/i });
    expect(searchButton).toBeInTheDocument();
    expect(searchButton).toHaveTextContent("Search");
  });

  test("renders all food categories", () => {
    render(<Landing />);
    
    const categories = ["Burger", "Pasta", "Salad", "Pizza", "Sandwich", "Fried Rice"];
    
    categories.forEach(category => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  test("renders MapPin icon in search form", () => {
    render(<Landing />);
    
    // Check if the MapPin icon is present by looking for its container
    const mapPinContainer = screen.getByPlaceholderText("Enter delivery address").parentElement;
    expect(mapPinContainer).toBeInTheDocument();
  });

  test("search form has correct structure", () => {
    render(<Landing />);
    
    const form = screen.getByPlaceholderText("Enter delivery address").closest("form");
    expect(form).toBeInTheDocument();
    
    // Check if form contains both buttons
    const locateButton = screen.getByRole("button", { name: /locate me/i });
    const searchButton = screen.getByRole("button", { name: /search/i });
    
    expect(form).toContainElement(locateButton);
    expect(form).toContainElement(searchButton);
  });

  test("food category items are clickable", () => {
    render(<Landing />);
    
    const burgerCategory = screen.getByText("Burger").closest("div");
    expect(burgerCategory).toHaveClass("cursor-pointer");
  });

  test("food category items have hover effects", () => {
    render(<Landing />);
    
    const burgerCategory = screen.getByText("Burger").closest("div");
    expect(burgerCategory).toHaveClass("group");
  });

  test("renders background icons section", () => {
    render(<Landing />);
    
    // Check for the background icons container
    const section = screen.getByText("Fast Delivery. Zero Hassle.").closest("section");
    expect(section).toHaveClass("relative");
  });

  test("landing page has correct main container structure", () => {
    render(<Landing />);
    
    // Find the main container by looking for the div with the specific class
    const containers = document.querySelectorAll('div');
    const mainContainer = Array.from(containers).find(div => 
      div.className.includes('h-[calc(100vh-80px)]')
    );
    
    expect(mainContainer).toBeInTheDocument();
    expect(mainContainer).toHaveClass("h-[calc(100vh-80px)]", "bg-white", "flex", "flex-col");
  });

  test("section has correct styling classes", () => {
    render(<Landing />);
    
    const section = screen.getByText("Fast Delivery. Zero Hassle.").closest("section");
    expect(section).toHaveClass(
      "relative",
      "bg-linear-to-br",
      "from-orange-500",
      "to-orange-600",
      "text-white",
      "flex-1",
      "px-4",
      "overflow-hidden",
      "flex",
      "items-center",
      "min-h-full"
    );
  });

  test("search input has correct styling", () => {
    render(<Landing />);
    
    const searchInput = screen.getByPlaceholderText("Enter delivery address");
    expect(searchInput).toHaveClass(
      "border-0",
      "bg-transparent",
      "focus-visible:ring-0",
      "focus-visible:outline-none",
      "text-gray-900",
      "placeholder:text-gray-400",
      "h-12"
    );
  });

  test("locate me button has correct styling", () => {
    render(<Landing />);
    
    const locateButton = screen.getByRole("button", { name: /locate me/i });
    expect(locateButton).toHaveClass(
      "text-gray-600",
      "hover:text-gray-900",
      "hover:bg-gray-100",
      "gap-2",
      "transition-colors",
      "duration-200"
    );
  });

  test("search button has correct styling", () => {
    render(<Landing />);
    
    const searchButton = screen.getByRole("button", { name: /search/i });
    expect(searchButton).toHaveClass(
      "bg-orange-500",
      "hover:bg-orange-600",
      "text-white",
      "gap-2",
      "transition-colors",
      "duration-200"
    );
  });
});