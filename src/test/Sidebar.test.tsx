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

        expect(homeLink).toBeInTheDocument();
        expect(menuLink).toBeInTheDocument();
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
        
        const sandwichLink = screen.queryByText("Sandwich");
        const saladLink = screen.queryByText("Salad");
        const pastaLink = screen.queryByText("Pasta");
        const pizzaLink = screen.queryByText("Pizza");

        expect(sandwichLink).not.toBeInTheDocument();
        expect(saladLink).not.toBeInTheDocument();
        expect(pastaLink).not.toBeInTheDocument();
        expect(pizzaLink).not.toBeInTheDocument();
    });

    test("Menu expands to show sub-items when clicked", async () => {
        const user = userEvent.setup();
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        const menuButton = menuElement.closest('[role="button"]')!;
        
        // Click to expand
        await user.click(menuButton);
        
        // Now sub-items should be visible
        const sandwichLink = screen.getByText("Sandwich");
        const saladLink = screen.getByText("Salad");
        const pastaLink = screen.getByText("Pasta");
        const pizzaLink = screen.getByText("Pizza");

        expect(sandwichLink).toBeInTheDocument();
        expect(saladLink).toBeInTheDocument();
        expect(pastaLink).toBeInTheDocument();
        expect(pizzaLink).toBeInTheDocument();
        
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
        expect(screen.getByText("Sandwich")).toBeInTheDocument();
        expect(menuButton).toHaveAttribute('aria-expanded', 'true');
        
        // Second click to collapse
        await user.click(menuButton);
        
        // Verify sub-items are hidden
        expect(screen.queryByText("Sandwich")).not.toBeInTheDocument();
        expect(screen.queryByText("Salad")).not.toBeInTheDocument();
        expect(screen.queryByText("Pasta")).not.toBeInTheDocument();
        expect(screen.queryByText("Pizza")).not.toBeInTheDocument();
        
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
        const sandwichLink = screen.getByText("Sandwich").closest('a');
        const saladLink = screen.getByText("Salad").closest('a');
        const pastaLink = screen.getByText("Pasta").closest('a');
        const pizzaLink = screen.getByText("Pizza").closest('a');

        expect(sandwichLink).toHaveAttribute('href', '/menu?category=sandwich');
        expect(saladLink).toHaveAttribute('href', '/menu?category=salad');
        expect(pastaLink).toHaveAttribute('href', '/menu?category=pasta');
        expect(pizzaLink).toHaveAttribute('href', '/menu?category=pizza');
    });

    test("Clickable navigation items have correct href attributes", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const homeLink = screen.getByText("Home").closest('a');

        expect(homeLink).toHaveAttribute('href', '/');
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
        
        const addressValue = screen.getByText("15 Rue de Marseille, 1002 Tunis, Tunisia");
        const emailValue = screen.getByText("info@foodify.com");
        const hoursValue = screen.getByText("Mon-Sun: 8:00 AM - 10:00 PM");
        const phoneValue = screen.getByText("+216 71 234 567");

        expect(addressValue).toBeInTheDocument();
        expect(emailValue).toBeInTheDocument();
        expect(hoursValue).toBeInTheDocument();
        expect(phoneValue).toBeInTheDocument();
    });

    // Keyboard interaction tests for lines 141-153
    test("Menu item is keyboard focusable with tabIndex=0", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        const menuButton = menuElement.closest('[role="button"]')!;
        
        expect(menuButton).toHaveAttribute('tabIndex', '0');
    });

    test("Menu expands when Enter key is pressed", async () => {
        const user = userEvent.setup();
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        const menuButton = menuElement.closest('[role="button"]')!;
        
        // Focus the button first
        (menuButton as HTMLElement).focus();
        
        // Press Enter key
        await user.keyboard('{Enter}');
        
        // Verify sub-items are visible
        expect(screen.getByText("Sandwich")).toBeInTheDocument();
        expect(screen.getByText("Salad")).toBeInTheDocument();
        expect(screen.getByText("Pasta")).toBeInTheDocument();
        expect(screen.getByText("Pizza")).toBeInTheDocument();
        
        // Menu should now be expanded
        expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });

    test("Menu expands when Space key is pressed", async () => {
        const user = userEvent.setup();
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        const menuButton = menuElement.closest('[role="button"]')!;
        
        // Focus the button first
        (menuButton as HTMLElement).focus();
        
        // Press Space key
        await user.keyboard(' ');
        
        // Verify sub-items are visible
        expect(screen.getByText("Sandwich")).toBeInTheDocument();
        expect(screen.getByText("Salad")).toBeInTheDocument();
        expect(screen.getByText("Pasta")).toBeInTheDocument();
        expect(screen.getByText("Pizza")).toBeInTheDocument();
        
        // Menu should now be expanded
        expect(menuButton).toHaveAttribute('aria-expanded', 'true');
    });

    test("Menu collapses when Enter key is pressed while expanded", async () => {
        const user = userEvent.setup();
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        const menuButton = menuElement.closest('[role="button"]')!;
        
        // First expand the menu
        await user.click(menuButton);
        expect(screen.getByText("Sandwich")).toBeInTheDocument();
        expect(menuButton).toHaveAttribute('aria-expanded', 'true');
        
        // Focus the button and press Enter key to collapse
        (menuButton as HTMLElement).focus();
        await user.keyboard('{Enter}');
        
        // Verify sub-items are hidden
        expect(screen.queryByText("Sandwich")).not.toBeInTheDocument();
        expect(screen.queryByText("Salad")).not.toBeInTheDocument();
        expect(screen.queryByText("Pasta")).not.toBeInTheDocument();
        expect(screen.queryByText("Pizza")).not.toBeInTheDocument();
        
        // Menu should now be collapsed
        expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    test("Menu collapses when Space key is pressed while expanded", async () => {
        const user = userEvent.setup();
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        const menuButton = menuElement.closest('[role="button"]')!;
        
        // First expand the menu
        await user.click(menuButton);
        expect(screen.getByText("Sandwich")).toBeInTheDocument();
        expect(menuButton).toHaveAttribute('aria-expanded', 'true');
        
        // Focus the button and press Space key to collapse
        (menuButton as HTMLElement).focus();
        await user.keyboard(' ');
        
        // Verify sub-items are hidden
        expect(screen.queryByText("Sandwich")).not.toBeInTheDocument();
        expect(screen.queryByText("Salad")).not.toBeInTheDocument();
        expect(screen.queryByText("Pasta")).not.toBeInTheDocument();
        expect(screen.queryByText("Pizza")).not.toBeInTheDocument();
        
        // Menu should now be collapsed
        expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    test("Other keyboard keys do not trigger menu expansion/collapse", async () => {
        const user = userEvent.setup();
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        const menuButton = menuElement.closest('[role="button"]')!;
        
        // Focus the button
        (menuButton as HTMLElement).focus();
        
        // Press Escape key (should not expand menu)
        await user.keyboard('{Escape}');
        
        // Verify sub-items are still hidden
        expect(screen.queryByText("Sandwich")).not.toBeInTheDocument();
        expect(screen.queryByText("Salad")).not.toBeInTheDocument();
        expect(screen.queryByText("Pasta")).not.toBeInTheDocument();
        expect(screen.queryByText("Pizza")).not.toBeInTheDocument();
        
        // Menu should still be collapsed
        expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    test("Menu button has correct aria-label for accessibility", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const menuElement = screen.getByText("Menu");
        const menuButton = menuElement.closest('[role="button"]')!;
        
        expect(menuButton).toHaveAttribute('aria-label', 'Menu menu');
    });

    test("Expand/collapse button has correct aria-label", () => {
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const expandButton = screen.getByLabelText('Expand menu');
        expect(expandButton).toBeInTheDocument();
    });

    test("Expand/collapse button aria-label updates when expanded", async () => {
        const user = userEvent.setup();
        render(<AppSidebar />, { wrapper: TestWrapper });
        
        const expandButton = screen.getByLabelText('Expand menu');
        
        // Click to expand
        await user.click(expandButton);
        
        // Button should now have collapse label
        const collapseButton = screen.getByLabelText('Collapse menu');
        expect(collapseButton).toBeInTheDocument();
    });
});