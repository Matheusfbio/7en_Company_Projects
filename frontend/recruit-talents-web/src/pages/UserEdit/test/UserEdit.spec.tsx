import { describe, test, expect } from "vitest";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import EditarUsuario from "../UserEdit";

describe("Testing the component <UserEdit />", () => {
  test("Should be render UserEdit", () => render(<EditarUsuario />));
});
