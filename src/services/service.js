const url = 'https://template-service';

const saveTemplate = async (template) => {
  const response = await fetch(`${url}`, {
    method: 'POST',
    body: JSON.stringify(template),
  });
  return response.json();
};

const listTemplates = async (template) => {
  const response = await fetch(`${url}`, {
    method: 'GET',
    body: JSON.stringify(template),
  });
  return response.json();
};

export { saveTemplate, listTemplates };
