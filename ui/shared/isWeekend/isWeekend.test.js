import { isWeekend } from "./isWeekend";

describe("isWeekend", () => {
  it("returns true for Sunday", () => {
    const sunday = new Date("2023-10-01"); // Гарантировано воскресенье
    expect(isWeekend(sunday)).toBe(true);
  });

  it("returns true for Saturday", () => {
    const saturday = new Date("2023-10-07"); // Гарантировано суббота
    expect(isWeekend(saturday)).toBe(true);
  });

  // Тестируем все будние дни
  it("returns false for Monday", () => {
    const monday = new Date("2023-10-02"); // Понедельник
    expect(isWeekend(monday)).toBe(false);
  });

  it("returns false for Tuesday", () => {
    const tuesday = new Date("2023-10-03"); // Вторник
    expect(isWeekend(tuesday)).toBe(false);
  });

  it("returns false for Wednesday", () => {
    const wednesday = new Date("2023-10-04"); // Среда
    expect(isWeekend(wednesday)).toBe(false);
  });

  it("returns false for Thursday", () => {
    const thursday = new Date("2023-10-05"); // Четверг
    expect(isWeekend(thursday)).toBe(false);
  });

  it("returns false for Friday", () => {
    const friday = new Date("2023-10-06"); // Пятница
    expect(isWeekend(friday)).toBe(false);
  });
});
