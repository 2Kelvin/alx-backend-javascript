export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const value = mathFunction();
    queue.push(value);
    queue.push('Guardrail was processed');
  } catch (err) {
    queue.push(String(err));
    queue.push('Guardrail was processed');
  }

  return queue;
}
