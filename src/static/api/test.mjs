import { ApiModel } from "@microsoft/api-extractor-model";

const apiModel = new ApiModel();
const apiPackage = apiModel.loadPackage("./input-model/doc-model.api.json");

for (const member of apiPackage.members) {
    console.log(member.displayName);
}

// TODO: Delete this file when development of TS documentation feature is
// complete.