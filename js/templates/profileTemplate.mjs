import * as helpers from "../helpers/create/index.mjs";

export function profileTemplate(profileData) {
    const profileContainer = helpers.createProfileCardContainer();
    const cardBody = helpers.createCardBodyContainer();
    const bannerImg = helpers.createProfileBanner(profileData.banner);
    const flexContainer = helpers.createProfileFlexContainer();
    const followersDiv = helpers.createProfileFollowersDiv(profileData._count.followers);
    const imgContainer = helpers.createProfileImage(profileData);
    const followingDiv = helpers.createProfileFollowingDiv(profileData._count.following);
    const title = helpers.createProfileTitle(profileData.name);
    const description = helpers.createProfileDescriptions(profileData.name);
    const buttonContainer = helpers.createProfileButtonContainer();
    const navContainer = helpers.createProfileNav();

    flexContainer.append(followersDiv, imgContainer, followingDiv);
    cardBody.append(flexContainer, title, description, buttonContainer, navContainer);
    profileContainer.append(bannerImg, cardBody);

    return profileContainer;
}