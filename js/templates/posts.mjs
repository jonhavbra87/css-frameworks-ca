import { postTemplate } from "./postTemplate.mjs";

export function renderAllPostsTemplates(postDataList, parent) {
    const elements = postDataList.map(postTemplate).filter(el => el !== null);
    parent.append(...elements);
}