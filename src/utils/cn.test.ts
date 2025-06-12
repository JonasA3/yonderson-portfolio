/* eslint-env jest */

import { cn } from './cn';

describe("cn", () => {
    it("returns a single class when only one is passed", () => {
        expect(cn("text-lg")).toBe("text-lg");
    });

    it("merges multiple non-conflicting classes", () => {
        expect(cn("text-lg", "font-bold")).toBe("text-lg font-bold");
    });

    it("merges conflicting Tailwind classes correctly", () => {
        expect(cn("px-4", "px-8")).toBe("px-8");
    });

    it("handles conditional classes", () => {
        const isActive = true;
        const isHidden = false;

        expect(cn("base", isActive && "active", isHidden && "hidden")).toBe("base active");
    });

    it("filters out falsy values", () => {
        expect(cn(null, undefined, false, "", "text-center")).toBe("text-center");
    });
})