import { renderHook, act } from "@testing-library/react";
import { vi } from "vitest";
import { fetchBreedsImages } from "../services/api";
import useBreedImages from "../hooks/useBreedImages";

// Mock API function
vi.mock("../services/api", () => ({
  fetchBreedsImages: vi.fn(),
}));

describe("useBreedImages", () => {
  beforeEach(() => {
    vi.clearAllMocks(); // Clear mock calls before each test
  });

  it("should fetch and update images when breed changes", async () => {
    const mockImages = ["image1.jpg", "image2.jpg"];
    (fetchBreedsImages as jest.Mock).mockResolvedValue(mockImages);

    const { result, rerender } = renderHook(
      ({ breed }: { breed: string | null }) => useBreedImages(breed),
      { initialProps: { breed: "hound" } }
    );

    expect(result.current).toEqual([]); // Initial state

    await act(async () => {
      rerender({ breed: "hound" });
    });

    expect(fetchBreedsImages).toHaveBeenCalledWith("hound");
    expect(fetchBreedsImages).toHaveBeenCalledTimes(1);
    expect(result.current).toEqual(mockImages);
  });

  it("should not fetch images if breed is null", async () => {
    const { result, rerender } = renderHook(
      ({ breed }: { breed: string | null }) => useBreedImages(breed),
      { initialProps: { breed: "" } }
    );

    expect(result.current).toEqual([]); 
    expect(fetchBreedsImages).not.toHaveBeenCalled(); // Ensure API is NOT called

    await act(async () => {
      rerender({ breed: "labrador" });
    });

    expect(fetchBreedsImages).toHaveBeenCalledTimes(1);
    expect(fetchBreedsImages).toHaveBeenCalledWith("labrador");
  });

  it("should clear images when breed is changed", async () => {
    const mockImages1 = ["image1.jpg", "image2.jpg"];
    const mockImages2 = ["image3.jpg", "image4.jpg"];
    
    (fetchBreedsImages as jest.Mock)
      .mockResolvedValueOnce(mockImages1) // First breed
      .mockResolvedValueOnce(mockImages2); // Second breed

    const { result, rerender } = renderHook(
      ({ breed }: { breed: string | null }) => useBreedImages(breed),
      { initialProps: { breed: "bulldog" } }
    );

    await act(async () => {
      rerender({ breed: "bulldog" });
    });

    expect(result.current).toEqual(mockImages1);

    await act(async () => {
      rerender({ breed: "golden" });
    });

    expect(fetchBreedsImages).toHaveBeenCalledTimes(2); // Ensure called exactly twice
    expect(fetchBreedsImages).toHaveBeenCalledWith("golden");
    expect(result.current).toEqual(mockImages2);
  });
});
