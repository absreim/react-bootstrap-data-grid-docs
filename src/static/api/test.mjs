import { ApiModel } from "@microsoft/api-extractor-model";

const apiModel = new ApiModel();
const apiPackage = apiModel.loadPackage("./doc-model.api.json");

for (const member of apiPackage.members) {
    console.log(member.displayName);
}
