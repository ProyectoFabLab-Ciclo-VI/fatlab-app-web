import { IconName, IconType } from "../index.model.system";

export class IconHelper {
    public getIconUrl(name: IconName, type: IconType) {
        return `/icon/${type}/${name}`;
    }
}