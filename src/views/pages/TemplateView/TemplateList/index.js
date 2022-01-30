import PropTypes from 'prop-types';
import React from 'react';

const TemplateList = ({ templates }) => {
  console.log('list of templates', templates);
  return <div>Table</div>;
};

TemplateList.propTypes = {
  templates: PropTypes.array,
};

export default TemplateList;
