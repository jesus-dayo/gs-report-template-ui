const url = "/api/template";

const saveTemplate = async (template) => {
  const response = await fetch(`${url}`, {
    method: "POST",
    body: JSON.stringify(template),
  });
  return response.json();
};

const listTemplates = async (template) => {
  const response = await fetch(`${url}`, {
    method: "GET",
    body: JSON.stringify(template),
  });
  return response.json();
};

const uploadTemplate = async (template) => {
  let formData = new FormData();
  formData.append("file", template);
  const response = await fetch(`${url}/upload`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

const deleteTemplate = async (name) => {
  const response = await fetch(`${url}/${name}`, {
    method: "DELETE",
  });
  return response.json();
};

export { saveTemplate, listTemplates, uploadTemplate, deleteTemplate };
