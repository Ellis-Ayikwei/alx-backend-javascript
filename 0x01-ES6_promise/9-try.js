const guardRail = (mathFunction) => {
  const queue = [];
  
try {
    const response = mathFunction();
    queue.push(response);
} catch (error) {
    queue.push(`Error: ${error.message}`);
}
  return [...queue, 'Guardrail was processed'];
}


export default guardRail