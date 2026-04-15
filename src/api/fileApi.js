import { axiosWithCreds } from "./axiosInstances";

export const deleteFile = async (id) => {
  const { data } = await axiosWithCreds.delete(`/file/${id}`);
  return data;
};

export const renameFile = async (id, newFilename) => {
  const { data } = await axiosWithCreds.patch(`/file/${id}`, {
    newFilename,
  });
  return data;
};

export const uploadInititate = async ({size,parentDirId,filename}) => {
  console.log(filename);
  const url = parentDirId !== undefined
    ? `/file/s3uploadInitiate/${parentDirId}`
    : `/file/s3uploadInitiate`;

  const { data } = await axiosWithCreds.put(
    url,
    { size },
    {
      headers: {
        filename: filename,
      },
    }
  );
  return data
}

export const uploadComplete = async (id) => {
  const data = await axiosWithCreds.post(`/file//s3uploadComplete`,{fileId: id})
  return data
}



