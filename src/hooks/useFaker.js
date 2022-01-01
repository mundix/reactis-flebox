import React, { useCallback, useEffect, useState } from 'react';
import faker from 'faker';

export const useFaker = (images = []) => {

   const [collection, setCollection] = useState([]);

   const generateUserCollection = useCallback(
      () => {
         const users = images?.map(image => {
            return {
               id: faker?.datatype.uuid(),
               name: faker?.name.findName(),
               image: image,
               date: new Date().toDateString()
            }
         });
         setCollection(users);
      },
      [images],
   )
   
   useEffect(() => {
      generateUserCollection();
   }, [generateUserCollection]);

   return {
      collection
   }
}
