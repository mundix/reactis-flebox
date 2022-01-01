// Retrieve an array with just url of image generate obj from giphy api end point
export const GetImageFromState = (arrImages) => {
   return arrImages.map((image) => {
      return image.images.original.url;
    });
}
