import React, {useEffect} from 'react';
import {useGlobalContext} from '../../../../contexts/GlobalContextProvider';
import {useStepWizardContext} from '../../../../contexts/StepWizardContext';

const FoundWorkersPage = () => {
   const {usersByQuery, getUsersByQuery} = useGlobalContext();
   const {city} = useStepWizardContext();
   useEffect(() => {
      getUsersByQuery(true, city);
   }, []);

   return (
      <div>
         <h1>Шаг 2</h1>;{console.log(usersByQuery)}
      </div>
   );
};

export default FoundWorkersPage;
