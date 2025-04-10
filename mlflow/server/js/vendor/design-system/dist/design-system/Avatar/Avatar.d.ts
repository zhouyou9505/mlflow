import React from 'react';
export type AvatarSize = 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarBackgroundColor = 'indigo' | 'teal' | 'pink' | 'purple' | 'brown';
export type AvatarType = 'user' | 'entity';
interface AvatarBasicProps {
    /** Type of the avatar: user or entity */
    type: AvatarType;
    /** The label is used to reinforce the Avatar and is most likely the name of the user or entity. */
    label: string;
    /** Size of the avatar */
    size?: AvatarSize;
}
interface AvatarImgProps extends AvatarBasicProps {
    /** Url for entity image */
    src?: string;
    /** Icon for entity image */
    icon?: never;
}
interface AvatarIconProps extends AvatarBasicProps {
    /** Url for entity image */
    src?: never;
    /** Icon for entity image */
    icon?: React.ReactNode;
    /** Background color of the avatar. Only applicable for icon avatar */
    backgroundColor?: AvatarBackgroundColor;
}
export type AvatarProps = {
    /** Type of the avatar: user or entity */
    type: 'user';
    /** Size of the avatar */
    size?: AvatarSize;
} | AvatarImgProps | AvatarIconProps;
export declare function Avatar(props: AvatarProps): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function DBAssistantAvatar({ size }: {
    size?: AvatarSize;
}): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function AssistantAvatar({ backgroundColor, size, }: {
    backgroundColor?: AvatarBackgroundColor;
    size?: AvatarSize;
}): import("@emotion/react/jsx-runtime").JSX.Element;
export interface AvatarGroupProps {
    size?: AvatarSize;
    users: (Omit<AvatarImgProps, 'type'> | Omit<AvatarIconProps, 'type'>)[];
}
export declare function AvatarGroup({ size, users }: AvatarGroupProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Avatar.d.ts.map