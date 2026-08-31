import { ApiInterface, ApiModel } from "@microsoft/api-extractor-model";

const apiModel = new ApiModel();
const apiPackage = apiModel.loadPackage("./input-model/doc-model.api.json");

for (const item of apiPackage.members[0].members) {
  if (item instanceof ApiInterface && item.members.length > 0) {
    for (const innerMember of item.members) {
      if (innerMember.members.length > 0) {
        console.log(item.name);
      }
    }
  }
}

// TODO: Delete this file when development of TS documentation feature is
// complete.