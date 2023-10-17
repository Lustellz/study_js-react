import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component", () => {
    test("renders posts if request succeeds", async () => {
        window.fetch = jest.fn(); // mocking the code run to not perform the real function
        window.fetch.mockResolvedValueOnce({
            // overwrites the original action with simulation
            json: async () => [{ id: "p1", title: "First post" }],
        });
        render(<Async />);

        const listItemElements = await screen.findAllByRole("listitem");
        expect(listItemElements).not.toHaveLength(0);
    });
});
