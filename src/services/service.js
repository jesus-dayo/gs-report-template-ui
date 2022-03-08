const templateUrl = "/api/template";
const reportUrl = "/api/report";

const saveTemplate = async (template) => {
  const response = await fetch(`${templateUrl}`, {
    method: "POST",
    body: JSON.stringify(template),
  });
  return response.json();
};

const listTemplates = async (template) => {
  const response = await fetch(`${templateUrl}`, {
    method: "GET",
    body: JSON.stringify(template),
  });
  return response.json();
};

const uploadTemplate = async (template, name, description) => {
  let formData = new FormData();
  formData.append("file", template);
  formData.append("name", name);
  formData.append("description", description);
  const response = await fetch(`${templateUrl}/upload`, {
    method: "POST",
    body: formData,
  });
  return response.json();
};

const deleteTemplate = async (name) => {
  const response = await fetch(`${templateUrl}/${name}`, {
    method: "DELETE",
  });
  return response.json();
};

const generateReport = async (name, template) => {
  const response = await fetch(`${reportUrl}/generate/${name}`, {
    method: "POST",
    body: template,
  });
  return response;
};

export {
  saveTemplate,
  listTemplates,
  uploadTemplate,
  deleteTemplate,
  generateReport,
};
