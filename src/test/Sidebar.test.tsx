import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, test, expect } from "vitest";
import { BrowserRouter } from "react-router";
import AppSidebar from "@/components/custom/Sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

// Wrapper component to provide necessary context
const TestWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <BrowserRouter>
            <SidebarProvider>
                {children}
            </SidebarProvider>
        </BrowserRouter>
    );
};

describe("Sidebar", () => {
    test("Displays sidebar logo and branding", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const logo = screen.getByText("Foodify");
        const slogan = screen.getByText("ORDER. FOOD. HAPPY");
        expect(logo).toBeInTheDocument();
        expect(slogan).toBeInTheDocument();
    });

    test("Displays all main navigation items", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const homeLink = screen.getByText("Home");
        const menuLink = screen.getByText("Menu");
        const storeLink = screen.getByText("Store");
        const contactLink = screen.getByText("Contact");

        expect(homeLink).toBeInTheDocument();
        expect(menuLink).toBeInTheDocument();
        expect(storeLink).toBeInTheDocument();
        expect(contactLink).toBeInTheDocument();
    });

    test("Menu item is not clickable (no href attribute)", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        expect(menuElement).toBeInTheDocument();
        
        // Menu should not be a link (no href)
        const menuLink = menuElement.closest('a');
        expect(menuLink).not.toBeInTheDocument();
    });

    test("Menu item has expand/collapse functionality", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        expect(menuElement).toBeInTheDocument();
        
        // Menu should have role="button" for accessibility
        const menuButton = menuElement.closest('[role="button"]');
        expect(menuButton).toBeInTheDocument();
        expect(menuButton).toHaveAttribute('aria-expanded', 'false');
        expect(menuButton).toHaveAttribute('aria-label', 'Menu menu');
    });

    test("Menu sub-items are initially hidden", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const breakfastLink = screen.queryByText("Breakfast");
        const lunchLink = screen.queryByText("Lunch");
        const dinnerLink = screen.queryByText("Dinner");
        const dessertsLink = screen.queryByText("Desserts");

        expect(breakfastLink).not.toBeInTheDocument();
        expect(lunchLink).not.toBeInTheDocument();
        expect(dinnerLink).not.toBeInTheDocument();
        expect(dessertsLink).not.toBeInTheDocument();
    });

    test("Menu expands to show sub-items when clicked", async () => {
        const user = userEvent.setup();
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        const menuButton = menuElement.closest('[role="button"]')!;
        
        // Click to expand
        await user.click(menuButton);
        
        // Now sub-items should be visible
        const breakfastLink = screen.getByText("Breakfast");
        const lunchLink = screen.getByText("Lunch");
        const dinnerLink = screen.getByText("Dinner");
        const dessertsLink = screen.getByText("Desserts");

        expect(breakfastLink).toBeInTheDocument();
        expect(lunchLink).toBeInTheDocument();
        expect(dinnerLink).toBeInTheDocument();
        expect(dessertsLink).toBeInTheDocument();
        
        // Menu should now be expanded
        expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });

    test("Menu collapses when clicked again", async () => {
        const user = userEvent.setup();
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        const menuButton = menuElement.closest('[role="button"]')!;
        
        // First click to expand
        await user.click(menuButton);
        
        // Verify sub-items are visible
        expect(screen.getByText("Breakfast")).toBeInTheDocument();
        expect(menuButton).toHaveAttribute('aria-expanded', 'true');
        
        // Second click to collapse
        await user.click(menuButton);
        
        // Verify sub-items are hidden
        expect(screen.queryByText("Breakfast")).not.toBeInTheDocument();
        expect(screen.queryByText("Lunch")).not.toBeInTheDocument();
        expect(screen.queryByText("Dinner")).not.toBeInTheDocument();
        expect(screen.queryByText("Desserts")).not.toBeInTheDocument();
        
        // Menu should now be collapsed
        expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    test("Menu sub-items have correct href attributes", async () => {
        const user = userEvent.setup();
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        // Expand menu first
        const menuElement = screen.getByText("Menu");
        const menuButton = menuElement.closest('[role="button"]')!;
        await user.click(menuButton);
        
        // Check href attributes
        const breakfastLink = screen.getByText("Breakfast").closest('a');
        const lunchLink = screen.getByText("Lunch").closest('a');
        const dinnerLink = screen.getByText("Dinner").closest('a');
        const dessertsLink = screen.getByText("Desserts").closest('a');

        expect(breakfastLink).toHaveAttribute('href', '/menu/breakfast');
        expect(lunchLink).toHaveAttribute('href', '/menu/lunch');
        expect(dinnerLink).toHaveAttribute('href', '/menu/dinner');
        expect(dessertsLink).toHaveAttribute('href', '/menu/desserts');
    });

    test("Clickable navigation items have correct href attributes", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const homeLink = screen.getByText("Home").closest('a');
        const storeLink = screen.getByText("Store").closest('a');
        const contactLink = screen.getByText("Contact").closest('a');

        expect(homeLink).toHaveAttribute('href', '/');
        expect(storeLink).toHaveAttribute('href', '/store');
        expect(contactLink).toHaveAttribute('href', '/contact');
    });

    test("Displays contact information section", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const contactHeader = screen.getByText("Contact Info");
        expect(contactHeader).toBeInTheDocument();

        const address = screen.getByText("Address");
        const email = screen.getByText("Email");
        const hours = screen.getByText("Hours");
        const phone = screen.getByText("Phone");

        expect(address).toBeInTheDocument();
        expect(email).toBeInTheDocument();
        expect(hours).toBeInTheDocument();
        expect(phone).toBeInTheDocument();
    });

    test("Displays contact details", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const addressValue = screen.getByText("1487 Rocky Horse Carre, Arlington, TX 16819");
        const emailValue = screen.getByText("info@foodify.com");
        const hoursValue = screen.getByText("Mon-Sun: 8:00 AM - 10:00 PM");
        const phoneValue = screen.getByText("+1 800 6565 222");

        expect(addressValue).toBeInTheDocument();
        expect(emailValue).toBeInTheDocument();
        expect(hoursValue).toBeInTheDocument();
        expect(phoneValue).toBeInTheDocument();
    });
});