import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";
import { test, describe, expect } from "vitest";

describe("Carousel", () => {
  test('should render "NOSSOS PARCEIROS" text', () => {
    render(<Carousel />);
    const text = screen.getByText((content, element: any) => {
      const hasText = (node) => node.textContent === content;
      const elementHasText = hasText(element);
      const childrenDontHaveText = Array.from(element.children).every(
        (child) => !hasText(child)
      );

      return elementHasText && childrenDontHaveText;
    });

    expect(text).toBeDefined();
    expect(text).toBeInTheDocument();
  });
});
