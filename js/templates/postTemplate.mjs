import * as helpers from "../helpers/create/index.mjs"


export function postTemplate(postData) {
    
    const card = helpers.createCardContainer(postData);
    const cardBody = helpers.createCardBodyContainer(postData);
    const headerInfo = helpers.createHeaderInfoContainer(postData);
    const userInfo = helpers.createUserInfoContainer(postData);
    const imgContainer = helpers.createMediaContainer(postData);

    headerInfo.append(userInfo);
    cardBody.append(headerInfo, imgContainer);
    card.append(cardBody);

    return card;
}