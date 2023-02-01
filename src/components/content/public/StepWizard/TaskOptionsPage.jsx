import React from 'react';

const TaskOptionsPage = () => {
   return (
      <>
         <h1>Шаг 1</h1>;
         <input type="text" placeholder="Где вы находитесь? (полный адрес)" />
         <input type="radio" name="task-duration" />
      </>
   );
};

export default TaskOptionsPage;
