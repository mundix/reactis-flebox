import faker from 'faker';

export const GetFakeWorks = (limit = 10) => {

   return faker?.datatype.words(limit);
   
}
