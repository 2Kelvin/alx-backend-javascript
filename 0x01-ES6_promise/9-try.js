// Throw an error

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    let value = mathFunction();
    queue.push(value);
    queue.push('Guardrail was processed');
  }
  catch (err)  {
    queue.push(String(err));
    queue.push('Guardrail was processed');
  };

  return queue;
}