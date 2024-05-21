function f(A, B, C) {
  return (B === 0 && C === 1) || (A === 0 && C === 1) || (A === 1 && B === 0)
    ? 1
    : 0;
}

// Тестуємо функцію для всіх можливих комбінацій A, B, C
const testCases = [
  { A: 0, B: 0, C: 0 },
  { A: 0, B: 0, C: 1 },
  { A: 0, B: 1, C: 0 },
  { A: 0, B: 1, C: 1 },
  { A: 1, B: 0, C: 0 },
  { A: 1, B: 0, C: 1 },
  { A: 1, B: 1, C: 0 },
  { A: 1, B: 1, C: 1 },
];

testCases.forEach(({ A, B, C }) => {
  console.log(`f(${A}, ${B}, ${C}) = ${f(A, B, C)}`);
});
