import { Storage } from 'aws-amplify';

export const addImage = async (file: File) => {
  try {
    await Storage.put(file.name, file);
  } catch (error) {
    console.log('Error uploading file: ', error);
  }
};
