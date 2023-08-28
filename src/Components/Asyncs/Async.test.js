import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("async test fetching api", () => {
  test("renders post if succeds", async () => {

    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
        json: async ()=>[{id:'p1', title: "first post"}]
    })
    render(<Async />);

    const asyncElement = await screen.findAllByRole("listitem");
    // const asyncElement = await screen.findAllByText(/.+/);
    expect(asyncElement).not.toHaveLength(0);
  });
});
