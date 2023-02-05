export const ConsoleGroup = data => {
   if (process.env.NODE_ENV === 'production') return;
   console.group(data);
};

export const Console = (desc, data) => {
   if (process.env.NODE_ENV === 'production') return;
   console.log(desc, data);
};

export const ConsoleGroupEnd = data => {
   if (process.env.NODE_ENV === 'production') return;
   console.groupEnd(data);
};
