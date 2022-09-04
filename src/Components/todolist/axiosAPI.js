import axios from "axios";

// axios.defaults.baseURL = 'http://localhost:3000';   //dev uses
//axios.defaults.baseURL = 'http://localhost:3000';  // production uses for heroku

const axiosGetObjectList = async (ObjectListURL, newDefaultItem, returnedObjectList) => {


  console.log("before getting data from server...", Date.now());

  let res = await axios.get(ObjectListURL);

  console.log("getting data done", res);

  const ArrayFromServer = res.data;

  ArrayFromServer.forEach((item) => {
    newDefaultItem.id = parseInt(item.id);
    newDefaultItem.title = item.title;
    newDefaultItem.isComplete = item.isComplete;

    returnedObjectList.push({ ...newDefaultItem });



  });
};

const axiosSaveObject = async (SaveObjectURL, item) => {
  let res = await axios.post(
    SaveObjectURL,

    item
  );

  console.log("posted", res);
};

const axiosSaveObjectList = async (SaveObjectListURL, itemList) => {
  let res = await axios.post(
    SaveObjectListURL,

    itemList
  );

  console.log("posted successfully", res);
};


export { axiosSaveObject, axiosSaveObjectList, axiosGetObjectList };
    