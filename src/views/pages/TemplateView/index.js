import React, { useState, useEffect } from 'react';
import RightActionBar from '../../../components/layout/RightActionBar';
import Button from '../../../components/Button/Button';
import TemplateAdd from './TemplateAdd/index';
import { listTemplates } from '../../../services/service';
import TemplateList from './TemplateList';

const TemplateView = () => {
  const [showAddUpdate, setShowAddUpdate] = useState();
  const [templates, setTemplates] = useState();

  useEffect(() => {
    const fetchTemplates = async () => {
      try {
        const response = await listTemplates();
        setTemplates(response);
      } catch (e) {
        console.error(e);
        alert('Error fetching templates. Unable to contact server.');
      }
    };
    fetchTemplates();
  }, []);

  return (
    <div>
      <div className="w-full">
        <RightActionBar>
          <Button
            onClick={() => setShowAddUpdate(!showAddUpdate)}
            variant="secondary"
          >{`${showAddUpdate ? 'Back to Dashboard' : 'Add Template'}`}</Button>
        </RightActionBar>
      </div>
      {showAddUpdate && <TemplateAdd />}
      {!showAddUpdate && <TemplateList templates={templates} />}
    </div>
  );
};

export default TemplateView;
