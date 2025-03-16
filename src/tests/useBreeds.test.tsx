import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
import { fetchBreeds } from "../services/api";
import useBreeds from "../hooks/useFetchBreeds";

// Mock API function
vi.mock("../services/api", () => ({
  fetchBreeds: vi.fn(),
}));

describe("useBreeds", () => {
  it("should fetch and update breed list", async () => {
    const mockBreeds = ["hound", "labrador", "bulldog"];
    (fetchBreeds as jest.Mock).mockResolvedValue(mockBreeds);

    const { result } = renderHook(() => useBreeds());

    expect(result.current).toEqual([]); // Initial state

    await act(async () => {}); // Simulate async effect

    expect(fetchBreeds).toHaveBeenCalled();
    expect(result.current).toEqual(mockBreeds);
  });

  it("should handle an empty breed list", async () => {
    (fetchBreeds as jest.Mock).mockResolvedValue([]);

    const { result } = renderHook(() => useBreeds());

    await act(async () => {}); // Simulate async effect

    expect(result.current).toEqual([]);
  });
});
