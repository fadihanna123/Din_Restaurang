import { useEffect } from 'react';
import sal from 'sal.js';
import { Admin } from 'styles';

const AdminTitleComp: React.FC = () => {
  useEffect(() => {
    sal();
  }, []);

  return (
    <Admin data-sal='zoom-in'>Välkommen till din restaurang</Admin>
  );
};

export default AdminTitleComp;
