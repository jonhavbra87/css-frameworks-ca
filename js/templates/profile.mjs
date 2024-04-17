import { profileTemplate } from "./profileTemplate.mjs";

export function renderProfileTemplate(profile, parent) {
    const card = profileTemplate(profile);

    parent.append(card);
}

