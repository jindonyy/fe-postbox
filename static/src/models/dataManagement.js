import { postboxData } from "./data/postbox.js";
import { townData } from "./data/town.js";
import * as postboxDataCreator from "./dataCreator/postbox.js";
import * as townDataCreator from "./dataCreator/town.js";

export const initData = () => {
  postboxDataCreator.updatePostboxNumber(postboxData);
  townDataCreator.updateTownNumber(townData, postboxData.number);
  postboxDataCreator.updatePostboxLength(postboxData, townData.number);
  postboxDataCreator.updatePostboxTownIndice(postboxData, townData.number);
  townDataCreator.updateTownNames(townData);
  townDataCreator.updateTownWidth(townData);
  townDataCreator.updateTownHeight(townData);
  townDataCreator.updateTownCoordinates(townData);
  townDataCreator.updateParentTownIndice(townData);
  townDataCreator.updateAbsolutePostion(townData, postboxData);
  console.log(postboxData);
  console.log(townData);
};